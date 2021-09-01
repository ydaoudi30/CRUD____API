# API Chicken Run
API simple utilisant un webservice CRUD (node.js, express, mongoose).

#### Arborescence:
<img src="http://image.noelshack.com/fichiers/2021/35/3/1630473759-img1.png" width="220"/>
• Le contrôleur définit les méthodes des requêtes.

• Les modèles définissent la structure des données: ci-dessous le schéma mongoose d'un Chicken:

<img src="http://image.noelshack.com/fichiers/2021/35/3/1630474499-img1.png" width="220"/>

• Les routes définissent les types d'opérations et endpoints.

#### Requêtes:

Postman et MongoDB Compass sont utilisés pour les tests de requêtes et la visualisation.

Les données sont stockées en format JSON sur une base de données MongoDB.

• Création de Chickens: (POST)

<img src="http://image.noelshack.com/fichiers/2021/35/3/1630475653-img1.png" width="220"/><img src="http://image.noelshack.com/fichiers/2021/35/3/1630475752-img1.png" width="220"/>

Le corps de la requête devrait contenir au moins les champs requis, les valeurs par défaut sont 0 pour le nombre de pas et False pour l'état de course.

• Affichage de Chicken(s): (GET)

La requête sans paramètres retourne tous les objets présents dans la table.
Ci-dessous le résultat de la requête suivante: <img src="http://image.noelshack.com/fichiers/2021/35/3/1630476841-img1.png" width="220"/> <img src="http://image.noelshack.com/fichiers/2021/35/3/1630476924-img1.png" width="220"/>

```Yaml
[{"name":"John","birthday":"2021-12-12T00:00:00.000Z","weight":40,"steps":0,"isRunning":false,"createdAt":"2021-09-01T05:52:37.618Z","updatedAt":"2021-09-01T05:52:37.618Z","id":"612f152553110f7a15a6fe85"},

{"name":"Sally","birthday":"2021-12-12T00:00:00.000Z","weight":40,"steps":0,"isRunning":false,"createdAt":"2021-09-01T06:02:05.845Z","updatedAt":"2021-09-01T06:02:05.845Z","id":"612f175d53110f7a15a6fe87"},

{"name":"Joe","birthday":"2021-12-12T00:00:00.000Z","weight":50,"steps":0,"isRunning":false,"createdAt":"2021-09-01T06:02:15.898Z","updatedAt":"2021-09-01T06:02:15.898Z","id":"612f176753110f7a15a6fe89"}]
```

Il est possible d'ajouter un parametre pour effectuer une recherche par nom où le mot-clé "running" en endpoint pour afficher tous les Chickens qui sont en état de course.

<img src="http://image.noelshack.com/fichiers/2021/35/3/1630477050-img1.png" width="220"/>

• Mise à jour d'un Chicken: (PUT)

La requête ci-dessous permet de mettre à jour un Chicken en spécifiant son id en endpoint et les champs à modifier dans le body.

<img src="http://image.noelshack.com/fichiers/2021/35/3/1630477706-img1.png" width="220"/>

<img src="http://image.noelshack.com/fichiers/2021/35/3/1630476924-img1.png" width="220"/>  => <img src="http://image.noelshack.com/fichiers/2021/35/3/1630478071-img1.png" width="220"/>

• Chicken Run: (PATCH)

La requête ci-dessous permet d'incrémenter le compteur de pas de 1 et passe l'état de course à True, l'id doit être spécifié en endpoint.

<img src="http://image.noelshack.com/fichiers/2021/35/3/1630478654-img1.png" width="220"/>

<img src="http://image.noelshack.com/fichiers/2021/35/3/1630478071-img1.png" width="220"/> => <img src="http://image.noelshack.com/fichiers/2021/35/3/1630478737-img1.png" width="220"/>

• Suppression de Chicken(s): (DELETE)

La requête permet de supprimer un Chicken en spécifiant son id en endpoint.
Sans id en endpoint, elle supprime tous les éléments de la table.

<img src="http://image.noelshack.com/fichiers/2021/35/3/1630479122-img1.png" width="220"/>
