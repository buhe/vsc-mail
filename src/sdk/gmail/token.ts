const bluebird = require('bluebird');
let { web: { client_id, client_secret } } = require('./client_secret');
var xoauth2 = require("xoauth2");
export default async function getToken(user: string, refresh_token: string) {
    let xoauth2gen = xoauth2.createXOAuth2Generator({
        user: user, // the email address
        clientId: client_id,
        clientSecret: client_secret,
        refreshToken: refresh_token
    });
    xoauth2gen = bluebird.promisifyAll(xoauth2gen);
    return await xoauth2gen.getTokenAsync();
}