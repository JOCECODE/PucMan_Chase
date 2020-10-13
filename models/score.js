module.exports = function (sequelize, DataTypes) {
  const Scores = sequelize.define("Scores", {
    // The score cannot be null
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  Scores.associate = models => {
    Scores.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Scores;
};
