const axios = require('axios'),
    url = require('../../config/environment');

// Get datas, all datas limited by 151 results or by name and number
module.exports = {
    async getAll(req, res) {
        try {
            const { data } = await axios.get(`${url}/pokemon/?limit=10`);

            return res.status(200).send(data);
        } catch (error) {
            console.error(error);
        }
    },

    async getOne(req, res){
        try {
            const { data } = await axios.get(`${url}/pokemon/${req.params.data}`);
        
            return res.status(200).send(data);
        } catch (error) {
            console.log(error);
        }
    }
}