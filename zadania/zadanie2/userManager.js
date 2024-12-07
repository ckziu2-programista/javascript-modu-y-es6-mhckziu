export const addUser = (users, user) => {
    users.push(user);
}

export const removeUser = (users, id) => {
    let indeks = users.findIndex(user => user.id == id);
    if(indeks != -1) {
        users.splice(indeks, 1);
    }
}

export const findUser = (users, id) => {
    return users.find(user => user.id == id);
}
