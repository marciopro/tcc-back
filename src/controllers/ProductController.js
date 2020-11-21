import db from '../database/db';

var md5 = require('md5');

class ProductController {

    async getAllAProducts(req, res) {
        db.query('select * from product', (error, results, fields) => {
            return res.send(results);
        })
    }

    async createProducts(req, res) {
        const { nome, endereco, telefone, email, tipo, descricao, user_id } = req.body;
            db.query(`insert into product (nome, endereco, telefone, email, tipo, descricao, user_id) values ('${nome}','${endereco}','${telefone}','${email}','${tipo}','${descricao}','${user_id}');`, (error, results, fields) => {
                if (error) {
                    console.log('Aconteceu um erro na requisição:', req.originalUrl, ' descrição do erro: ->', error.sqlMessage);
                    res.status(500);
                    return res.json({ message: 'Ocorreu um erro em nossos servidores.' });
                }

                res.status(201);
                return res.json({ message: 'Produto criado com sucesso!' });
            })
        }
}

export default new ProductController();