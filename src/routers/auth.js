import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserSchema, resetPasswordSchema, sendResetEmailSchema } from '../validation/auth.js';
import { loginUserController, registerUserController, resetPasswordController, sendResetEmailController } from '../controllers/auth.js';
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

authRouter.post(
    '/reset-pwd',
    validateBody(resetPasswordSchema),
    ctrlWrapper(resetPasswordController),
);

export default authRouter;