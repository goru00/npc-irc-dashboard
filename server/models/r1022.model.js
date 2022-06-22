module.exports = (sequelize, Sequelize) => {
  const R1022 = sequelize.define('r1022', {
    p00: {
      type: Sequelize.STRING(11),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    p01: {
      type: Sequelize.STRING(500),
    },
    p02: {
      type: Sequelize.STRING(500),
    },
    utv: {
      type: Sequelize.STRING(1),
      defaultValue: 0,
      allowNull: false,
    },
    sp: {
      type: Sequelize.STRING(1),
      defaultValue: 0,
    },
  }, {
    timestamps: false,
    schema: 'public',
  });
  return R1022;
};
