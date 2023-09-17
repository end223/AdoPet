
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Adocao', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID
      },
      pet: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Pets', key: 'id'}
      },
      tutor: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: 'Tutores', key: 'id'}
      },
      data: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Adocao');
  }
};