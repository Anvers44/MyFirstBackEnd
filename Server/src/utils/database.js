import mongoose from "mongoose"

export async function connect() {
    const dbUri = "mongodb+srv://Admin:Admin@gmcdb.kyq57aj.mongodb.net/?retryWrites=true&w=majority";


    try {
        console.log("Plz wait Connecting to mongo DB....")
        mongoose.set("strictQuery", true)
        await mongoose.connect(dbUri);
    }catch (error){
        console.log(error.message)
    }
    console.log("Connected to DB :)")
}