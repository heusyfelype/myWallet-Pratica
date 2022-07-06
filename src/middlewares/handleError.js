export default async function handleError(error, req, res, next){
    console.log(error)

    if(error.type === "Conflict"){
        return res.status(409).send("Email já em uso")
    }

    res.status(500).send("Internal server error")
}