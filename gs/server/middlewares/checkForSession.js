module.exports = function(req, res, next) {
    const { session } = req;

    if (!session.user){
        session.user = {id: '', username:'',  password: ''}
    }

    next();
}