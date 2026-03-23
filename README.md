# 📝 API Blog - TP 222

Une API REST robuste construite avec **Node.js**, **Express** et **MongoDB (Mongoose)** pour la gestion d'articles de blog.

---

## 🚀 Fonctionnalités

- **CRUD Complet** : Créer, Lire, Modifier et Supprimer des articles.
- **Recherche Avancée** : Recherche par mots-clés dans les titres.
- **Validation des Données** : IDs numériques obligatoires et champs requis.
- **Gestion d'Erreurs** : Réponses claires (400, 404) pour les requêtes mal formulées.

---

## 📦 Installation

Suivez ces étapes pour installer le projet localement :

```bash
# 1. Cloner le repository ou copier les fichiers
# 2. Installer les dépendances
npm install
npm install mongoose
npm install dotenv
npm install nodemon
npm install express
npm install mongodb
```

---

## ⚙️ Configuration

Créez un fichier `.env` à la racine du projet et ajoutez votre URI MongoDB :

```env
MONGO_URI=mongodb://127.0.0.1:27017/tp_222
```

---

## 🏃 Lancement du serveur

Pour lancer le serveur avec **nodemon** (redémarrage automatique) :

```bash
npm run server
```

Le serveur sera accessible sur : `http://localhost:5000`

---

## 🛠️ Points d'accès API (Endpoints)

### Articles

| Méthode | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/articles` | Récupère tous les articles |
| **GET** | `/api/articles/:id` | Récupère un article par son ID |
| **GET** | `/api/articles/search?query=...` | Recherche des articles par titre |
| **POST** | `/api/articles` | Crée un nouvel article |
| **PUT** | `/api/articles/:id` | Modifie un article existant |
| **DELETE** | `/api/articles/:id` | Supprime un article spécifique |
| **DELETE** | `/api/articles` | Supprime TOUS les articles |

---

## 🧪 Exemple de JSON pour POST/PUT

```json
{
  "id": 1,
  "titre": "Mon premier article",
  "auteur": "Forlan",
  "categorie": "Technologie"
}
```

---

## 🛡️ Gestion des Erreurs

- **400 Bad Request** : Si l'ID n'est pas un nombre ou si la route est inconnue.
- **404 Not Found** : Si l'article demandé n'existe pas.
- **201 Created** : Confirmation de création d'article.
- **200 OK** : Confirmation du bon déroulement du processus