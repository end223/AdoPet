// controllers/authController.js
const AuthService = require('../services/AuthService');
const allowlist = require('../config/allowlist'); 
const blocklist = require('../config/blocklist'); 

const authService = new AuthService();

class AuthController {
  static async login(req, res) {
    const { email, senha } = req.body;

    try {
      const login = await authService.login({ email, senha });

      await allowlist.adicionar(login.accessToken);

      res.status(200).send(login);
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }

  static async logout(req, res) {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send('Token de acesso não informado');
    }

    const [, accessToken] = token.split(' ');

    try {
      await blocklist.adicionar(accessToken);
      res.status(200).send('Logout realizado com sucesso');
    } catch (error) {
      res.status(500).send('Erro ao realizar logout');
    }
  }
}

module.exports = AuthController;
