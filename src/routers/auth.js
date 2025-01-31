import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserSchema, sendResetEmailSchema } from '../validation/auth.js';
import { loginUserController, registerUserController, sendResetEmailController } from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import { refreshUserSessionController } from '../controllers/auth.js';
import { logoutUserController } from '../controllers/auth.js';
import { loginUserSchema } from '../validation/auth.js';

const authRouter = Router();

authRouter.post(
    '/register',
    validateBody(registerUserSchema),
    ctrlWrapper(registerUserController),
);

authRouter.post(
    '/login',
    validateBody(loginUserSchema),
    ctrlWrapper(loginUserController),
);

authRouter.post(
    '/refresh',
    ctrlWrapper(refreshUserSessionController)
);

authRouter.post(
    '/logout',
    ctrlWrapper(logoutUserController)
);

authRouter.post(
    '/send-reset-email',
    validateBody(sendResetEmailSchema),
    ctrlWrapper(sendResetEmailController),
);

export default authRouter;