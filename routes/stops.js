import { Router } from 'express';
import { asyncWrapper } from '../utils';
import { stopsController } from '../controllers';

const router = Router();

router.delete('/:id', asyncWrapper(stopsController.deleteStop));
router.get('/', asyncWrapper(stopsController.findAllStops));
router.get('/:id', asyncWrapper(stopsController.findStopById));
router.post('/', asyncWrapper(stopsController.createStop));
router.put('/:id', asyncWrapper(stopsController.updateStop));
router.get('/:tripId/stops', asyncWrapper(stopsController.findStopsByTripId));

export default router;
