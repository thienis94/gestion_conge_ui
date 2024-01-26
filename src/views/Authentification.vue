<template>
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="Stylesheet" href="devoirhtml.css">
    <title>Authentification </title>
</head>
<body class="boddy">
    <div class="partie1">
        <p class="p1">GESTION <br> CONGE</p>
    </div>
    <div class="partie2">
   
    <div class="connecter">
        <div class="centrée">
            <h1> se connecter</h1>
            <div
            >
                 <p> Nom D'utilisateur</p>
                 <input type="text" placeholder="tech" class="utilisateur" minlength="2" maxlength="25" required>
            </div>
            <div>
                 <p>Mot De Passe</p>
                 <input class="word" placeholder="password" type="password"  minlength="8" maxlength="20" required>
            </div>
            <button class="connexion"> Connexion</button>
        </div>
    </div>
</div>
</body>
</html>
</template>
<script >

</script>
<style scoped>
.boddy{
 display:flex;
    }
    .partie1{
             background-color: rgb(2, 2, 49);
             width: 10cm;
             height:20cm ; 
            }
        .p1{
            font-size: 50px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
             color: white;
             margin-top: 7cm;
        }
        .partie2{
                   background-color: rgba(223, 213, 213, 0.904);
                   height: 20cm;
                   width: 27cm;
                   display: flex;
                 }
            .connecter{
                            background-color: white;
                             position: absolute;
                             height: 11cm;
                             width: 11cm;
                               right: 5cm;
                               bottom: 3cm;

                        }
                .centrée{
                    margin-left: 1cm;
                }
            .utilisateur{
                          height: 1.1cm; 
                          width: 7cm;
                          border: 2px solid rgb(9, 32, 247);
                          background-color: rgb(227, 245, 239);
                          border-radius: 5px;
                        }
                .word{
                    height: 1.1cm; 
                    width: 7cm;
                    background-color: rgb(231, 248, 244);
                    border: 2px solid r#4f4e52;
                    border-radius: 5px;
                     }
         .connexion{
                      background-color: blue;
                      height: 1cm;
                     width: 3cm;
                     margin-top: 1cm;
                     color: white;
 
                   }
</style>