import bcrypt from "bcrypt"

import userRepository from "../repositories/userRepository.js"

async function selectUserByEmailService(email){
    const existingUsers = await userRepository.selectUserByEmail(email);
    if (existingUsers.rowCount > 0) {
      throw {type: "Conflict", message: "Nome já em uso"};
    };
}

async function createUserService(name, email, password){
    const hashedPassword = bcrypt.hashSync(password, 12);
    await userRepository.insertNewUser(name, email, hashedPassword)
}

const userServices = {
    selectUserByEmailService,
    createUserService
}

export default userServices;