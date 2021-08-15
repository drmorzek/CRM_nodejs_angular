const UserModel = requireRoot("models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_KEY} = requireRoot("config/keys")
const errorHandler = requireRoot("utils/errorHandler")

module.exports.login = async (req,res) => {
    try {
        const { email, password} = req.body

        const find = await UserModel.findOne({ email })

        if(find) {
            const passwordResult = bcrypt.compareSync(password, find.password)

            if (passwordResult) {
                // Генерация токена, пароли совпали
                const token = jwt.sign({
                  email: find.email,
                  userId: find._id
                }, JWT_KEY, {expiresIn: 60 * 60})
          
                res.status(200).json({
                    error: false,
                    token: `Bearer ${token}`
                })

              } else {
                // Пароли не совпали
                res.status(401).json({
                    error: true,
                    message: "The passwords don't match. Try again."
                })
              }
            
        } else {
            res.status(404).json({
                error: true,
                message : `User with email ${email} not found. Try again.`
            })
        }

    } catch(e){
        errorHandler(res, e)
    }
    
}

module.exports.register = async (req,res) => {
    try {
        const { email, password} = req.body

        const find = await UserModel.findOne({ email })

        if(find) {
            res.status(409).json({
                error: true,
                message : `User with email ${email} already yet. Try again.`
            })
        } else {
            
            const salt = bcrypt.genSaltSync(10)
            const user = new UserModel( { email, password : bcrypt.hashSync(password, salt) } )
            await user.save()
            res.status(201).json({
                error: false,
                user
            })
        }        

    } catch(e){
        errorHandler(res, e)
    }
    
}