const db = require("../../../../config/connection")

  
exports.getUsers = (req,res) => {
    // db.query('SELECT fname FROM users', (err, rows, fields) => {
    //     if (err) throw err
    //     console.log('The solution is: ', rows)
    // })
    console.log('The solution is')
    res.status(200).send("Good")
}
