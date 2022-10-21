const auth = require ('../models/auth.js');

/**
 * Esta función autentifica el email y password
 * registrado por del usuario
 * 
 * - Si el email no existe, dirá que el usuario no está registrado,
 * o alguno de los datos no ha sido ingresado correctamente
 * - Si el email existe verificará si el password se corresponde con el email
 * - Si el password no se corresponde dirá que alguno de los datos no ha sido ingresado correctamente
 * - Si el password se corresponde permitirá ingresar a la página 
*/

module.exports.login = (req, res) => {

    console.log('Función de autenticación');

    const login = async (Request, Response, next) => {
      const { email, password } = Request.body;

      //check if email and password exists
      if (!email || !password) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Please provide email and password');
      }

      //check if user exist and password correct
      const user = await user.findOne({ email }).select('+password');

      if (!user || !(await user.isPasswordMatch(password, user.password))) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
      }

       //if everything ok, send token to the client
        const tokens = await tokenService.generateAuthTokens(user.id);
        const response = { user: user.transform(), tokens };
        res.send(response);

    }
}
