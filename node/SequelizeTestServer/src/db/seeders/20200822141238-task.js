'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Tasks', [
      { taskName: '더미 데이터1' },
      { taskName: '더미 데이터2' },
      { taskName: '더미 데이터3' },
      { taskName: '더미 데이터4' },
      { taskName: '더미 데이터5' },
      { taskName: '더미 데이터6' },
      { taskName: '더미 데이터7' },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Task');
  },
};
