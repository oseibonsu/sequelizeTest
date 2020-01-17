module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.define('Chirp', {
    author: DataTypes.STRING,
    body: DataTypes.STRING
  })

  return Model;

}