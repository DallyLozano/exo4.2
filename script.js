
var t = [];

do{
   var n= prompt("entrer une valeur plus grand que \"0\" ");
   if(n > 0){
    t.push(n);
   }
   else{
     alert("la valeur n'est pas valide");
    }
}
while(n > 0);

var myTabJSON = JSON.stringify(t);

// Création d'une nouvelle instance de XMLHttpRequest
var xhr = new XMLHttpRequest();

// Configurez la requête HTTP methode GET
xhr.open("POST", "script.php", true);
xhr.setRequestHeader("Content-Type", "application/json");

// Définissez une fonction à exécuter lorsque la réponse est prête //pour gerer l    reponse du serveur
xhr.onload = function () {
  if (xhr.status === 200) {
    // La réponse est réussie, vous pouvez accéder aux données ici
    console.log(xhr.responseText);

  } else {
    // Gérez les erreurs ici
    console.error("Erreur lors de la requête : " + xhr.status);
  }
};

// Envoyez la requête == envoyez le JSON au serveur
xhr.send(myTabJSON);
