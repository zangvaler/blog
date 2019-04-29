var UserSQL = {
    insert:"INSERT INTO users (username,pass_word) VALUES(?,?)",
    drop:`DROP TABLE users`,
    queryAll:`SELECT * FROM users`,
    getUserById:`SELECT * FROM users WHERE id=?`
}
module.exports = UserSQL