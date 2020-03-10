const Thing = require('../model/things');
const fs = require('fs');

exports.createThing=(req,res,next)=>{
  delete req.body._id;
  const thing= new Thing({
    title : req.body.title,
    description : req.body.description,
    imageUrl : `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    userId : req.body.userId,
    price : req.body.price,
  });
  thing.save()
    .then(()=> res.status(201).json({message:'objet ajouté!!!'}))
    .catch(error=> res.status(400).json({ error }));
};


exports.getOneThing=(req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
};


exports.modifyThing=(req,res)=>{
  var body= req.file ?
    {
      ...JSON.parse(req.body.thing),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };

  const thing= new Thing({
    _id:req.params.id,
    title : body.title,
    description : body.description,
    imageUrl : body.imageUrl,
    userId : body.userId,
    price : body.price,
  });
  Thing.updateOne({_id:req.params.id},thing)
  .then(() => res.status(200).json({ message: 'Objet modifié !'}))
  .catch(error => res.status(400).json({ error }));
};

exports.deleteThing=(req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then(thing => {

      const filename = thing.imageUrl.split('/images/')[1];

      fs.unlink(`images/${filename}`, () => {
        Thing.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};


exports.getAllthings=( req , res )=>{
  Thing.find()
  .then(things=> res.status(200).json(things))
  .catch(error=> res.status(404).json(error));
};
