<?php
require_once "php/app-card.php";
require_once "php/getApi.php";
$aliments = get_api('Aliments');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
    <title>Document</title>
</head>
<body>
<div id="eduIngredient_fields"></div>
    <div class="input-group">
      <select class="form-control" id="eduIngredient" name="eduIngredient[]">
        <option value="">Ingredient</option>
       <?php foreach($aliments as $aliment){
           echo ('<option value="'.$aliment->_id.'">'.$aliment->nom.'</option>');
       }?>
      </select>
      <div class="input-group-btn">
        <button class="btn btn-success" type="button"  onclick="eduIngredient_fields();">
        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
    </button>
      </div>
</div>
<!-- <div class="clear"></div> -->
</body>
<script>
    var room = 1;
function eduIngredient_fields() {
 
    room++;
    var objTo = document.getElementById('eduIngredient_fields')
    var divtest = document.createElement("div");
	divtest.setAttribute("class", "form-group removeclass"+room);
	var rdiv = 'removeclass'+room;
  
   
    
    let str = '<div class="input-group">'
    str += '<select class="form-control" id="eduIngredient" name="eduIngredient[]">'
    str += '<option value="">Ingredient</option>'
    <?php foreach($aliments as $aliment){ ?>
    str += '<option value="<?php echo  $aliment->_id?>"><?php echo  $aliment->nom?></option>'
    <?php }?>
    str += '</select>'
    str += '<div class="input-group-btn"> <button class="btn btn-danger" type="button" onclick="remove_eduIngredient_fields('+ room +');"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> </button></div>';
    divtest.innerHTML =str;
    objTo.appendChild(divtest)
}
   function remove_eduIngredient_fields(rid) {
	   $('.removeclass'+rid).remove();
   }
</script>
</html>