'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Products', 'slug', {
      type: Sequelize.STRING,
      allowNull: false
     });
    await queryInterface.addColumn('Products', 'description', {
      type: Sequelize.TEXT('long'),
      defaultValue: 'A description was not provided...',
      allowNull: false
     });
    await queryInterface.addColumn('Products', 'is_published', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
     });
    await queryInterface.addColumn('Variants', 'slug', {
      type: Sequelize.STRING,
      defaultValue: false,
      allowNull: true
     });
    await queryInterface.addColumn('Variants', 'description', {
      type: Sequelize.TEXT('long'),
      defaultValue: 'A description was not provided...',
      allowNull: false
     });
    await queryInterface.addColumn('Variants', 'inventory', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false
     });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Products', 'slug');
    await queryInterface.removeColumn('Products', 'description');
    await queryInterface.removeColumn('Products', 'is_published');
    await queryInterface.removeColumn('Variants', 'slug');
    await queryInterface.removeColumn('Variants', 'description');
    await queryInterface.removeColumn('Variants', 'inventory');
  }
};
