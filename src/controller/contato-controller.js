import contatoService from "../service/contato-service.js"


const criarContato = async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.telefone || !req.body.endereco) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }
    try {
        await contatoService.criarContato(req, res);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar contato: " + error });
        
    }
}
const listarContatos = async (id, res) => {
    if (!id) {
        return res.status(400).json({ message: "ID do usuário é obrigatório!" });
    }
    try {
        await contatoService.listarContatosbyuserid(id, res);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao listar contatos: " + error });
    }
}
const atualizarContato = async (req, res) => {
    if (!req.params.id) {
        return res.status(400).json({ message: "ID do contato é obrigatório!" });
    }
    try {
        await contatoService.atualizarContato(req, res);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao atualizar contato: " + error });
    }
}
const deletarContato = async (req, res) => {
    if (!req.params.id) {
        return res.status(400).json({ message: "ID do contato é obrigatório!" });
    }
    try {
        await contatoService.deletarContato(req, res);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao deletar contato: " + error });
    }
}

export default {
    criarContato,
    listarContatos,
    atualizarContato,
    deletarContato 
}
