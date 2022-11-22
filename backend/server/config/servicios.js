const authorsQuotes = require("../controllers/controllers");


module.exports = function(app){

  //Authors    
  // 1. Devuelve todas las Authors
  app.get("/getAllAuthors", (req, res) => {   
    authorsQuotes.getAllAuthors(req, res);
  });
  // 2. Devuelve una Author por Id
  app.get("/getByIdAuthors/:id", (req, res) => {
    authorsQuotes.getByIdAuthors(req, res);
  });
  // 3. Agrega una Author
  app.post("/newAuthors", (req, res) => {
    authorsQuotes.newAuthors(req, res);
  });
  // 4. Edita los datos de una Author
  app.put("/putUpdateAuthors/:id", (req, res) => {   
    authorsQuotes.putUpdateAuthors(req, res);
  });
    // 5. Elimina un Author
  app.delete("/deleteAuthor/:id", (req, res) => {
    authorsQuotes.deleteAuthors(req, res)
  });



  //CITAS : QUOTES
  // 1. Devuelve todas las Citas
  app.get("/getAllQuotes/:id", (req, res) => {   
    authorsQuotes.getAllQuotes(req, res);
  });
  // 3. Agrega una Cita
  app.put("/newQuotes/:id", (req, res) => {
    authorsQuotes.newQuotes(req, res);
  });
  // 5. Elimina una Cita
  app.patch("/deleteQuotes/:id", (req, res) => {
    authorsQuotes.deleteQuotes(req, res)
  });

  //
  app.put("/putUpdateQuotes/:id", (req, res) => {   
    authorsQuotes.putUpdateQuotes(req, res);
  });
  //inserta NUEVAS CITAS
  app.post('/newComentario/:id', authorsQuotes.newComentario
  );


    //Update VOTOS SCORE
    app.put("/VotosQuotes/:id", (req, res) => {   
      authorsQuotes.VotosQuotes(req, res);
    });


}