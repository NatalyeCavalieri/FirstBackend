const knex = require("../database/knex")
const appError = require("../utils/appError")
const { compare } = require('bcryptjs')
const authConfig = require('../configs/auth')
const { sign } = require('jsonwebtoken')
const { json } = require("express")

class SessionsController {
async Create(request, response){
  const { email, password } = request.body

  const user = await knex("users").where({email}).first()
  if(!user){
    throw new appError("E-mail and/or password incorrect", 401)
  }

  const passwordMatched = await compare(password, user.password)
  if(!passwordMatched){
    throw new appError("E-mail and/or password incorrect", 401)
  }

  const { secret, expiresIn } = authConfig.jwt;
  const token = sign({}, secret, {
    subject: String(user.id),
    expiresIn
  })

  return response.json({user, token})
}
}

module.exports = SessionsController;