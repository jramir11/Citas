const AuthorQuotes = require("../models/authorQuotes");

module.exports = {
    getAllAuthors: function (req, res) {
      AuthorQuotes.find()
        .then((AuthorQuotes) => res.json(AuthorQuotes))
        .catch((err) => res.json(err));
    },

    getAllQuotes: async (req, res) => {
      const id = req.params.id;
      const data = await AuthorQuotes.findOne({_id: id})
          .then(data => res.json(data.quotes))
          .catch(err => res.json(err));
    },



  getByIdAuthors: function (req, res) {
    AuthorQuotes.findOne({ _id: req.params.id })
      .then((AuthorQuotes) => res.json(AuthorQuotes))
      .catch((err) => res.json(err));
  },

  newAuthors: function (req, res) {
    const author = new AuthorQuotes();
    author.name = req.body.name;    
    author.save()
      .then((newAuthor) => res.json(newAuthor))
      .catch((err) => {
        res.status(404).json({error:err.message}) });
  },

  putUpdateAuthors: (req, res) => {
    const id = req.params.id;
    const body = req.body.name;
    AuthorQuotes.updateOne({ _id: id}, {name: body})
        .then(data => res.json(data))
        .catch(err => res.json(err));
  },

  deleteAuthors: function (req, res) {
    let id = req.params.id;
    AuthorQuotes.deleteOne({ _id: id })
      .then((deletedAuthor) => res.json(deletedAuthor))
      .catch((err) => res.json(err));
  },



   newQuotes: async (req, res) => {
    const id = req.params.id;
    const {quote, score} = req.body;
    AuthorQuotes.updateOne({ _id: id}, {$push:{quotes: {quote, score}}} )
        .then(data => res.json(data))
        .catch(err => res.json(err));
  },

  newComentario: async function (req,res) {
    try {
        const id=req.params.id
        const {quote,score}=req.body
        // const XComentario = new AuthorQuotes();
        // XComentario.quote=quote;
        // XComentario.score=score;
        // const AuthorQuotesSave = await XComentario.save();
        const data=await AuthorQuotes.findOneAndUpdate({_id:id},{$push: {quotes:{quote,score}}},{new:true})
        res.json({message:"sucess",data});
      } catch (error) {res.json({message:"fault",error:error})
    }
  },

  //actualiza num votos en SCORE
  putUpdateQuotes: async (req, res) => {
    const id = req.params.id;
    const idCita = req.body._id;
    const score = req.body.score;
    AuthorQuotes.updateOne({ _id: id},{$push:{quotes:{_id: idCita,score}}},{new:true})
        .then(data => res.json(data))
        .catch(err => res.json(err));
  },

    //BORRA CITAS
    deleteQuotes: async (req, res) => {
      let id = req.params.id;
      let idCita = req.body.id;
      AuthorQuotes.findByIdAndUpdate({ _id: id},{$pull:{quotes:{_id: idCita}}})
      .then(data => res.json(data))
      .catch(err => res.json(err));
      },
      
    
    //actualiza num votos en SCORE
    // VotosQuotes: async (req, res) => {
    //   const id = req.params.id;
    //   const idCita = req.body._id;
    //   const score = req.body.score;
    //   AuthorQuotes.updateOne({ _id: id},{$pull:{quotes:{_id: idCita,score}}})
    //       .then(data => res.json(data))
    //       .catch(err => res.json(err));
    // }
    
    VotosQuotes: async (req, res) => {
      const id = req.params.id;
      //const idCita = req.body._id;
      const idCita = req.body.idCita;
      const score = req.body.score;
      // console.log("id",id,"idCita",idCita,"score",score);
      // console.log("param=",req.params);
      // console.log("body=",req.body);
      AuthorQuotes.updateOne({ _id: id,quotes:{$elemMatch:{_id:idCita}}},{$set:{"quotes.$.score":score}}
      )
          .then(data => res.json(data))
          .catch(err => res.json(err));
    }



  };
