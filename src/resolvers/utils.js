const jwt = require('jsonwebtoken');
const APP_SECRET = 'nasigoreng-ecenggondok-beraskencur';

function getUserId(context) {
    console.log("'''''''''''''''''''''''''''''''''");
    console.log();

    const authorization = context.req.headers.authorization;

    if (!authorization)
        throw new Error('Not authenticated.');

    const token = authorization.replace('Bearer ', '');
    const {userId} = jwt.verify(token, APP_SECRET);
    return userId;
}

module.exports = {
    APP_SECRET,
    getUserId
};