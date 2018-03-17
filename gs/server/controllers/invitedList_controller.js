const list = require('../temp/list')

module.exports = { 
    read: ( req, res, next ) => {
        res.status(200).send( list )
    }
}