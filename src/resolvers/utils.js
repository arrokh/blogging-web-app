const jwt = require('jsonwebtoken');
const APP_SECRET = 'nasigoreng-ecenggondok-beraskencur';

function getUserId(context) {
    const authorization = context.request.get('Authorization');

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