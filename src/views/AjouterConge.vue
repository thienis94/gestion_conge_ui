<template>
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="Stylesheet" href="modale.css">
    <title>modale</title>
</head>
<body>
    <div> 
    <div class="tete">
        <p class="conge">ajouter congé</p>
        <button class="retour">X</button>
    </div>
  <div class="foms">
    <P class="pid">Id</P>
    <input type="text" placeholder="" class="id" minlength="2" maxlength="25" required>
    <P class="pnom">Nom</P>
    <input type="text" placeholder="" class="Nom" minlength="2" maxlength="25" required>
    <P class="pprenom">Prenom</P>
    <input type="text" placeholder="" class="Prenom" minlength="2" maxlength="25" required>
    <P class="page">age</P>
    <input type="text" placeholder="" class="Age" minlength="2" maxlength="25" required>
    <P class="pgenre">Genre</P>
    <input type="text" placeholder="" class="Genre" minlength="2" maxlength="25" required>
  </div>
<button class="ajouter">Ajouter</button>
  </div>
</body>
</html>
</template>
<script >

</script>
<style scoped>
body{
    width: 15cm;
    height: 13cm;
    background-color: rgb(255,255, 255);
    position: absolute;
    left: 6cm;
    top: 2cm;
    border: 1px solid rgb(255, 255, 255);
}
.tete{
    background-color: rgb(3, 3, 69);
    width: auto;
    height: 2cm;
    display: flex;

}
.retour{
      width: 16px;
      height: 16px;
 position: absolute;
 top: 0.7cm;
 left: 14cm;
    background-color:rgb(3, 3, 69);
    color: white;
    border: 1px solid  rgb(3, 3, 69);;
        }
  .conge{
      color: white;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .id{
        width: 12.5cm;
        height: 0.7cm;
        border: 2px solid rgba(96, 95, 95, 0.308);
        border-radius: 5px;
        margin-left: 0.5cm;
        position: absolute;
        top: 2.8cm;
        left: 0.8cm;
    }
    .Nom{
        width: 12.5cm;
        height: 0.7cm;
        border: 2px solid rgba(96, 95, 95, 0.308);
        border-radius: 5px;
        margin-left: 0.5cm;
        position: absolute;
        top: 4.5cm;
        left: 0.8cm;
    }
    .Prenom{
        width: 12.5cm;
        height: 0.7cm;
        border: 2px solid rgba(96, 95, 95, 0.308);
        border-radius: 5px;
        margin-left: 0.5cm;
        position: absolute;
        top: 6.2cm;
        left: 0.8cm;
    }
    .Age{
        width: 12.5cm;
        height: 0.7cm;
        border: 2px solid rgba(96, 95, 95, 0.308);
        border-radius: 5px;
        margin-left: 0.5cm;
        position: absolute;
        top: 7.9cm;
        left: 0.8cm;
    }
    .Genre{
        width: 12.5cm;
        height: 0.7cm;
        border: 2px solid rgba(96, 95, 95, 0.308);
        border-radius: 5px;
        margin-left: 0.5cm;
        position: absolute;
        top: 9.6cm;
        left: 0.8cm;
    }
    .pid{
        position: absolute;
        top: 1.9cm;
      left: 2cm;
    }
   .pnom{
    position: absolute;
    top: 3.6cm;
     left: 2cm;
     display: inline-block;
    }

   .pprenom{
    position: absolute;
    top: 5.3cm;
     left: 2cm;
     display: inline-block;
}
 
   .page{
    position: absolute;
    top: 7cm;
     left: 2cm;
     display: inline-block;
}
   
   .pgenre{
    position: absolute;
    top: 8.7cm;
     left: 2cm;
     display: inline-block;
}
.ajouter{
    background-color: blue;
    position: absolute;
    top: 11cm;
     left: 2cm;
     display: inline-block;
     width: 2cm;
     height: 1cm;
     border-radius: 5px;
     border: 0px;
}
</style>