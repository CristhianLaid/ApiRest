import User from '../models/userModel.js'
const getUsers = async(req, res)=> {
    const usuarios = await User.find()
    //res.json("Conseguir a todos los usuarios")
    res.json(usuarios)
}

const getUser = (req, res)=> {
    console.log(req.params,req.body)
    res.json("Conseguir un usuario")
}

const userInsert = async(req, res)=> {
    console.log(req.body)
    const user = req.body
     res.json(user)
//    try {
//     const { email, password } = req.body;

//     // instancia un usuario con el modelo User con los datos a insertar
//     const user = new User({email:email,password:password});
    
//     const usuario = await user.save();

//     // Enviar una respuesta al cliente
//     res.status(200).json(usuario);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Ha ocurrido un error al insertar el usuario' });
//   }
}

const userUpdate = (req, res)=> {
    console.log(req.params,req.params.email)
    const user = req.body
    res.json(user)
}
const userDelete = (req, res)=> {
    console.log(req.params)
    const user = req.params
    res.json(user)
}
 export {getUsers,getUser,userInsert,userUpdate,userDelete}