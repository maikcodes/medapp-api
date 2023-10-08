import { Sequelize } from 'sequelize'

export const sequelize = () => {
  try {
    const connection = new Sequelize('database', 'username', 'password', {
      host: 'localhost',
      dialect: 'postgres'
    })

    if (connection.authenticate()) { console.log('Connection established successfully') }
  } catch (error) {
    throw new Error(error.message)
  }
}
