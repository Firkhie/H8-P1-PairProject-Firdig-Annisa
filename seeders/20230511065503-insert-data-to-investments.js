'use strict';

const fs = require('fs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync("./data/investments.json", "utf-8"))
    .map(el => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    })

    await queryInterface.bulkInsert('Investments', data);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Investments', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
