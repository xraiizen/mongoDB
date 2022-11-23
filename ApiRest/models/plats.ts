import mongoose, {
    Schema
} from "mongoose";

const platSchema = new Schema({
    type: String,
    nom: String, // String is shorthand for {type: String}
    aliments: [{nom:String,quantite:Number}],
   prix:Number
});
const PlatModel = mongoose.model('Plat', platSchema);

export class Plat{
    public static async getAllPlats(): Promise < any > {
        return new Promise(async (resolve) => {
            resolve(await PlatModel.find())
        })
    }
    public static async getOnPlat(id: String) {
        return new Promise(async (resolve) => {
            resolve(await PlatModel.find({
                _id: id
            }))
        })
    }
    public static async insertPlat(body: {
        type: string,
        nom: string,
        aliments:  [{nom:String,quantite:Number}],
        prix:Number
    }){
        const plat = new PlatModel({
            type: body.type,
            nom: body.nom,
            aliments: body.aliments,
            prix: body.prix,
        });
        return await plat.save()
}
public static async updatePlat(id: String, body: {type: string,nom: string,aliments: [{nom:String,quantite:Number}] ,prix: Number})
{
    return PlatModel.findByIdAndUpdate(
        {_id: id}, 
        {type: body.type,
        nom: body.nom,
        aliments: body.aliments,
        prix: body.prix}, 
        {new: true}
    );
}
public static async deletePlat(id: String) {
    return PlatModel.findByIdAndDelete({_id: id});
}

public static async getPlatByType(type: String) {
    return new Promise(async (resolve) => {
        resolve(await PlatModel.find({
            _type: type
        }))
    })
}
}