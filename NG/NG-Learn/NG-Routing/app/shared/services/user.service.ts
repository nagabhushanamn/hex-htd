import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([
  {
    id: 1,
    name: 'Nagabhushanam',
    username: 'Nag',
    avatar: ''
  },
  {
    id: 2,
    name: 'Ria',
    username: 'ria',
    avatar: ''
  },
  {
    id: 3,
    name: 'Kannan',
    username: 'kannan',
    avatar: ''
  }
]);

@Injectable()
export class UserService {

  // get all users
  getUsers() {
    return usersPromise;
  }

  // find a specific user
  getUser(username) {
    return usersPromise.then(users => users.find(user => user.username === username));

    // let user = usersPromise.then(users => {
    //   return users.find(user => {
    //     return user.username === username;
    //   });
    // });

    // return user;
  }

}