var ContentSQL = {
    insert:"INSERT INTO contentList (title,account,content,author,creatTime) VALUES(?,?,?,?,?)",
    drop:`DROP TABLE contentList`,
    queryAll:`SELECT * FROM contentList`,
    getUserById:`SELECT * FROM contentList WHERE id=?`
}
module.exports = ContentSQL