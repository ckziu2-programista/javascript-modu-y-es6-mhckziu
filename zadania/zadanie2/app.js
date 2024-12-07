import { addUser, removeUser, findUser } from './userManager.js';

let users = [{id: 1, name: 'janeki'}, {id: 2, name: 'wacek'}, {id: 3, name: 'mietek'}];
addUser(users, {id: 4, name: 'gienek'});
console.log(users);

removeUser(users, 2);
console.log(users);

let user = findUser(users, 4);
console.log(user);
