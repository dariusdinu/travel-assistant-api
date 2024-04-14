import { User } from '../../models';
import generateToken from '../../utils/generate-token';
import isValidUser from '../../utils/is-valid-user';

async function signUp(req, res) {
  const { firstName, lastName, emailAddress, password, birthDate } = req.body;
  if (!isValidUser(firstName, lastName, emailAddress, birthDate)) {
    return res.status(400).json({ message: 'Invalid user' });
  }

  const userExists = await User.findOne({ emailAddress });
  if (userExists) {
    return res.status(400).json({
      name: 'UserExistsError',
      message: 'A user with the given email is already registered',
    });
  }

  try {
    const user = new User({
      firstName,
      lastName,
      emailAddress,
      password,
      birthDate,
    });
    await user.save();
    const idToken = generateToken(user);

    return res.json({
      idToken,
      email: user.emailAddress,
      localId: user._id,
    });
  } catch (error) {
    return res.status(500).json({
      name: 'SignUpError',
      message: error.message || 'An error occurred while signing up',
    });
  }
}

export default signUp;
