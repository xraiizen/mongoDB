import {
    Aliment
} from "../models/aliments";

export class ControlerAliment {
    public static async getAliments(req, res) {
        let listeAliments = await Aliment.getAllAliments();
        res.send(listeAliments);
    }
    public static async getOnAliment(req, res) {
        let alimentId: String = req.params.id;
        let listeAliments = await Aliment.getOnAliment(alimentId);
        res.send(listeAliments);
    }
    public static async getAlimentsByType(req, res) {
        let alimentType: String = req.params.type;
        console.log(alimentType);
        let listeAliments = await Aliment.getAlimentsByType(alimentType);
        res.send(listeAliments);
    }
    public static async insertAliment(req,res){
        await Aliment.insertAliment(req.body);
        res.status(201);
        res.send();
        }
    public static async updateAliment(req,res){
        await Aliment.updateAliment(req.params.id,req.body);
        res.status(201);
        res.send();
        }
    public static async deleteAliment(req,res) {
        await Aliment.deleteAliment(req.params.id);
        res.status(201);
        res.send();
    }
    public static async patchQuantiteAliment(req,res) {
        await Aliment.patchQuantiteAliment(req.params.id,req.body);
        res.status(201);
        res.send();
    }
}