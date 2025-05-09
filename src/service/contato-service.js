import Contato from "../models/contato.js";

const criarContato = async (req, res) => {
    const { name, email, telefone, endereco } = req.body;
    const userId = req.userId; // Obtendo o userId do token JWT
    try {
        const novoContato = await Contato.create({
            name,
            email,
            telefone,
            endereco,
            userId
        });
        return res.status(201).json({ message: "Contato cadastrado com sucesso!", contato: novoContato });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao cadastrar contato: " + error });
    }
}
// mudar no futuro 
const listarContatosbyuserid = async (req, res) => {
    const userId = req.userId;
    try {
        const contatos = await Contato.findAll({ where: { userId: userId } });
        if (contatos.length === 0) {
            return res.status(404).json({ message: "Nenhum contato encontrado!" });
        }
        return res.status(200).json(contatos);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao listar contatos: " + error });
    }
}
const listarContatoPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const contato = await Contato.findByPk(id);
        if (!contato) {
            return res.status(404).json({ message: "Contato não encontrado!" });
        }
        return res.status(200).json(contato);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao listar contato: " + error });
    }
}
const atualizarContato = async (req, res) => {
    const { id } = req.params;
    const { name, email, telefone, endereco } = req.body;

    try {
        const contato = await Contato.findByPk(id);
        if (!contato) {
            return res.status(404).json({ message: "Contato não encontrado!" });
        }

        await contato.update({
            name,
            email,
            telefone,
            endereco
        });

        return res.status(200).json({ message: "Contato atualizado com sucesso!", contato });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao atualizar contato: " + error });
    }
}
const deletarContato = async (req, res) => {
    const { id } = req.params;
    try {
        const contato = await Contato.findByPk(id);
        if (!contato) {
            return res.status(404).json({ message: "Contato não encontrado!" });
        }

        await contato.destroy();
        return res.status(200).json({ message: "Contato deletado com sucesso!" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao deletar contato: " + error });
    }
}
export default { criarContato, listarContatosbyuserid, listarContatoPorId, atualizarContato, deletarContato }

