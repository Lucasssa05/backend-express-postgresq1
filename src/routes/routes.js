import express from 'express';
import userControle from '../controller/user-controlle.js';
import verificadorToken from '../middleware/verificador-token.js';
import protectedController from '../controller/protected-controller.js';
import contatoController from '../controller/contato-controller.js';
const router = express.Router();

router.post('/register', userControle.salvarBanco);
router.post('/login', userControle.loginBanco);
router.get('/protected', verificadorToken, protectedController.defesa);
router.post('/contato', verificadorToken, contatoController.criarContato);
router.get('/contato', verificadorToken, contatoController.listarContatos);
export default router;

