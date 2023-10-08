import { DataTypes } from 'sequelize'
import { sequelize } from '../../../database/Connection.js'

const UserModel = sequelize.define(
  'user', {
    userId: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING(50), allowNull: false },
    password: { type: DataTypes.STRING(50), allowNull: false }
  }
)

export default class iUserRepository {
  async save (user) {
    return UserModel.create(user, { fields: ['email', 'password'] })
  }
}
