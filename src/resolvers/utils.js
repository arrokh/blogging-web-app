const jwt = require('jsonwebtoken');
const APP_SECRET = 'nasigoreng-ecenggondok-beraskencur';
const APP_AUTH_HEADER = 'Bearer ';
const {User} = require('../sequelize/models/UserModel');

function getUserId(context) {
    const authorization = context.req.headers.authorization;

    if (!authorization)
        throw new Error('Not authenticated');

    const token = authorization.replace('Bearer ', '');
    const {userId} = jwt.verify(token, APP_SECRET);
    return userId;
}

async function getUserAuth(context, checkIsUserExist = false) {
    const authorization = context.req.headers.authorization;

    if (!authorization)
        throw new Error('Not authenticated');

    if (!authorization.includes(APP_AUTH_HEADER))
        throw new Error('Client request format was not accepted');

    const token = authorization.replace(APP_AUTH_HEADER, '');

    const {userId} = jwt.verify(token, APP_SECRET);

    if (checkIsUserExist) {
        const user = await User.findOne({where: {id: userId}}).then(data => data);
        if (!user)
            throw new Error('User with passed Id was not found');

        return {
            userId,
            isUserExist: true
        }
    }

    return {userId};
}

module.exports = {
    APP_SECRET,
    getUserId,
    getUserAuth
};