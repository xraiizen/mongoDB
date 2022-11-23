function getFormUpdate(index,id){
  contentForm = document.getElementById('forminsert');
    if(index == 1){
      var URL = 'http://localhost:3000/Aliments/'+id;
      $.ajax({
        url: URL,
        type: "GET",
        contentType: "application/json",
        success: function(data) {
      data = data[0];
      console.log(data);
      FormAdd='<div class="rendered-form" id="reload">'+
      '<div class="">'+
      ' <h1 access="false" id="control-6935975">Modifier '+data.nom+'</h1></div>'+
      ' <div class="formbuilder-text form-group field-fnom">'+
      ' <label for="fnom" class="formbuilder-text-label">nom</label>'+
    '    <input type="text" class="form-control" name="fnom" access="false" id="fnom" placeholder=" '+data.nom+'">'+
    '</div>'+
    '<div class="formbuilder-text form-group field-fquantite">'+
    '    <label for="fquantite" class="formbuilder-text-label">quantité</label>'+
    '    <input type="text" class="form-control" name="fquantite" access="false" id="fquantite" placeholder=" '+data.quantite+'">'+
    '</div>'+
    '<div class="formbuilder-text form-group field-ftype">'+
    '    <label for="ftype" class="formbuilder-text-label">type</label>'+
    '    <input type="text" class="form-control" name="ftype" access="false" id="ftype" placeholder=" '+data.type+'">'+
    '    <input style="display:none;" type="text" class="form-control" name="fid" access="false" id="fid" value="'+data._id+'">'+
    '</div>'+
    '<INPUT   id="reload" TYPE="submit" NAME="nom" VALUE=" Envoyer" onclick="updateAliment(this)">'+
    '<INPUT  id="reload" TYPE="submit" NAME="nom" VALUE=" Supprimer" onclick="DeleteAliment()">'+
    '</div>';
    contentForm.innerHTML = FormAdd;
   }});
    }else{
      FormAdd="Plat id:"+id;
      contentForm.innerHTML = FormAdd;
    }

  }