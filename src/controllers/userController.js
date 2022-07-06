import connection from "../database.js"
import bcrypt from "bcrypt"
import userRepository from "../repositories/userRepository.js"
import userServices from "../services/userServices.js"

async function createUser(req, res) {
  // try {
    const { name, email, password } = req.body;

    await userServices.selectUserByEmailService(email)
    await userServices.createUserService(name, email, password)

    res.sendStatus(201);
  // } catch (err) {
  //   console.error(err);
  //   res.sendStatus(500);
  // }
}


const userController = {
  createUser
}

export default userController