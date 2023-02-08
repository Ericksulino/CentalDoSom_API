const itemService = require("../services/item.service");

const create = async (req,res) =>{
    try{
        const {nome,categoria,tipo,descricao,valor,anunciante,foto} = req.body;

    if(!nome || !categoria || !tipo || !descricao || !valor || !anunciante || !foto){
        res.status(400).send({message: "envie todos os campos para o registro!"});
        
    }
    else {
    try{const item = await itemService.createService(req.body)

    if(!item){
        res.status(400).send({message: "Erro ao criar o Item!"});
        
    }

    res.status(201).send({
        message: "Item criado com sucesso!"
    })} catch(err){
        res.status(500).send({message: err.message});
    }
}
} catch(err){
    res.status(500).send({message: err.message});
}
};

const findAll = async (req,res) =>{
    const itens = await itemService.findAllService();

    if(itens.length == 0){
        return res.status(400).send({message: "Não há itens cadastrados"});
    }
    res.send(itens);
}

module.exports = {
    create,
    findAll,
}