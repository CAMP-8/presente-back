

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
     
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthday: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      graduation: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      about: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      interests: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      race: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sexualOrientation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      locationState: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      locationCity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
          
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      tableName: "users",
    }
  );


 

  User.prototype.toJSON = function () {
    const user = { ...this.get() };
    return Object.fromEntries(
      Object.entries(user).filter(([key]) => !["password"].includes(key))
    );
  };

  return User;
};
