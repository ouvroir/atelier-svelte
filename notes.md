## Svelte et Sveltekit

Les frameworks modernes s'inscrivent dans une logique de **composants**. L'enjeux est avant tout la réutilisabilité du code (et donc des composants), la facilité de maintenance et de modification ainsi que la facilité de développement.

Généralement les frameworks utilisent leur propres langage. De fait, la gestion de la réutilisabilité de ces outils passe par ce qu'on appelle le **templating**.

Svelte est un **framework** = ensemble d'outil pour faciliter le développement de composants et d'interfaces. Dans notre cas, on parle de framework web qui faciliten notamment :

- le développement de composants modulaires et réutilisables

Sveltekit lui est un meta-framework, c'est-à-dire qu'il subsume Svelte et qu'il introduit des outils qui lui sont propres. Dans le cas de Sveltekit sont ajoutés des outils de :

- routing (gestion des chemins de l'application - les URIs qui composent le site)
- strores (qui permettent de gérer les états de l'application)
- build (compresse intelligement le projet pour diminuer sa taille en production)
- types d'application : SPA (Single-Page Application) ou MPA (Multi-Page Application) ? SSR (Server-Side Rendering), SSG (Static Site Generation)

Des exemples similaires à Svelte et Sveltkit : ReactJS et NextJS

## Node et NPM

#### L'environnement d'éxecution Node

Node : environnement d'exécution. Alors que le langage Javascript seulement exécutable par un navigateur, Node a rendu possible son exécution dans d'autres environnements comme par exemple un serveur.

#### NPM, le package manager de Node

NPM (Node Package Manager) : c'est l'outil de gestion de package de Node, l'équivalent de pip pour le langage Python. Les packages Javascript disponibles sont visibles sur le NPM Registery. Du au nombre important de dépendances que contiennent les projets et librairies JS en général, il est nécessaire de disposer d'un outil qui ne permettent pas seulement d'installer un package depuis un dépôt (le NPM registery dans notre cas), mais également de veiller à installer les dépendances et également de veiller aux problèmes de compatibilités des outils.

### Vite, un environnement de développement et de production

Vite est un environnement de développement. C'est-à-dire que les outils qu'il met à disposition sont là pour cadrer ou faciliter le développement d'une application, d'un site. Par exemple, il met à disposition des outils de test (Vitest), des outils de rafraichissement rapide (quand le fichier d'un projet est mis à jour, le serveur est rafraichi pour faire apparaitre presque instantanément les modifications). Il met également à disposition des outils de _build_.

Le _build_ : dès lors qu'on travail dans un environnement de web moderne, la quantité de code qui permettent de faire fonctionner le projet est très importante. Avant de publier un site web, il est important de le compresser au mieux afin de diminieur les temps de chargement de page. En bref, les outils de build comme Vite tente exclure le code et les librairies non utilisées, et compresse les fichiers (généralement en les réécrivant avec le moins de caractères possible).

## Sveltkit

Maintenant que nous avons une idée dans l'environnement dans lequel nous allons travailler, installons un projet sveltekit afin de comprendre comme celui-ci est constitué.

Dans un terminal, entrez la commande :

> npm create svelte@latest nom-du-projet

On va choisir le projet squelette, on ne va ajouter aucune des options de test etc.

> cd nom-du-projet
> npm install

Prenons maintenant le temps comment le projet est structuré. Cela nous permettra de mettre en évidence la présence de différents outils qui constitue notre environnement de travail.

### Architecture d'un projet

```
.
├── README.md
├── jsconfig.json
├── package.json
├── src
│   ├── app.d.ts
│   ├── app.html
│   ├── lib
│   │   └── index.js
│   └── routes
│       └── +page.svelte
├── static
│   └── favicon.png
├── svelte.config.js
└── vite.config.js
```

#### package.json

C'est l'un des fichiers les plus importants de notre projet. C'est lui qui contient les informations concernant les dépendances de notre projets et les instructions pour l'exécuter en développement ou en créer un build. Sans lui, il impossible de reconstruire le projet.

Regardons plus en détail l'objet JSON qui le constitue :

- Il y a tout d'abord les metadonnées du projet : son nom, sa version, le type de projet, etc. d'autres métadonnées sont disponibles mais nous ne rentrerons pas dans le sujet aujourd'hui. Il faut simplement savoir que dans un premier temps ce ne sont pas ces métadonnées qui sont réellement importantes dans un premier temps.

##### Les scripts

```json
{
	...
	"scripts": {
		"dev": "vite dev",
		"build": "vite build",
		"preview": "vite preview",
		...
	},
	...
}
```

- l'objet _script_ : cet partie de l'objet indique qu'elles sont les commandes qui nous permettent d'exécuter notre projet. Chacun des attribut de "script" est en fait un nom de commande que l'on va pouvoir exécuter dans son terminal à l'aide de NPM.

Par exemple, pour lancer notre application en mode développement, on va pouvoir entrer la commande suivante dans notre terminal :

> npm run dev

Ce qui se passe en réalité, c'est que la commande `vite dev` est exécuté dans notre terminal. `dev` n'est qu'un alias de cette commande. Cet alias permet de s'affranchir de spécificité de notre environnement, et de nous offrir une commande simple (que l'on va devoir souvent taper) et qui sera la même dans la plupart des projets JS (même ceux qui n'utilisent pas les même outils d'environnement).

L'autre avantage est de pouvoir customiser ces commandes. Imaginons que nous ayons déjà écrit une API en Python qui permet de servir des données quelconques. On pourrait alors customsier le fichier package.json pour lancer notre API à chaque fois que nous lançons le projet web qui affichent ces données :

```json
{
    ...,
    "scripts": {
        "dev": "vite dev && python ../autre-dossier/server.py"
    }
}
```

##### Les "devDependencies"

```json
{
    ...,
    "devDependencies": {
		"@sveltejs/adapter-auto": "^3.0.0",
		"@sveltejs/kit": "^2.0.0",
		"@sveltejs/vite-plugin-svelte": "^3.0.0",
		"svelte": "^4.2.7",
		"svelte-check": "^3.6.0",
		"typescript": "^5.0.0",
		"vite": "^5.0.3"
	},
    ...
}
```

Les "devDependencies" forment une partie des dépendances de notre projet. Comme son nom l'indique, ces dépendances ne sont utiles que durant les différentes phases de développement. Cela veut également dire que le code de ces dépendances ne se retrouvera pas dans le _bundle_ (c.a.d le code JS compressé) de notre application.

On voit par exemple que le package `svelte` est seulement utile au moment du développement. Et de fait, cela rejoint notre première description du framework : il n'est là que pour donner à cadre à notre travail, à fournir des outils pour faciliter la conception d'interface. Une fois que le site est buildé et mis en production, c'est du code écrit en javascript, html et css purs que l'on retrouve, produit par `svelte`.

Il n'en reste donc pas moins que ces dépendances sont tout aussi importantes que les autres puisque sans elles il ne sera pas possible de lancer ou builder notre application.

##### Les "dependencies"

Lors de l'initialisation de notre projet sveltekit, aucune mention de ces "dependencies", c'est que pour le moment aucune dépendance n'existe.

Cependant, si vous décider d'utiliser une librairie quelconque (imaginons une librairie JS pure qui permet de d'afficher des calendriers), il fort probable que cette dépendance soit dans "dependencies" impliquant alors que la dépendance sera incluse dans le bundle de notre application puisque qu'elle devra être utiliser à chaque fois qu'elle est lancée dans un navigateur.

#### Le dossier node_modules

Lorsque nous avons initialisé le projet sveltekit, il nous a été demandé d'exécuter la commande `npm install` (on pourrait également utiliser `npm i` pour aller plus vite).

Lorsque cette commande est exécuter dans le terminal, on demande à NPM de regarder lire les dépendances explicitées dans le fichier `package.json` et les places dans le dossier `node_modules` à la racine du projet. Un coup d'oeil dans ce dossier montre que même si nous n'avons pas installé de packages par nous même, les dépendances de départ reposent elle sur de très nombreux modules.

Pour installer un package, on utilise encore la commande npm install mais cette fois-ci en indiquant le nom de package que l'on souhaite un installer (on pourrait indiquer les noms de plusieurs packages). Installons le Mdsvex qui nous servira à manipuler et afficher des fichiers markdown :

> npm install mdsvex

À l'exécution de la commande, on peut vérifier que NPM a bien créé une dépendance dans notre `package.json`. C'est une bonne chose, mais comme pour `svelte`, `mdsvex` n'est utile qu'au moment du développement tant dis qu'elle inscrite comme étant une dépendance en tout temps. Réctifions le problème en retirant `mdsvex` des dépendances et en la réinstallant dans les `devDependencies` :

> npm remove mdsvex
> npm install -D mdsvex

Ici, c'est le paramètre `-D` qui indique à NPM que la dépendance que nous souhaitons installer est placer dans les devDependencies. Si l'on voulait expliciter qu'une dépendance est utile en tout temps on pourrait utiliser le paramètre `-S`.

Comment savoir si une dépendance n'est utile que pour la phase de développement ? Le plus simple est encore d'aller voir la documentation du module.

Reste à noter qu'en aucun cas il ne faut modifier les fichiers à l'intérieur de `node_modules` pour la simple et bonne raison que toute modification apportée à l'intérieur du dossier ne sera pas apparente dans le prochain commit.

#### package-lock.json

Moins important que `package.json` ce fichier comporte l'arbre de toutes les dépendances du projet, incluant les dépendances indiquées dans le `package.json` et celles dans `node_modules`. Ce fichier est rarement voire jamais modifier à la main. Il est généré par NPM à chaque fois que l'on exécute la commande `npm install`.

> Pro tip (lol): il se peut qu'à un moment vous rencontriez des conflits de version entre les dépendances que NPM ne peut résourdre seul. Avant de s'énerver, on peut essayer de supprimer le fichier `package-lock.json` ainsi que le répertoire `node_modules` et relancer la commande `npm install` pour réinstaller toutes les dépendances. Dans la grande majorité des cas, cela permet de résoudre le problème.

#### .npmrc

Ce fichier permet de customiser le comportement de NPM. Il n'a pas besoin d'être modifié.

#### svelte.config.js

Un autre fichier important. Alors que la plupart des fichiers et répertoires que nous avons vu auparavant sont communs à tous les projets node, celui-ci est (de manière évidente) unique à Svelte.
Il permet notamment de configurer de nombreux aspects du comportement de Svelte et sveltekit :

- type de build (SPA, SSR, static, etc.)
- création d'alias,
- ajout de plugins qui étendent les capacités Svelte,
- etc.

Nous avons précédemment installé le package `mdsvex`. Mdsvex est justement un plugin qui étend les fonctionnalités de Svelte en offrant la possiblilité de charger aisément des fichiers Markdown et d'en faire des composants : très pratique donc pour le blog que nous nous appretons à developper.

Il faut cependant indiquer à Svelte qu'il faut utiliser le plugin :

#### .gitignore

Ce fichier permet d'indiquer à Git quels fichiers ou répertoires sont à exclure des commits. Par défaut on retrouve `node_modules` puisqu'on ne veut généralement pas publier les dépendances (celles-ci sont déjà indiquées dans `package.json`) ou bien les fichiers sensibles `.env` qui contiennent souvent des clés (tokens) d'authentification que l'on ne veut surtout pas partager sur github.

#### README.md

Fichier markdown redonnant les commandes de base pour lancer un serveur de développement et builder l'application.

Si le projet est publié sur Github ou GitLab, ce fichier servira de description du projet tant qu'il est laissé à la racine du projet.

#### jsconfig.json

Un fichier qui permet de configurer certaines particularités syntaxique de Javascript. Par exemple on peut choisir de mettre un ';' à la fin de chaque ligne d'un fichier .js. Si nous avions utilisé Typescript un superset de Javascript, il y aurait eu un fichier tsconfig.js (ou.ts à revérifier).

On modifie généralement peu ce fichier, seuelement dans des cas bien précis. Même si les informations qu'il contient ne sont pas critique, une mauvaise modifications peut quand même détériorer l'exeprience utilisateur (erreurs qui apparaissent sans raison, problèmes d'imports, etc.)
