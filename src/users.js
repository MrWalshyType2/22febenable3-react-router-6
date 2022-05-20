const users = [
    { id: 1, username: "Fred", age: 22 },
    { id: 2, username: "Bob", age: 32 }
];

export function getUsers() {
    return users;
}

export function getUser(id) {
    return users.find(user => user.id == id);
}