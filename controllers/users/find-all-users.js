import { User } from '../../models';

async function findAllUsers(_req, res) {
  const users = await User.find({}).lean();
  res.json(users);
}

export default findAllUsers;
