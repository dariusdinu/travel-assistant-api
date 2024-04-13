import { User } from '../../models';

async function findUserById(req, res) {
  if (!req.params.id)
    return res.status(400).json({ message: 'ID is required' });

  const user = await User.findById(req.params.id).lean();

  if (!user) return res.status(404).json({ message: 'User not found' });

  res.json(user);
}

export default findUserById;
