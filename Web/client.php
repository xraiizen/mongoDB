

<?php require_once "php/app-card.php"; 
require_once "php/getApi.php"; 
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="assets/css/main.css">
  <title>Api Rest</title>
</head>
<body>
    <?php
    $plats = get_api('plats');
    $aliments = get_api('aliments');
    
    $stock = [];
    foreach($aliments as $aliment)
    {
        $stock[$aliment->nom] = $aliment;
    }
    
    ?>
<h2>Plats :</h2>
<div class="liste">
    
    <?php
    foreach($plats as $plat)
    {
        $indisponible = '';
        foreach($plat->aliments as $aliment)
        {   
            if(!isset($stock[$aliment->nom]) || $aliment->quantite >= $stock[$aliment->nom]->quantite)
            {
                $indisponible = 'indisponible';
            }
        }
        echo '
        <div class="plat '.$indisponible.'">
        <form method="post" action="">
        <div class="nom">
        <h4>'.$plat->nom.'</h4>
        </div>
        <div class ="c">';    
        foreach($plat->aliments as $aliment)
        {
            echo '<p>- '.$aliment->nom.'</p>';
        }
        echo '
        <div class="prix">'.$plat->prix.' €</div>
        </div>
        
        <div class="button">';
        if($indisponible == '')
        {
            echo '
            <button name="plat" id="plat" type="submit" value="'.$plat->_id.'" onClick="updatePlat(this)">Commander</button>';
        }else{
            echo '<p>indisponible</p>';
        }
        echo '  
        </div>
        </form>
        </div>
        ';
    }
    ?>
</div>

<style>
    body {
        font-family: 'Roboto', sans-serif;
    }
    .plat {
        border: solid 1px black;
        padding: 0 15px 15px;
        border-radius: 14px;
        margin: 0 10px;
        width: 185px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: var(--theme-bg-color);
    }
    .indisponible {
        border: solid 1px lightgray;
        color: grey;
    }
    .liste {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .prix {
    }
    .titre {
        font-size: 75px;
        text-align: center;
    }
    .button {
        margin-top: 15px;
        bottom: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 14px;
        bottom: 0px;
        border: solid 1px black;
        background: var(--theme-bg-color);
    }
    h1 {
        text-align: center;
    }
    .ingredients {
        height: 200px;
    }
    .nom {
        height: 4em;
    }
</style>


</html>
<script src="assets/js/api.js"></script>
<script>
    </script>