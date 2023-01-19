class Logger {
    log = (id, message) => {
        console.log(`[User ID: ${id}]: ${message}`)
    }
}

module.exports = Logger