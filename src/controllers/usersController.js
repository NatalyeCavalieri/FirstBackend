const { hash, compare } = require("bcryptjs")
const appError = require("../utils/appError")
const UserRepository = require("../repositories/UserRepository")
const sqliteConnection = require("../database/sqlite")
const { use } = require("express/lib/router")
const userRepository = require("../repositories/UserRepository")
const UserCreateServices = require("../services/UserCreateServices")

class usersController {
  async create(request, response) {
    const { name, email, password } = request.body
    const userRepository = new UserRepository()
    const userCreateServices = new UserCreateServices(userRepository)
    await userCreateServices.execute({name, email, password})
    return response.status(201).json()
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body
    const user_id = request.user.id

    const database = await sqliteConnection()
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [
      user_id,
    ])

    if (!user) {
      throw new appError("User not exists")
    }

    const userWithUpdateEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    )

    if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
      throw new appError("This email already in use")
    }
    user.name = name ?? user.name
    user.email = email ?? user.email

    if (password && !old_password) {
      throw new appError("You need inform old password to create new password")
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if (!checkOldPassword) {
        throw new appError("The old password not confer")
      }

      user.password = await hash(password, 8)
    }
    await database.run(
      `
  UPDATE users SET
  name = ?,
  email = ?,
  password = ?,
  updated_at = DATETIME('now')
  WHERE id = ?`,
      [user.name, user.email, user.password, user_id]
    )
    return response.json()
  }
}

module.exports = usersController
