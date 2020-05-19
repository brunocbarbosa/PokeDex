const axios = require('axios'),
    url = require('../../config/environment');

// Get datas, all datas limited by 151 results, by name and number
module.exports = {
    async getAll(req, res){
        const pokemons = 
            await axios.get(`${url}/pokemon/?limit=151`)
                .then(res => res.data)
                .catch(error => console.log(error))

        return res.json(pokemons)
    },

    async getByName(req, res){
        const pokemon = 
            await axios.get(`${url}/pokemon/${req.params.name}`)
                .then(res => res.data)
                .catch(error => console.log(error))

        return res.json(pokemon)
    },

    async getByNumber(req, res){
        const pokemon = 
            await axios.get(`${url}/pokemon/${req.params.number}`)
                .then(res => res.data)
                .catch(error => console.log(error))
        
        return res.json(pokemon)
    }

}