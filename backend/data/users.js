const bcrypt = require("bcryptjs");

const user = [
  {
    name: "Admin User",
    email: "admin@mernshop.com",
    password: bcrypt.hashSync("hello@123", 10),
    isAdmin: true,
  },
  {
    name: "Ashwin Km",
    email: "ashwin@mernshop.com",
    password: bcrypt.hashSync("hello@123", 10),
  },
  {
    name: "Hari Haran",
    email: "hari@mernshop.com",
    password: bcrypt.hashSync("hello@123", 10),
  },
];

module.exports = user;
