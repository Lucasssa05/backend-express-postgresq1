import express from 'express';
import userController from '../controller/user-controlle.js';
import protectedController from '../controller/protected-controller.js';
import verificarToken from '../middleware/verificador-token.js';

const router = express.Router();

// Rotas públicas
router.post('/register', userController.registrar);
router.post('/login', userController.login);

// Rotas protegidas
router.get('/protected', verificarToken, protectedController.acessarProtegido);

export default router;

