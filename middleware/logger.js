const log = (req, res, next) => {
    console.log('middleware testing...');
    next()
}

module.exports = log