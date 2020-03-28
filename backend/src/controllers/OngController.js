const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(require, response){
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    },
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.pseudoRandomBytes(4).toString('HEX');
        await connection('ongs').insert({
            id,
            name,
            whatsapp,
            email,
            city,
            uf
        });

        return response.json({ id });
    }
}