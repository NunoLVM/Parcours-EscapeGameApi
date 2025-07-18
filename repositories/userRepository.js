// repositories/userRepository.js

const fs = require("fs");
const path = require("path");
const usersFile = path.join(__dirname, "users.json");



function findUserByUsername(username) {
  return users.find(user => user.username === username);
}

function createUser(user) {
  users.push(user);
  return user;
}

function getAllUsers() {
  return users;
}

module.exports = {
  users,
  findUserByUsername,
  createUser,
  getAllUsers,
};
