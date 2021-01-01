const Transaction = require('../model/Transaction')
const User = require("../model/User")
const { serverError, resourceError } = require("../utils/errors")
const transactionValidator = require('../validators/transactionValidator')

exports.postTransaction = (req, res) => {

    //Extract data from request
    const { amount, note, type } = req.body

    let userId = req.user._id

    //Validate data
    let validate = transactionValidator({ amount, type })
    if (!validate.isValid) {
        return res.status(400).json(validate.error)
    } else {
        // res.status(200).json({
        //     message: `Everything is fine :)`
        // })

        // console.log(amount)

        //new transaction object
        let transaction = new Transaction({
            amount,
            note,
            type,
            author: userId
        })

        //save to database
        transaction
            .save()
            .then((transaction) => {
                let updatedUser = {...req.user._doc }
                if (type === 'income') {
                    updatedUser.balance = updatedUser.balance + amount
                    updatedUser.income = updatedUser.income + amount

                } else if (type === 'expense') {
                    updatedUser.balance = updatedUser.balance - amount
                    updatedUser.expense = updatedUser.expense + amount
                }
                // console.log(updatedUser)
                updatedUser.transactions.unshift(transaction._id)
                User.findByIdAndUpdate(updatedUser._id, { $set: updatedUser }, { new: true })
                    .then(result => {
                        return res.status(201).json({
                            message: `Transaction has been recorded successfully.. :)`,
                            //response back with new data
                            ...transaction._doc,
                            user: result
                                // user
                        })
                    })
                    .catch((error) => serverError(res, error.message))
            })
            .catch((error) => serverError(res, error.message))
    }
}

exports.getTransaction = (req, res) => {
    let { _id } = req.user
    Transaction.find({ author: _id })
        .then(transactions => {
            if (transactions.length === 0) {
                res.status(200).json({
                    message: `No transaction found..`
                })
            } else {
                res.status(200).json(transactions)
            }
        })
        .catch((error) => serverError(res, error.message))
}

exports.getSingleTransaction = (req, res) => {
    let { transactionId } = req.params
    Transaction.findById(transactionId)
        .then(transaction => {
            if (!transaction) {
                res.status(200).json({
                    message: `No transaction found..`
                })
            } else {
                res.status(200).json(transaction)
            }
        })
        .catch((error) => serverError(res, error.message))
}

exports.updateTransaction = (req, res) => {
    let { transactionId } = req.params
    User.findByIdAndUpdate(transactionId, { $set: req.body })
        .then(result => {
            res.status(200).json({
                message: `Updated successfully. :)`,
                ...result.doc
            })
        })
        .catch((error) => serverError(res, error.message))
}

exports.deleteTransaction = (req, res) => {
    let { transactionId } = req.body
    User.findByIdAndDelete(transactionId)
        .then(result => {
            res.status(200).json({
                message: `Deleted successfully. :)`,
                ...result.doc
            })
        })
        .catch((error) => serverError(res, error.message))
}