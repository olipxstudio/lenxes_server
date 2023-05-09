const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lenxes',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const getConnection = async () => {
    try {
        const connection = await pool.getConnection();
        // console.log(`Connection ID: ${connection.threadId}`);
        return connection;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getConnection
};