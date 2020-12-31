//login controller
// module.exports = {
//     login(req, res) {
//         let name = req.body.name
//         let email = req.body.email
//         res.json({
//             message: `Welcome ${name}! We will contact with you by ${email} :)`
//         })
//     }
// }

const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const { serverError, resourceError } = require("../utils/errors")

const { deserializeUser } = require('passport')
const validate = require('../validators/registerValidator')
const registerValidator = require('../validators/registerValidator')
const loginValidator = require('../validators/loginValidator')
const User = require("../model/User")

exports.postLogin = (req, res) => {

    //Extract data from request
    const { email, password } = req.body

    //Validate data
    let validate = loginValidator({ email, password })

    if (!validate.isValid) {
        return res.status(400).json(validate.error)
    }

    //Check for user availability
    User.findOne({ email })
        // use populate for transaction
        .then((user) => {
            if (!user) {
                return resourceError(res, "User not found :(")
            }

            //Compare password
            bcrypt.compare(password, user.password, (error, result) => {
                if (error) {
                    return serverError(res, error.message)
                }
                if (!result) {
                    return resourceError(res, 'Password doesn\'t match. Please enter correct password')
                }

                //Generate token and response back
                let token = jwt.sign({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    amount: user.amount,
                    income: user.income,
                    expense: user.expense,
                    transactions: user.transactions
                }, 'SECRET', { expiresIn: '24h' })

                res.status(200).json({
                    message: `Login successful :)`,
                    token: `Bearer ${token}`
                })
            })
        })
        .catch((error) => serverError(res, error.message))

}

exports.postRegister = (req, res) => {

    //read client data
    const { name, email, password, confirmPassword } = req.body

    //validation check user data
    let validate = registerValidator({ name, email, password, confirmPassword })
    if (!validate.isValid) {
        return res.status(400).json(validate.error)
    } else {
        // res.status(200).json({
        //     message: `Everything is fine :)`
        // })
        //check for duplicate user
        console.log(email)
        User.findOne({ email })
            .then(user => {
                if (user) {
                    return resourceError(res, "This email is already existed :(")
                }

                bcrypt.hash(password, 11, (error, hash) => {
                    if (error)
                        return resourceError(res, error.message)

                    //new user object
                    let user = new User({
                        name,
                        email,
                        password: hash,
                        balance: 0,
                        income: 0,
                        expense: 0,
                        transactions: []
                    })

                    //save to database
                    user
                        .save()
                        .then((user) => {
                            return res.status(201).json({
                                message: `User has been created successfully :)`,
                                //response back with new data
                                // ...user._doc
                                user
                            })
                        })
                        .catch((error) => serverError(res, error.message))
                })
            })
            .catch((error) => serverError(res, error.message))

    }
}

exports.getUser = (req, res) => {
    User.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch((error) => serverError(res, error.message))
}