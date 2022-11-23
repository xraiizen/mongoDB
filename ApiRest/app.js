"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var controllerAliment_1 = require("./controller/controllerAliment");
var controllerPlat_1 = require("./controller/controllerPlat");
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require("body-parser");
var cors = require('cors');
/**
 * On créé une nouvelle "application" express
 */
var app = express();
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
var swaggerJSDoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');
var swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API for JSONPlaceholder',
        version: '1.0.0',
        description: 'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.'
    },
    servers: [{
            url: 'http://localhost:3000/',
            description: 'Development server',
        }]
};
var options = {
    swaggerDefinition: swaggerDefinition,
    // Paths to files containing OpenAPIdefinitions
    apis: ['./*.js', './controller/*.js'],
};
var swaggerSpec = swaggerJSDoc(options);
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
app.get('/', function (req, res) { return res.send('🏠'); });
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
app.get('/Aliments', function (req, res) { return controllerAliment_1.ControlerAliment.getAliments(req, res); });
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
app.post("/Aliments", function (req, res) { return controllerAliment_1.ControlerAliment.insertAliment(req, res); });
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
app.get('/Aliments/:id', function (req, res) { return controllerAliment_1.ControlerAliment.getOnAliment(req, res); });
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
app.put('/Aliments/:id', function (req, res) { return controllerAliment_1.ControlerAliment.updateAliment(req, res); });
app.patch('/Aliments/:id', function (req, res) { return controllerAliment_1.ControlerAliment.patchQuantiteAliment(req, res); });
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
app.delete('/Aliments/:id', function (req, res) { return controllerAliment_1.ControlerAliment.deleteAliment(req, res); });
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
app.get('/Aliments/Type/:type', function (req, res) { return controllerAliment_1.ControlerAliment.getAlimentsByType(req, res); });
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
app.get('/Plats', function (req, res) { return controllerPlat_1.ControlerPlat.getPlats(req, res); });
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
app.post("/Plats", function (req, res) { return controllerPlat_1.ControlerPlat.insertPlat(req, res); });
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
app.get('/Plats/:id', function (req, res) { return controllerPlat_1.ControlerPlat.getOnPlat(req, res); });
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
app.put('/Plats/:id', function (req, res) { return controllerPlat_1.ControlerPlat.updatePlat(req, res); });
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
app.delete('/Plats/:id', function (req, res) { return controllerPlat_1.ControlerPlat.deletePlat(req, res); });
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
app.get('/Plats/Type/:type', function (req, res) { return controllerPlat_1.ControlerPlat.getPlatsByType(req, res); });
app.listen(3000, function () {
    "Serveur listening on port :3000";
});
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // await mongoose.connect('mongodb://localhost/Gestion_stock');
                return [4 /*yield*/, mongoose.connect('mongodb://0.0.0.0:27017/Gestion_stock')];
                case 1:
                    // await mongoose.connect('mongodb://localhost/Gestion_stock');
                    _a.sent();
                    console.log("Connexion mongoose ok");
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(function (err) { return console.log(err); });
//# sourceMappingURL=app.js.map