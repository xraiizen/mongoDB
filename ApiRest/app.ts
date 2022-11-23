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
//HOME
app.get('/', (req, res) => res.send('🏠'));
// ALIMENTS
app.get('/Aliments', (req, res) => ControlerAliment.getAliments(req,res));
app.post("/Aliments", (req,res)=> ControlerAliment.insertAliment(req,res));
app.get('/Aliments/:id', (req, res) => ControlerAliment.getOnAliment(req,res));
app.put('/Aliments/:id', (req, res) => ControlerAliment.updateAliment(req,res));
app.patch('/Aliments/:id', (req, res) => ControlerAliment.patchQuantiteAliment(req,res));
app.delete('/Aliments/:id', (req, res) => ControlerAliment.deleteAliment(req,res));
app.get('/Aliments/Type/:type', (req, res) => ControlerAliment.getAlimentsByType(req,res));
// PLATS
app.get('/Plats', (req, res) => ControlerPlat.getPlats(req,res));
app.post("/Plats", (req,res)=> ControlerPlat.insertPlat(req,res));
app.get('/Plats/:id', (req, res) => ControlerPlat.getOnPlat(req,res));
app.put('/Plats/:id', (req, res) => ControlerPlat.updatePlat(req,res));
app.delete('/Plats/:id', (req, res) => ControlerPlat.deletePlat(req,res));
app.get('/Plats/Type/:type', (req, res) => ControlerPlat.getPlatsByType(req,res));


app.listen(3000,()=>{

    "Serveur listening on port :3000"
})

async function main() {
    await mongoose.connect('mongodb://localhost/Gestion_stock');
    console.log("Connexion mongoose ok");
}
main().catch(err => console.log(err));