const defesa = async (req, res) => {
    return res.status(200).json({ message: 'Acesso permitido.' });
}

const acessarProtegido = (req, res) => {
  return res.status(200).json({ message: 'Você acessou uma rota protegida!', user: req.user });
};

export default {
    defesa,
    acessarProtegido,
}
