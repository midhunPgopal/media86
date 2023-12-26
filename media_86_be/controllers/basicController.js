const connection = require('../db_config/config')

exports.getAllMessage = (req, res) => {
    const sql = `select * from media86 order by id desc`
    connection.query(sql, (error, result) => {
        if (error) {
            console.log(error);
            data = {
                error: true,
                message: 'Something went wrong'
            }
            return res.send(data)
        }
        data = {
            error: false,
            message: 'success',
            result
        }
        return res.send(data)
    })
}

exports.createnewMessge = (req, res) => {
    const sql = `insert into media86 (name, message) values ('${req.body.name}', '${req.body.message}')`
    connection.query(sql, (error, result) => {
        if (error) {
            data = {
                error: true,
                message: 'Something went wrong'
            }
            return res.send(data)
        }
        data = {
            error: false,
            message: 'success'
        }
        return res.send(data)
    })
}

exports.updateMessage = (req, res) => {
    const sql = `update media86 set name='${req.body.name}', message='${req.body.message}' where id=${req.body.id}`
    connection.query(sql, (error, result) => {
        if (error) {
            data = {
                error: true,
                message: 'Something went wrong'
            }
            return res.send(data)
        }
        data = {
            error: false,
            message: 'success'
        }
        return res.send(data)
    })
}