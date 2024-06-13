import { Router } from 'express';
import { tripsController } from '../controllers';
import { asyncWrapper } from '../utils';

const router = Router();

router.delete('/:id', asyncWrapper(tripsController.deleteTrip));
router.get('/', asyncWrapper(tripsController.findAllTrips));
router.get('/:id', asyncWrapper(tripsController.findTripById));
router.post('/', asyncWrapper(tripsController.createTrip));
router.put('/:id', asyncWrapper(tripsController.updateTrip));

export default router;
