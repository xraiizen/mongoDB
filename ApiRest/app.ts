import { Schema } from "mongoose";
import { ControlerAliment } from "./controller/controllerAliment";
import {bodyParser} from "body-parser";
import { ControlerPlat } from "./controller/controllerPlat";
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require("body-parser");
var cors = require('cors');

/**
 * On créé une nouvelle "application" express
 */
const app = express();

/**
 * On dit à Express que l'on souhaite parser le body des requêtes en JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost'
  }));

  const swaggerJSDoc = require('swagger-jsdoc');
  const swaggerUi = require('swagger-ui-express');
  const swaggerDefinition = {
      openapi:'3.0.0',
      info:{
          title:'Express API for JSONPlaceholder',
          version:'1.0.0',
          description:'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.'
      },
      servers:[{
          url:'http://localhost:3000/',
          description:'Development server',
      }]
  };
  const options= {
      swaggerDefinition,
      // Paths to files containing OpenAPIdefinitions
      apis:['./*.js','./controller/*.js'],
  };
  
  const swaggerSpec= swaggerJSDoc(options);
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//HOME
/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns 🏠
 *     tags: [🏠]
 *     responses:
 *       200:
 *         description: la route principal 🏠
 */
app.get('/', (req, res) => res.send('🏠'));

// ALIMENTS
/**
 * @swagger
 * /Aliments:
 *   get:
 *     summary: retourne les Aliments
 *     tags: [Aliments]
 *     responses:
 *       200:
 *         description: retourne tous les aliments enregistrer en base
 */
app.get('/Aliments', (req, res) => ControlerAliment.getAliments(req,res));
/**
 * @swagger
 * /Aliments:
 *   post:
 *     summary: insert un Aliment
 *     tags: [Aliments]
 *     parameters:
 *       - in : path
 *         nom: nom
 *         type: type
 *         quantite: quantite
 *     responses:
 *       200:
 *         description: insert un Aliment
 */
app.post("/Aliments", (req,res)=> ControlerAliment.insertAliment(req,res));
/**
 * @swagger
 * /Aliments/:id:
 *   get:
 *     summary: voir un Aliment
 *     tags: [Aliments]
 *     responses:
 *       201:
 *         description: voir un Aliment
 */
app.get('/Aliments/:id', (req, res) => ControlerAliment.getOnAliment(req,res));
/**
 * @swagger
 * /Aliments/:id:
 *   put:
 *     summary: modifier un Aliment
 *     tags: [Aliments]
 *     responses:
 *       200:
 *         description: modifier un Aliment
 */
app.put('/Aliments/:id', (req, res) => ControlerAliment.updateAliment(req,res));
app.patch('/Aliments/:id', (req, res) => ControlerAliment.patchQuantiteAliment(req,res));
/**
 * @swagger
 * /Aliments/:id:
 *   delete:
 *     summary: supprimer un Aliment
 *     tags: [Aliments]
 *     responses:
 *       200:
 *         description: supprimer un Aliment
 */
app.delete('/Aliments/:id', (req, res) => ControlerAliment.deleteAliment(req,res));
/**
 * @swagger
 * /Aliments/Type/:type:
 *   get:
 *     summary: retourne les aliments par type
 *     tags: [Aliments]
 *     responses:
 *       200:
 *         description: retourne les aliments par type
 */
app.get('/Aliments/Type/:type', (req, res) => ControlerAliment.getAlimentsByType(req,res));
// PLATS
/**
 * @swagger
 * /Plats:
 *   get:
 *     summary: retoune les Plats
 *     tags: [Plats]
 *     responses:
 *       200:
 *         description: retoune les Plats
 */
app.get('/Plats', (req, res) => ControlerPlat.getPlats(req,res));
/**
 * @swagger
 * /Plats:
 *   post:
 *     summary: insert un Plat
 *     tags: [Plats]
 *     responses:
 *       200:
 *         description: insert un Plat
 */
app.post("/Plats", (req,res)=> ControlerPlat.insertPlat(req,res));
/**
 * @swagger
 * /Plats/:id:
 *   get:
 *     summary: voir un Plat
 *     tags: [Plats]
 *     responses:
 *       201:
 *         description: voir un Plat
 */
app.get('/Plats/:id', (req, res) => ControlerPlat.getOnPlat(req,res));
/**
 * @swagger
 * /Plats/:id:
 *   put:
 *     summary: modifier un Plat
 *     tags: [Plats]
 *     responses:
 *       200:
 *         description: modifier un Plat
 */
app.put('/Plats/:id', (req, res) => ControlerPlat.updatePlat(req,res));
/**
 * @swagger
 * /Plats/:id:
 *   delete:
 *     summary: supprimer un plat
 *     tags: [Plats]
 *     responses:
 *       200:
 *         description: supprimer un plat
 */
app.delete('/Plats/:id', (req, res) => ControlerPlat.deletePlat(req,res));
/**
 * @swagger
 * /Plats/Type/:type:
 *   get:
 *     summary: retourne les plats par type
 *     tags: [Plats]
 *     responses:
 *       200:
 *         description: retourne les plats par type
 */
app.get('/Plats/Type/:type', (req, res) => ControlerPlat.getPlatsByType(req,res));


app.listen(3000,()=>{

    "Serveur listening on port :3000"
})

async function main() {
    // await mongoose.connect('mongodb://localhost/Gestion_stock');
    await mongoose.connect('mongodb://0.0.0.0:27017/Gestion_stock');
    console.log("Connexion mongoose ok");
}
main().catch(err => console.log(err));