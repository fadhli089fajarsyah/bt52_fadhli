'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('myprojects', [{
      projectname: 'myprojects',
      description: 'description',
      star_date: '111111-11-11',
      end_date: '222222-02-22',
      resethari: '5',
      resetbulan: '5',
      tahun: '5',
      logos: ["laravel","cuyy"],
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
