module.exports = function(sequelize, DataTypes) {
    var dates = sequelize.define("dates", {
      // Giving the Date model a name of type STRING
      name: DataTypes.STRING,
      photo: DataTypes.STRING,
      gender: DataTypes.STRING,  
      traits: DataTypes.STRING,
      tier: DataTypes.INTEGER,
      quote: DataTypes.STRING
    }, {
      timestamps: false
    });
  
    return dates;
  };