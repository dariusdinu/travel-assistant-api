import { User } from '../../models';

async function deleteUser(req, res) {
  if (!req.params.id)
    return res.status(400).json({ message: 'ID is required' });

  const dbResponse = await User.findByIdAndDelete(req.params.id);

  if (dbResponse) {
    res.json(dbResponse);
  } else {
    res.status(404).json({ name: 'NotFoundError', message: 'User not found' });
  }
}

export default deleteUser;
