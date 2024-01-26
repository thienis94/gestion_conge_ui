<template>
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="Stylesheet" href="devoirhtml2.css">
    <title>page menu</title>
</head>
<body>
    <div class="tete">
        <h1 class="liste">Liste des utilisateurs</h1>
       <div class="tetedroit">
        <div class="chercher">
        <input type="text"  placeholder="chercher..."  type="search" minlength="2" maxlength="20">
       </div>
       <div >
        <button class="Ajouter" type="button" > Ajouter Employer</button>
       </div>
    </div>
    </div>
           <div class="menu">
            <table>
                <thead>
                    <tr>
                        <td class="nom">nom</td>
                        <td class="prenom">prenom</td>
                        <td class="age">age</td>
                        <td class="genre">genre</td>
                        <td class="Status">status</td>
                        <td class="action">action</td>
                    </tr>
                </thead>
                <tbody class="table">
                    <tr class="ligne1" >
                        <td>Artcal's</td>
                        <td>Lone Wolf</td>
                        <td>45</td>
                        <td>F</td>
                        <td>pas en coger</td>
                        <td class="yes1">
                            <button class="ajouter_co" type="menu"> ajouter conger</button>
                            <button class="modifier" type="menu">  modifier</button>
                            <button class="suprimer" type="menu"> suprimer</button>
                        </td>
                    </tr>
                    <tr class="ligne2">
                        <td>TWL</td>
                        <td>wolverine</td>
                        <td>45</td>
                        <td>F</td>
                        <td>pas en coger</td>
                        <td class="yes2">
                            <button class="ajouter_co" type="menu"> ajouter conger</button>                   
                            <button class="modifier" type="menu">  modifier</button>
                            <button class="suprimer" type="menu"> suprimer</button>
                        </td>
                    </tr>
                </tbody>
            </table>
           </div>
</template>
<script >

</script>
<style scoped>
boddy{
         background-color: white;

       }
.tete{
display: flex; 
   }
   .chercher{
    height: 2cm;
     width: 3.5cm;
      position: absolute; 
      bottom: 14cm;
      left: 20cm;
   }
   .tetedroit{
               display: flex;
               gap: 0.5cm;
               margin-left: auto;
               margin-top: 0.5cm;
           }
.Ajouter{
   background-color: rgb(2, 2, 54);
   color: white;
   font-size: 12px;
     width: 3.5cm;
     height: 1cm;
     border-radius: 5px;
}
.menu{
    display: flex
}
.nom{
    background-color: rgb(2, 2, 54);
    border-radius: 5px;
   color: white;
width: 4cm;
height: 1cm;
}
.prenom{
    background-color: rgb(2, 2, 54);
    border-radius: 5px;
   color: white;
width: 4cm;
height: 1cm;
}
.age{
    background-color: rgb(2, 2, 54);
    border-radius: 5px;
   color: white;
   width: 2cm;
height: 1cm;
}
.genre{
    background-color: rgb(2, 2, 54);
    border-radius: 5px;
   color: white;
   width: 3cm;
height: 1cm;
      }
      .Status{
        background-color: rgb(2, 2, 54);
    border-radius: 5px;
   color: white;
    width: 4cm;
    height: 1cm;
      }
.action{
    background-color: rgb(2, 2, 54);
    border-radius: 5px;
   color: white;
   width: 15cm;
height: 1cm;
}
.ajouter_co{
    background-color:rgba(0,0,255) ;
              border-radius: 5px;
              color: white;
              width: 3cm;
              height: 0.8cm;
              border: hidden;
           }
.suprimer{
    background-color:rgba(255, 0,0) ;
    border-radius: 4px;
    color: white;
    width: 3cm;
    height: 0.8cm;
    border: hidden;
         }
.modifier{
    background-color:rgba(0, 0, 255) ;
    border-radius: 5px;
    color: #ffffff;
    width: 2.5cm;
    height:0.8cm ;
    border: hidden;
         }
 td{
    border-bottom: 1px solid grey;
}
tbody td{
     height: 1cm;
}
</style>