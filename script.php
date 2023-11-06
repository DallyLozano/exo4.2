<?php
// Récupérez le JSON envoyé par le client
$json_data = file_get_contents('php://input');

// Désérialisez le JSON en un tableau PHP
$donnees = json_decode($json_data, true);

if ($donnees === null) {
    // Gestion de l'erreur en cas de JSON invalide
    echo "Erreur : JSON invalide";
} else {
    // Traitement des données côté PHP

    var_dump($donnees); // Affiche le tableau PHP
}
?>
