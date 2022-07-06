import connection from "../database.js"

function selectUserByEmail(email) {

    const existingUsers = connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
    );

    return existingUsers
}


function insertNewUser(name, email, hashedPassword) {

    connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
    );
    return;
}

const userRepository = {
    selectUserByEmail,
    insertNewUser
}

export default userRepository