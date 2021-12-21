import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import estadosDAO from "./dao/estadosDAO.js";
import ReviewsDAO from "./dao/reviewsDAO.js";
import RutasDAO from "./dao/rutasDAO.js";

//* aqui conectamos con la base de datos y corremos el servidor

dotenv.config(); //to load enviroment variables
const MongoClient = mongodb.MongoClient; //access our mongo client from mongodb

const port = process.env.PORT || 8000; //set port form our envarairoment variable, we pass PORT cuz that's what we have in our env
const status = estadosDAO;
//-connecto to database
MongoClient.connect(process.env.DB_URI, {
  wtimeoutMS: 2500, //after 2500 milliseconds the request will time-out
  useNewUrlParser: true, //blabla not need to know just put this
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await estadosDAO.injectDB(client, "status"); //reference to the restaurants collection in the database, lo q sigue es crear el controller
    await status.injectDB(client, "users"); //reference to the restaurants collection in the database, lo q sigue es crear el controller
    // await estadosDAO.injectDB(client, `status`); //reference to the restaurants collection in the database, lo q sigue es crear el controller
    // q el arichivo route usara para acceder eñ archivo DAO
    await RutasDAO.injectDB(client);
    await ReviewsDAO.injectDB(client);
    app.listen(port, () => {
      //corremos el servidor
      console.log(`listening on port ${port}`);
    });
  });
