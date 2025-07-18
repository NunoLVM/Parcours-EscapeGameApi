// repositories/userRepository.js
const fs = require("fs");
const path = require("path");
const usersFile = path.join(__dirname, "users.json");

function loadUsersFromFile() {
  try {
    const data = fs.readFileSync(usersFile);
    return JSON.parse(data);
  } catch (err) {
    fs.writeFileSync(usersFile, "[]");
    return [];
  }
}

function saveUsersToFile(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

let users = loadUsersFromFile();

function findUserByUsername(username) {
  return users.find(user => user.username === username);
}

function createUser(user) {
  users.push(user);
  saveUsersToFile(users);
  return user;
}

function updateUserProgress(username, currentRoom) {
  const user = findUserByUsername(username);
  if(user) {
    user.currentRoom = currentRoom;
    saveUsersToFile(users);
  }
}

function getAllUsers() {
  return users;
}

module.exports = {
  users,
  findUserByUsername,
  createUser,
  updateUserProgress,
  getAllUsers,
};
