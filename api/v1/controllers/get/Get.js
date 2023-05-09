const {getConnection} = require("../../../../config/connection")
const {clientError} = require('../../utils/common')

  
exports.getUsers = async (req,res) => {
    try {
        const db = await getConnection();
        const [rows, fields] = await db.execute('SELECT * FROM users');
        db.release();
        return res.status(200).json({
            success: true,
            message: "successful",
            data: rows
        });
    } catch (error) {
        clientError(error, "Error getting users")
    }
}

exports.getPosts = async (req,res) => {
    try {
        const db = await getConnection();
        const [rows, fields] = await db.execute("SELECT * FROM posts WHERE `status`=?",['active'])
        db.release();
        return res.status(200).json({
            success: true,
            message: "successful",
            data: rows
        })
    } catch (error) {
        clientError(error, "Error getting users")
    }
}