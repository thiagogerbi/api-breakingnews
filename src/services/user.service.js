const User = require("../models/User");

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (userId) => User.findById(userId);

const updateService = (
  userdId,
  name,
  username,
  email,
  password,
  avatar,
  background
) =>
  User.findOneAndUpdate(
    { _id: userdId },
    { name, username, email, password, avatar, background }
  );

module.exports = {
  createService,
  findAllService,
  findByIdService,
  updateService,
};
