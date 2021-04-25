const users = [];

//create new class User

module.exports = class User {
  constructor(n) {
    this.name = n;
  }

  //save method
  save() {
    users.push(this);
  }

  //fetchAll users method
  static fetchAll() {
    return users;
  }
};
