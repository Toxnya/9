const userRepository = require('../reposio/userRepository')


const getAllUsers = () => {
    return userRepository.getAllUsers();
};

const getUserById = (id) => {
    return userRepository.getUserById(id);
};

const createUser = (user) => {
    return userRepository.createUser(user);
};

const updateUser = (id, user) => {
    return userRepository.updateUser(id, user);
};

const deleteUser = (id) => {
    return userRepository.deleteUser(id);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};