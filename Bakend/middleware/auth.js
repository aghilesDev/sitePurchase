const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
  try{
    /*const token=req.headers.authorization.split(' ')[1];
    const decodedToken=jwt.verify(token,'RANDOM_SECRET_KEY');
     const userId = decodedToken.userId;*/
     if(!req.session.userId/*req.body.userId && req.body.userId !== userId*/){
       throw 'Invalid ID'
     }else{
       next();
     }
  }catch(e) {
    res.status(401).json({error: 'unauthorized'});
  }
};
