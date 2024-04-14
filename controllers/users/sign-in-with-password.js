import bcrypt from 'bcrypt';
import { User } from '../../models';
import generateToken from '../../utils/generate-token';

async function signInWithPassword(req, res) {
  const { emailAddress, password } = req.body;
  if (!emailAddress || !password) {
    return res.status(400).json({
      name: 'MissingCredentialsError',
      message: 'Email and password are required',
    });
  }

  const user = await User.findOne({ emailAddress });
  if (!user) {
    return res.status(404).json({
      name: 'UserDoesNotExistError',
      message: 'A user with the given email does not exist',
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({
      name: 'InvalidCredentialsError',
      message: 'Invalid credentials',
    });
  }

  const idToken = generateToken(user);

  return res.json({
    idToken,
    email: user.emailAddress,
    localId: user._id,
    registered: true,
  });
}

export default signInWithPassword;
