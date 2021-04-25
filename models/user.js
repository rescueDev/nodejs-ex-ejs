const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "users.json"
);

const getUsersFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class User {
  constructor(name) {
    this.name = name;
  }

  save() {
    getUsersFromFile((users) => {
      users.push(this);
      fs.writeFile(p, JSON.stringify(users), (err) => {
        console.log("error", err);
      });
    });
  }

  static fetchAll(cb) {
    getUsersFromFile(cb);
  }
};
