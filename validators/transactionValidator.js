const validate = (transaction) => {
    const error = {}

    if (!transaction.amount) {
        error.amount = 'Please provide a amount :('
    }

    if (!transaction.type) {
        error.type = 'Please provide a type :('
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = validate