import mongoose from "mongoose";

const dbConnect = () => {
    const DB_URI=process.env.DB_URI
    mongoose.connect(
      DB_URI,
      {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      },
      (err,res) => {
        if (!err){
            console.log("----- DB conectada ------")
        }else{
            console.log("¡¡¡Error al conectarse con la BD!!!")
        }
      }
    );
}
export default dbConnect;