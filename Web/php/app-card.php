<?php
function appCardPlat($plat){
    $data ='<div class="app-card">';
    $data .=' <span> <img src="https://cdn-icons-png.flaticon.com/512/3828/3828051.png"><p>'. $plat->nom.'</p> </span>';
    $data .='<div class="app-card-tittlesub">ingrédients :</div>';
    $data .='<div class="app-card__subtext">';
    foreach($plat->aliments as $aliment){
        $data .=''.$aliment->nom.', ';
    }
    $data .=' </div><div class="app-card-buttons">';
    $data .=' <div style="margin-right:auto;"><p>Prix: '. $plat->prix.'$</p></div>';
    $data .=' <button  id="'.$plat->_id.'" type="submit" name="btn-update" class="btn content-button status-button btnupdate" onclick="getFormUpdate(2,this.id)">Update</button>';
    $data .=' </div></div>';
 echo $data;
}
function appCardAliment($Aliment){
    $data ='<div class="app-card">';
    $data .=' <span> <img src="https://cdn-icons-png.flaticon.com/512/3828/3828051.png"><p>'. $Aliment->nom.'</p> </span>';
    $data .='<div class="app-card-tittlesub">Type :'.$Aliment->type.'</div>';
    $data .='<div class="app-card-tittlesub">Quantite :'.$Aliment->quantite.'</div>';
    $data .='<div class="app-card-tittlesub">date :'.$Aliment->date.'</div>';
    $data .='<div style="margin-top: -64px;"class="app-card__subtext">';
    $data .=' </div><div class="app-card-buttons">';
    $data .=' <button id="'.$Aliment->_id.'" type="submit" name="btn-update"  class="btn content-button status-button btnupdateAliment" onclick="getFormUpdate(1,this.id)">Update</button>';
    $data .=' </div></div>';
 echo $data;
}

// function getDisplayForm(){
//     $data ='<div id="displayForm" class="wrapper-update">';
//     $data .=' <div class="container-update">';
//     $data .='<div id="contentForm" class="content-update">';
//     $data .='<div class="btn-close"><img src="https://cdn-icons-png.flaticon.com/512/7887/7887076.png" alt=""></div>';
//     $data .='<div id="forminsert" class="forminsert"></div>';
//     $data .='</div>';
//     $data .='</div>';
//     $data .='</div>';
// echo $data;
// }
?>
