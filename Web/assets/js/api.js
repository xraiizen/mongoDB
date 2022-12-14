function setAliment(form) {
const formData = new FormData();
var object = {};
var name = document.getElementById('fnom').value;
var quantite = document.getElementById('fquantite').value;
var type = document.getElementById('ftype').value;
var URL = 'http://localhost:3000/Aliments';
formData.append("nom", name);
formData.append("quantite", quantite);
formData.append("type", type);
formData.forEach(function(value, key){
    object[key] = value;
});
  $.ajax({
    url: URL,
    type: "POST",
    data: JSON.stringify(object),
    contentType: "application/json",
    success: function(data) {
      console.log('success --> data :', data);
      $('#displayForm').removeClass('is-active');
      location.reload();
      $
    }});
}
function updateAliment(form) {
  const formData = new FormData();
  var object = {};
  var id = document.getElementById('fid').value;
  var name = document.getElementById('fnom');
  var quantite = document.getElementById('fquantite');
  var type = document.getElementById('ftype');
  var URL = 'http://localhost:3000/Aliments/'+id;
  if(name.value.length >0){
    console.log(name.value);
    formData.append("nom", name.value);
  }
  if(quantite.value.length >0){
    formData.append("quantite", quantite.value);
  }
  if(type.value.length >0){
    formData.append("type", type.value);
  }
  formData.forEach(function(value, key){
      object[key] = value;
  });
  console.log(object);
    $.ajax({
      url: URL,
      type: "PUT",
      data: JSON.stringify(object),
      contentType: "application/json",
      success: function(data) {
        console.log('success --> data :', data);
        $('#displayForm').removeClass('is-active');
        location.reload();
      }});
  }
  function DeleteAliment(form) {
    var id = document.getElementById('fid').value;
    var URL = 'http://localhost:3000/Aliments/'+id;
    $.ajax({
        url: URL,
        type: "DELETE",
        contentType: "application/json",
        success: function(data) {
          console.log('success --> data :', data);
          $('#displayForm').removeClass('is-active');
          location.reload();
        }});
    }

    function setPlat(form) {
      const formData = new FormData();
      var object = {};
      var name = document.getElementById('fnom').value;
      var ingredients = document.getElementById('eduIngredient[]');
      var quantite = document.getElementById('fquantite').value;
      var URL = 'http://localhost:3000/Plats';
      formData.append("nom", name);
      formData.append("aliments", ingredients);
      formData.append("quantite", quantite);
      formData.forEach(function(value, key){
          object[key] = value;
      });
      console.dir(object);
      console.dir(ingredients);
        // $.ajax({
        //   url: URL,
        //   type: "POST",
        //   data: JSON.stringify(object),
        //   contentType: "application/json",
        //   success: function(data) {
        //     console.log('success --> data :', data);
        //     $('#displayForm').removeClass('is-active');
        //     location.reload();
        //     $
        //   }});
      }

      function updatePlat(form) {
        var object = {"quantite" : 5 };
        var id = document.getElementById('plat').value;
        var URL = 'http://localhost:3000/Plats/'+id;
        $.ajax({
          url: URL,
          type: "PUT",
          data: object,
          contentType: "application/json",
          success: function(data) {
              data.quantite = data.quantite -1
              console.log('success --> data :', data.quantite );
              // location.reload();
            }});
        }