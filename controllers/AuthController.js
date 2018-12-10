const jwt = require('jsonwebtoken');

module.exports.Login = (req, res) => {

}

module.exports.Verify = (req, res) => {
    if(!req.headers.authentication) {
        return res.status(403).send({error:'No credentials send!'})
    }

    if(IsVerified(req.headers.authentication)) {
        return res.status(200).send();
    } else {
        return res.status(403).send({error: 'Invalid credentials'})
    }
}

module.exports.IsAuthenticated = (req, res, next) => {
    if(!req.headers.authentication) {
        return res.status(403).send({error:'No credentials send!'})
    }

    if(IsVerified(req.headers.authentication)) {
        next();
    } else {
        return res.status(403).send({error: 'Invalid credentials'})
    }
}

function IsVerified(jwt_string) {
    if(jwt.verify(jwt_string, process.env.JWT_SECRET)) {
        return true
    } else {
        return false
    }
}