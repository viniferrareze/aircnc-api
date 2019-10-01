const User = require('../models/Users');

//recebe a requisição faz a regra de negocio e devolve a resposta. 
module.exports = {
   async store(req, res){
      const {email} = req.body; //busca email de dentro do body

      //verifica se existe usuário, se existir retorna o mesmo caso contrario cria um novo...
      // const user = await User.create({email}); 
      let user = await User.findOne({email});
      if (!user) {
         user = await User.create({email});
      }

      return res.json(user);
   }
}