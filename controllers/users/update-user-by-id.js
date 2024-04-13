import { User } from '../../models';
import isValidUser from '../../utils/is-valid-user';

async function updateUserById(req, res) {
  const { id } = req.params;
  const { firstName, lastName, emailAddress, birthDate } = req.body;

  if (!isValidUser(firstName, lastName, emailAddress, birthDate)) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  const updatedUser = await User.findByIdAndUpdate(
    id,
    {
      firstName,
      lastName,
      emailAddress,
      birthDate,
    },
    { new: true }
  );

  if (!updatedUser) {
    return res
      .status(404)
      .json({ name: 'NotFoundError', message: 'User not found' });
  }

  res.json(updatedUser);
}

export default updateUserById;
