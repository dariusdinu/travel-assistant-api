import { Router } from 'express';
import { usersController } from '../controllers';
import { asyncWrapper } from '../utils';

const router = Router();

router.get('/', asyncWrapper(usersController.findAllUsers));
router.get('/:id', asyncWrapper(usersController.findUserById));
router.post('/', asyncWrapper(usersController.createUser));
router.put('/:id', asyncWrapper(usersController.updateUser));
router.delete('/:id', asyncWrapper(usersController.deleteUser));

export default router;
