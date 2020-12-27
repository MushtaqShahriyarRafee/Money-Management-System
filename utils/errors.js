module.exports = {
    serverError(response, error) {
        response.status(500).json({ message: error })
    },

    resourceError(response, message) {
        response.status(400).json({ message: message })
    },
}