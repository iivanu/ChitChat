dbPassword = 'mongodb+srv://Mirko:' + encodeURIComponent('RZRPq5kivpZ2jC') + '@chitchatdb-jlvs6.mongodb.net/test?retryWrites=true&w=majority'

module.exports = {
    mongoURI: dbPassword,
    port: process.env.PORT || 3000,
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}