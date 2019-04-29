var IndexSQL = {
    insert:"INSERT INTO navlist (name,range_code) VALUES(?,?)",
    drop:`DROP TABLE navlist`,
    queryAll:`SELECT * FROM navlist`,
    getUserById:`SELECT * FROM navlist WHERE id=?`
}
module.exports = IndexSQL