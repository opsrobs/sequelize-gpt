const UserStorie = require('../models/UserStorie');
module.exports = {
    async store(req, res){
        const {input_storie, output_storie} = req.body;
        const us = await UserStorie.create({input_storie, output_storie})
        return res.json(us);
    }
};