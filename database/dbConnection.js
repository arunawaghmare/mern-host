import mongoose from "mongoose";
export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "RESTAURANT",
    }).then(() => {
        console.log("Connected to database Succesfully");
    })
    .catch((err) =>{
        console.log('some error occured while connecting to database ${err}');
    
});
};
