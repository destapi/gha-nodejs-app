const { faker } = require('@faker-js/faker');
const express = require('express');
const router = express.Router();

function createRandomUser() {
  return ({
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    sex: faker.person.sexType(),
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  });
}

/* GET users listing. */
router.get('/', function (req, res, next) {
  let users = [];
  for (let i = 0; i < 10; i++) {
    users.push(createRandomUser())
  }
  res.json(users);
});

module.exports = router;
