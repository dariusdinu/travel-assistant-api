import { User } from '../../models';
import isValidUser from '../../utils/is-valid-user';

async function createUser(req, res) {
  const {
    firstName,
    lastName,
    emailAddress,
    password,
    birthDate,
    notificationsEnabled,
  } = req.body;

  if (!isValidUser(firstName, lastName, emailAddress, birthDate)) {
    return res.status(400).json({ message: 'Invalid user' });
  }

  const user = new User({
    firstName,
    lastName,
    emailAddress,
    password,
    birthDate,
    notificationsEnabled,
  });
  await user.save();
  res.json(user);
}

export default createUser;
