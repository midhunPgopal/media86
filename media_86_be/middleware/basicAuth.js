const apiBasicAuth = (req, res, next) => {
    let data
    //checking wheher basic auth is provided
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        data = {
            error: true,
            message: 'Missing Authorization Header'
        }
        return res.send(data);
    }

    // verify auth credentials
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    //checking basic auth credentials with predefined credentials
    if (username === 'abc' && password === 'abc') {
        next()
    } else {
        data = {
            error: true,
            message: 'Not authorised'
        }
        return res.send(data)
    }
}

module.exports = apiBasicAuth