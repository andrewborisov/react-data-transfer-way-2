const USERS_LIST = [
  {
    name: 'Max',
    id: 0,
    age: 3
  },
  {
    name: 'Andrey',
    id: 1,
    age: 28
  },
  {
    name: 'Igor',
    id: 2,
    age: 50
  }
];

export class UsersModel {
  static fetchUsers() {
    return new Promise((res) => {
      setTimeout(() => {
        const usersListClone = [...USERS_LIST];
        res(usersListClone);
      }, 1000);
    });
  }

  static removeUser(userId) {
    const isUserExists = USERS_LIST.findIndex(user => user.id === userId);

    if (isUserExists >= 0) {
      return new Promise((res) => {
        setTimeout(() => {
          USERS_LIST.splice(isUserExists, 1);
          const usersListClone = [...USERS_LIST];
          res(usersListClone);
        }, 1000);
      });
    }
  }
}
