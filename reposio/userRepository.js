let users = [
    { id: 1, name: 'Майк Эрмантраут', email: 'mikeerr@example.com', age: 60 },
    { id: 2, name: 'Сэмюэл Джексон', email: 'samjack@example.com', age: 75 },
    { id: 3, name: 'Кенни Маккормик', email: 'kenny@example.com', age: 10 },
];

const getAllUsers= () => {
    return users;
};

const getUserById = (id) => {
    return users.find(user => user.id === parseInt(id));
};

const createUser = (user) => {
    users.push(user);
    return user;
}

const updateUser = (id, userData) => {
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index !== -1) {
        users[index] = { ...users[index], ...userData };
        return users[index];
    }
    return null;
};

const deleteUser = (id) => {
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index !== -1) {
        users.splice(index, 1);
        return true;
    }
    return false;
};

module.exports ={
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};