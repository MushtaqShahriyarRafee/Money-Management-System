const router = require('express').Router()
const authenticate = require('../authenticate')
const transactionController = require('../controllers/transactionController')

//Adding transaction route
//localhost:4000/api/users/transaction
router.post('/create', authenticate, transactionController.postTransaction)

//Viewing transactions route
//localhost:4000/api/users/transactionInfo
router.get('/allTransactions', authenticate, transactionController.getTransaction)

//Viewing a single transaction route
//localhost:4000/api/users/
router.get('/:transactionId', authenticate, transactionController.getSingleTransaction)

//Editing a  transaction route
//localhost:4000/api/users/
router.put('/:transactionId', authenticate, transactionController.updateTransaction)

//Deleting a transaction route
//localhost:4000/api/users/
router.delete('/:transactionId', authenticate, transactionController.deleteTransaction)


module.exports = router