# 🎵 Website Frontend - Enceinte5A

## 🔧 Technologies utilisées
![React](https://img.shields.io/badge/React-✓-blue)  ![TypeScript](https://img.shields.io/badge/TypeScript-✓-blue)  ![Vite](https://img.shields.io/badge/Vite-✓-purple)  ![CSS](https://img.shields.io/badge/CSS-✓-blue)

Frontend du projet **Website-Frontend** développé avec **React**, **TypeScript** et **Vite**, stylisé avec **CSS**.

## 📌 Fonctionnalités

- 🏠 **Page d'accueil**  
- 🔐 **Page d'authentification**  
- 🛒 **Page panier**  
- 🎨 **Design basé sur Figma** ([Lien vers les maquettes](https://www.figma.com/design/HYwmqC5VdPo9iANlFkNuUf/Enceinte-3D-WireFrames?node-id=1-2&t=rPqupnee6U6COu6p-1))  
- ⚡ **Chargement rapide grâce à Vite**  

---

## 🌍 Déploiement en ligne

Le site est accessible en ligne à l’adresse suivante :  
🔗 **[bowlbox3000.netlify.app](https://bowlbox3000.netlify.app/)**  

---

## ⚠️ Prérequis

Avant d'installer ce projet en local, assure-toi d'avoir :  

- **[Node.js](https://nodejs.org/)** (version 16 ou supérieure)  
- **npm** (installé avec Node.js)  
- **Le back-end** doit être configuré et lancé avant d'exécuter le front-end ([Voir le README du back-end](https://github.com/usine-du-futur-enceinte/Website-Backend)). Il est également accessible en ligne ([via le lien (Render)](https://back-end-website-bowlbox3000.onrender.com))

---

## 🚀 Installation et démarrage

### 1️⃣ Cloner le repo  
```sh
git clone https://github.com/usine-du-futur-enceinte/Website-Frontend.git
cd Website-Frontend
```

### 2️⃣ Installer les dépendances  
```sh
npm install
```

### 3️⃣ Démarrer l'interface  
En mode développement :  
```sh
npm run dev
```
Le projet sera accessible sur **http://localhost:5173** par défaut.

---

## 🛠️ Structure du projet

```
Website-Frontend/
│── 📂 src
│   ├── 📂 assets/          # Images et icônes
│   ├── 📂 components/      # Composants réutilisables (Header, etc.)
│   ├── 📂 pages/           # Pages principales du site (Accueil, Auth, Panier)
│   ├── 📄 services.ts      # Service pour les appels API
│   ├── 📄 main.tsx           # Point d'entrée React
│   ├── 📄 index.css          # Fichier de styles globaux
│   ├── 📄 vite-env.d.ts      # Définition des types pour Vite
│── 📂 public/              # Ressources statiques
│── 📄 package.json         # Dépendances et scripts npm
│── 📄 vite.config.ts       # Configuration de Vite
│── 📄 tsconfig.json        # Configuration TypeScript
│── 📄 README.md            # Documentation du projet
```

---

## 🌐 Déploiement

Le site est hébergé avec **Netlify**. Pour déployer une nouvelle version :  

1. 🛠️ Construire le projet :  
   ```sh
   npm run build
   ```
2. 🚀 Déployer sur Netlify en liant le dépôt GitHub

---

## ❓ FAQ

### 1️⃣ **Le site ne charge pas correctement, que faire ?**  
- Vérifie que ton navigateur est à jour.  
- Assure-toi que le back-end est bien démarré si tu es en local.  

### 2️⃣ **Comment modifier le style du site ?**  
Les styles sont gérés avec **CSS**. Modifie les classes directement dans les composants ou ajuste le fichier **index.css**.  

### 3️⃣ **Je veux contribuer, comment faire ?**  
Forke le projet, crée une branche (`git checkout -b feature-ma-feature`), apporte tes modifications et soumets une **Pull Request** 🚀.  

---

## 🤝 Contribution

1. 🍴 Forker le projet  
2. 🌱 Créer une branche (`git checkout -b feature-nouvelle-feature`)  
3. 🔥 Commit (`git commit -m "Ajout d'une nouvelle feature"`)  
4. 🚀 Pousser (`git push origin feature-nouvelle-feature`)  
5. 📩 Ouvrir une Pull Request  

---

## 📝 Licence

Ce projet est sous licence MIT. 
