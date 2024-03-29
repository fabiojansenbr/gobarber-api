import { Router } from 'express';

import AuthenticateService from '../services/AuthenticateService';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateService = new AuthenticateService();

  const { user, token } = await authenticateService.execute({
    email,
    password,
  });

  return response.json({ user, token });
});

export default sessionRouter;
