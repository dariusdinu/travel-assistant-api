import { User } from '../../models';
import isValidUser from '../../utils/is-valid-user';

async function updateUserById(req, res) {
  const { id } = req.params;
  const updateData = req.body;

  const existingUser = await User.findById(id);
  if (!existingUser) {
    return res
      .status(404)
      .json({ name: 'NotFoundError', message: 'User not found' });
  }

  const updatedUserData = { ...existingUser.toObject(), ...updateData };

  if (!isValidUser(updatedUserData)) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  const updatedUser = await User.findByIdAndUpdate(id, updatedUserData, {
    new: true,
  });

  res.json(updatedUser);
}

export default updateUserById;
