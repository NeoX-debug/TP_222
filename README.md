API de Blog - INF222 TAF 1
Ce projet est une API Backend développée dans le cadre du module INF222 - EC1 : Programmation Web. L'objectif est de gérer les articles d'un blog via des endpoints RESTful, en utilisant Node.js, Express et MongoDB.

🛠️ Installation et Configuration
Suivez ces étapes pour installer et lancer le projet sur votre machine locale :
Installer les dépendances :
        Body JSON:
        npm install dotenv
        npm install express
        npm install mongoose
        npm install nodemon

Configurer les variables d'environnement :
Créez un fichier .env à la racine du projet et ajoutez votre chaîne de connexion MongoDB :

Ajouter un script pour lancer le serveur:
        Body JSON:
        "scripts": {
            "server": "nodemon backend/server.js"
        }

Lancer le serveur :

Le serveur sera accessible sur http://localhost:3000.

🚀 Endpoints de l'API
L'API expose les points de terminaison suivants pour la ressource Article :

📝 Exemples d'utilisation
Créer un article (POST)
URL : http://localhost:3000/api/articles

Corps de la requête (JSON) :

Rechercher un article (GET)
URL : http://localhost:3000/api/articles/search?query=premier

🚦 Codes de Réponse HTTP utilisés
Conformément aux bonnes pratiques de développement d'API, les codes suivants sont retournés :

200 [OK] : La requête a réussi (lecture, modification, suppression).

201 [Created] : L'article a été créé avec succès.

400 [Bad Request] : La requête est mal formée (ex: titre ou auteur manquant).

404 [Not Found] : L'article demandé n'existe pas dans la base de données.

500 [Internal Server Error] : Une erreur est survenue au niveau du serveur.

📂 Structure du Projet
Le code est organisé selon une architecture MVC simplifiée pour une meilleure maintenance :

models/ : Définition du schéma de données (Mongoose).

controllers/ : Logique métier et manipulation des données.

routes/ : Définition des chemins et méthodes HTTP.

server.js : Point d'entrée de l'application.

Projet réalisé par [Ton Nom] - 2026