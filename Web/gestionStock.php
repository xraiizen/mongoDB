<?php
require_once "php/app-card.php";
require_once "php/getApi.php";
?>
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

  <link rel="stylesheet" href="assets/css/main.css">

  <title>Api Rest</title>
</head>
<?php
    $plats = get_api('Plats');
    $aliments = get_api('Aliments');
?>

<body>
  <?php $form=""?>
  <div id="displayForm" class="wrapper-update">
    <div class="container-update">
      <div id="contentForm" class="content-update">
        <div class="btn-close"><img src="https://cdn-icons-png.flaticon.com/512/7887/7887076.png" alt=""></div>
        <div id="forminsert" class="forminsert"></div>
      </div>
    </div>
  </div>
  <div class="video-bg">
    <video width="320" height="240" autoplay loop muted>
      <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <div class="app">
    <div class="header">
      <div class="menu-circle"></div>

    </div>
    <div class="wrapper">
      <div class="left-side">
        <div class="side-wrapper">
          <div class="side-title">Link</div>
          <div class="side-menu">
            <a class="side-menu-link is-active" onclick="showDiv('1');">
              <img src="https://cdn-icons-png.flaticon.com/512/4924/4924342.png">
              Aliments
            </a>
            <a class="side-menu-link" onclick="showDiv('2');">
              <img src="https://cdn-icons-png.flaticon.com/512/3828/3828051.png">
              Plats
              <span class="notification-number updates">2</span>
            </a>
          </div>
        </div>
      </div>
      <div class="main-container">
        <div class="main-header">
          <a class="menu-link-main" href="#">Api Restaurant</a>
          <button onclick="getForm(2)" type="submit" name="addplat" class="btn">Ajout d'un plat</button>
          <button onclick="getForm(1)" type="submit" name="addaliment" class="btn">Ajout d'un
            aliment</button>
        </div>

        <div id="divLinks" class="content-wrapper">
          <div class="showdiv" id="container2">
            <div class="apps-card">
              <?php foreach($plats as $plat)  appCardPlat($plat);?>
            </div>
          </div>
          <div class="showdiv" id="container1">
            <div class="apps-card">
              <?php foreach($aliments as $aliment)  appCardAliment($aliment);?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

</html>
<script>
</script>
<script src="assets/js/main.js"></script>
<script src="assets/js/form.js"></script>
<script src="assets/js/api.js"></script>
<script>
  function getForm(index){
    contentForm = document.getElementById('forminsert');
    contentForm.innerHTML='';
if(index==1){
  FormAdd='<div class="rendered-form">'+
    '<div class="">'+
    ' <h1>Ajout d un Aliment</h1></div>'+
    '<div class="flexcenter">'+
    ' <div class="formbuilder-text form-group field-fnom">'+
    ' <label for="fnom" class="formbuilder-text-label">nom</label>'+
    '    <input type="text" class="form-control" name="fnom" access="false" id="fnom">'+
    '</div>'+
    '<div class="formbuilder-text form-group field-fquantite">'+
    '    <label for="fquantite" class="formbuilder-text-label">quantité</label>'+
    '    <input type="text" class="form-control" name="fquantite" access="false" id="fquantite">'+
    '</div>'+
    '<div class="formbuilder-text form-group field-ftype">'+
    '    <label for="ftype" class="formbuilder-text-label">type</label>'+
    '    <input type="text" class="form-control" name="ftype" access="false" id="ftype">'+
    '</div>'+
    '</div>'+
    '<INPUT  id="reload" TYPE="submit" NAME="nom" VALUE=" Envoyer" onclick="setAliment(this)">'+

    '</div>';
    contentForm.innerHTML = FormAdd;
  }else{
    FormAdd='<div class="rendered-form">'
    FormAdd +='<div class="">'
    FormAdd +=' <h1 access="false" id="control-6935975">Ajout d un plat</h1></div>'
    FormAdd +=' <div class="formbuilder-text form-group field-fnom">'
    FormAdd +=' <label for="fnom" class="formbuilder-text-label">nom</label>'
    FormAdd +='    <input type="text" class="form-control" name="fnom" access="false" id="fnom">'
    FormAdd +='</div>'
    FormAdd +='<div id="eduIngredient_fields"></div>'
    FormAdd +='<div class="input-group">'
    FormAdd += '<select class="form-control" id="eduIngredient" name="eduIngredient[]">'
    FormAdd +=   '<option value="">Ingredient</option>'
      <?php foreach($aliments as $aliment){ ?>
        FormAdd +='<option value="<?php echo $aliment->_id?>"><?php echo $aliment->nom ?></option>'
      <?php }?>
      FormAdd +='</select>'
      FormAdd +=' <div class="quantiteForm">'
      FormAdd +=' <input type="text"></input>'
    FormAdd +='</div>'
      FormAdd +=' <div class="input-group-btn">'
      FormAdd += '  <button class="btn btn-success" type="button"  onclick="eduIngredient_fields();">'
      FormAdd +=   '<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>'
      FormAdd += '</button>'
      FormAdd += '</div>'
      FormAdd += '</div>'
      FormAdd +='<div class="formbuilder-text form-group field-fquantite">'
      FormAdd += '    <label for="fquantite" class="formbuilder-text-label">quantité</label>'
      FormAdd += '    <input type="text" class="form-control" name="fquantite" access="false" id="fquantite">'
      FormAdd += '</div>'
      FormAdd += '<INPUT   id="reload" TYPE="submit" NAME="nom" VALUE=" Envoyer" onclick="setPlat(this)">'
      FormAdd += '</div>';
    contentForm.innerHTML = FormAdd;
  }
}
var room = 1;
function eduIngredient_fields() {
 
    room++;
    var objTo = document.getElementById('eduIngredient_fields')
    var divtest = document.createElement("div");
	divtest.setAttribute("class", "form-group removeclass"+room);
	var rdiv = 'removeclass'+room;
  
   
    
    let str = '<div id="'+room+'" class="input-group">'
    str += '<select class="form-control" id="eduIngredient" name="eduIngredient[]">'
    str += '<option  value="">Ingredient</option>'
    <?php foreach($aliments as $aliment){ ?>
    str += '<option value="<?php echo  $aliment->_id?>"><?php echo  $aliment->nom?></option>'
    <?php }?>
    str += '</select>'
    str +=' <div class="quantiteForm">'
    str +=' <input type="text"></input>'
    str +='</div>'
    str += '<div class="input-group-btn"> <button class="btn btn-danger" type="button" onclick="remove_eduIngredient_fields('+ room +');"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> </button></div>';
    divtest.innerHTML =str;
    objTo.appendChild(divtest)
}
   function remove_eduIngredient_fields(rid) {
	   $('.removeclass'+rid).remove();
   }
</script>