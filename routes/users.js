import { Router } from 'express';
import { usersController } from '../controllers';
import { asyncWrapper } from '../utils';

const router = Router();

router.delete('/:id', asyncWrapper(usersController.deleteUser));
router.get('/', asyncWrapper(usersController.findAllUsers));
router.get('/:id', asyncWrapper(usersController.findUserById));
router.post('/', asyncWrapper(usersController.createUser));
router.post(
  '/sign-in-with-password',
  asyncWrapper(usersController.signInWithPassword)
);
router.post('/sign-up', asyncWrapper(usersController.signUp));
router.put('/:id', asyncWrapper(usersController.updateUser));

export default router;
