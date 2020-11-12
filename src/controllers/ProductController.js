import db from '../database/db';

var md5 = require('md5');

class ProductController {

    async getAllAProducts(req, res) {
       db.query('select * from product', (error,results, fields)=>{
        return res.send(results);
    })
    }

    async createProducts(req, res) {
        const { nome, endereco, telefone, email, tipo, descricao, user_id } = req.body;
        const save = await db.query(`insert into product (nome,endereco,telefone,email,tipo,descricao,user_id) values  ('${nome}','${endereco}','${telefone}','${email}','${tipo}','${descricao}',${user_id})`);
        
        res.send('Produto criado com sucesso!');
    }

}

export default new ProductController();