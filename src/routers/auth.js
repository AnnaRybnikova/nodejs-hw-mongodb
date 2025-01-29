import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserSchema } from '../validation/auth.js';
import { registerUserController } from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import { refreshUserSessionController } from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
    '/register',
    validateBody(registerUserSchema),
    ctrlWrapper(registerUserController),
);

authRouter.post(
    '/login',
    validateBody(registerUserSchema),
    ctrlWrapper(registerUserController),
);

authRouter.post(
    '/refresh',
    ctrlWrapper(refreshUserSessionController)
);

export default authRouter;
