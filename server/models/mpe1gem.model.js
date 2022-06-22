module.exports = (sequelize, Sequelize) => {
  const Mpe1Gem = sequelize.define('mpe1gem', {
    id: {
      type: 'SERIAL',
      primaryKey: true,
      allowNull: false,
    },
    npp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    r1022: {
      type: Sequelize.STRING(11),
      allowNull: false,
      references: {
        model: {
          tableName: 'r1022s',
          schema: 'public',
        },
        key: 'p00',
      },
    },
    naim_org: {
      type: Sequelize.STRING(1000),
      allowNull: false,
    },
    adr_fact: {
      type: Sequelize.STRING(1000),
      allowNull: false,
    },
    inn: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    plazma_max: {
      type: Sequelize.DECIMAL(17, 6),
      allowNull: false,
    },
    plazma_cena: {
      type: Sequelize.DECIMAL(17, 6),
      allowNull: false,
    },
    erm_max: {
      type: Sequelize.DECIMAL(17, 6),
      allowNull: false,
    },
    erm_cena: {
      type: Sequelize.DECIMAL(17, 6),
      allowNull: false,
    },
    immg_max: {
      type: Sequelize.DECIMAL(17, 6),
      allowNull: false,
    },
    immg_cena: {
      type: Sequelize.DECIMAL(17, 6),
      allowNull: false,
    },
    alb_max: {
      type: Sequelize.DECIMAL(17, 6),
      allowNull: false,
    },
    alb_cena: {
      type: Sequelize.DECIMAL(17, 6),
      allowNull: false,
    },
  }, {
    timestamps: false,
    schema: 'minzdrav',
  });
  return Mpe1Gem;
};
