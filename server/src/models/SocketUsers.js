class SocketUsers {
  constructor() {
    this.socketUsers = [];
  }

  addUser(socketId, user, roomId) {
    let socketUser = { socketId, user, roomId };
    this.socketUsers.push(socketUser);
    return user;
  }

  getUserList(roomId) {
    return this.socketUsers.filter((socketUser) => socketUser.roomId === roomId).map((socketUser) => socketUser.user);
  }

  getUser(socketId) {
    return this.socketUsers.filter((user) => user.socketId === socketId)[0];
  }

  removeUser(socketId) {
    let socketUser = this.getUser(socketId);
    if (socketUser) {
      this.socketUsers = this.socketUsers.filter((socketUser) => socketUser.socketId !== socketId);
    }
    return socketUser;
  }
}

module.exports = { SocketUsers }
