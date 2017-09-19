
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('User', {
    title: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })

  return Song
}
