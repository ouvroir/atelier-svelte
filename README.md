# Atelier Sveltekit de l'Ouvroir d'histoire de l'art et de muséologie numériques

## Table de matière

- [Atelier Sveltekit de l'Ouvroir d'histoire de l'art et de muséologie numériques](#atelier-sveltekit-de-louvroir-dhistoire-de-lart-et-de-muséologie-numériques)
	- [Table de matière](#table-de-matière)
	- [Les frameworks pour le développement d'application web](#les-frameworks-pour-le-développement-dapplication-web)
	- [Svelte et Sveltekit](#svelte-et-sveltekit)
	- [Node et NPM](#node-et-npm)
			- [L'environnement d'éxecution Node](#lenvironnement-déxecution-node)
			- [NPM, le package manager de Node](#npm-le-package-manager-de-node)
		- [Vite, un environnement de développement et de production](#vite-un-environnement-de-développement-et-de-production)
	- [Sveltkit](#sveltkit)
		- [Architecture d'un projet](#architecture-dun-projet)
			- [package.json](#packagejson)
				- [Les scripts](#les-scripts)
				- [Les "devDependencies"](#les-devdependencies)
				- [Les "dependencies"](#les-dependencies)
			- [Le dossier node\_modules](#le-dossier-node_modules)
			- [package-lock.json](#package-lockjson)
			- [.npmrc](#npmrc)
			- [svelte.config.js](#svelteconfigjs)
			- [.gitignore](#gitignore)
			- [README.md](#readmemd)
			- [jsconfig.json](#jsconfigjson)
	- [Pour le reste](#pour-le-reste)



## Les frameworks pour le développement d'application web

Les frameworks modernes s'inscrivent dans une logique de **composant** qui tend à encapsuler les mécanismes d'interaction (défini en javascript) et de présentation (défini en HTML et CSS) d'un élément graphique d'une application dans le même fichier. L'enjeux est avant tout la réutilisabilité du code (et donc des composants), la facilité de maintenance et de modification ainsi que la facilité de développement.

Deux exemples qui nous permettront d'illustrer très brièvement les problèmatiques qu'adressent les frameworks web : 
- l'approche traditionnel pour le développement d'un blog,
- une approche plus moderne mais sans framework. 
  
Un autre enjeu particulièrement important est celui de la réactivité ([**reactivity**)(https://www.youtube.com/watch?v=AdNJ3fydeao&pp=ygURc3ZlbHRlIHJlYWN0aXZpdHk%3D)] dans les applications web. De fait, les applications modernes web sont de plus en plus complexes dans leur architecture. Cette complexité est due notamment au fait que les différents éléments graphiques d'une page sont potentiellement interconnectés et que, par conséquent, la mise à jour de l'état d'un composant doit entrainer la mise à jour d'un second composant. Ce principe de réactivité est fondamental puisque si, comme on l'a dit plus haut, il est nécessaire de ségmenter une application en composants, cela implique de facto qu'il faut penser la manière dont ces composants interagissent. 

Afin d'adresser ce paradigme d'encapsulation/de modularité du code, les frameworks utilisent généralement leur propre langage spécialisé qui permet de regrouper des logiques d'interaction et de présentation dans un même fichier (*.svelte* dans notre cas) et également d'utiliser certains mécanismes spécifiques au frameworks (on verra que c'est notamment le cas pour le mécanisme de réactivité dans Svelte).


## Svelte et Sveltekit

[*Svelte*](https://svelte.dev/) est un **component framework**, c'est-à-dire un ensemble d'outils pour faciliter le développement de composants et d'interfaces grâce à des outils pour :

- le développement de composants modulaires et réutilisables,
- le templating avec vérification des types de données, 
- la gestion des effets de bords (réactivité des composants)
- gestion du cycle de vie d'un composant (y a-t-il des fonctions au moment de l'initialisation/la destruction d'un composant ?), 
- stores (qui sont des états indépendants des composants mais intergissant avec eux)
- ...

[*SvelteKit*](https://kit.svelte.dev/) est un **meta-framework**, c'est-à-dire qu'il subsume Svelte et qu'il introduit des outils qui lui sont propres. Ils outils qu'il introduit ne sont pas destinés spécifiquement à développer des composants (Svelte s'en occupe déjà) mais plutôt à fournir les outils manquant pour le développement d'une appilication complète et ce jusqu'à sa mise en production. Dans le cas de Sveltekit sont ajoutés des outils de :

- routing (gestion des chemins de l'application - les URIs qui composent le site)
- système d'API (pour les requêtes de données par exemples)
- de hooks divers (fonctions permettant de prendre la main sur certains mécanismes de l'applications)
- build (compression du projet pour diminuer sa taille lors de sa mise en production)
- types d'application à builder : SPA (Single-Page Application) ou MPA (Multi-Page Application) ? SSR (Server-Side Rendering), SSG (Static Site Generation)

Des exemples similaires à Svelte et Sveltkit : [ReactJS](https://fr.legacy.reactjs.org/) (framework) et [NextJS](https://nextjs.org/) (meta-framework autour de React)

## Node et NPM

#### L'environnement d'éxecution Node

Node est un environnement d'exécution. Alors que le langage Javascript est traditionnellement exécuté par un navigateur, Node a rendu possible l'exécution de JS dans d'autres environnements comme par exemple sur des serveurs (donc sans navigateur). Un des enjeux du développement de Node est l'unification des pratiques : il est plus simple pour les développeur.euse.s d'utiliser un seul de langage de programmation qu'ils.elles peuvent utiliser à la fois pour développer le client (*frontend*) mais également la partie serveur de l'application (*backend*).

Des outils similaires à Node existent même si Node reste le plus courramenent utilisé : [Deno](https://deno.com/) (du créateur de Node, Ryan Dahl), [Bun](https://bun.sh/)


#### NPM, le package manager de Node

NPM (Node Package Manager) : c'est l'outil de gestion de package de Node, l'équivalent de pip pour le langage Python. Les packages Javascript disponibles sont visibles sur le NPM Registery. Du au nombre important de dépendances que contiennent les projets et librairies JS en général, il est nécessaire de disposer d'un outil qui ne permettent pas seulement d'installer un package depuis un dépôt (le NPM registery dans notre cas), mais également de veiller à installer les dépendances et également de veiller aux problèmes de compatibilités des outils.

Là encore d'autres outils similaire à NPM peuvent être utilisés : yarn est également souvent utilisé, Bun propose son propre outil de gestion des packages. À noter que ces différents outils sont assez compatibles entre eux.


### Vite, un environnement de développement et de production

[Vite](https://vitejs.dev/) est un environnement de développement. C'est-à-dire que les outils qu'il met à disposition sont là pour cadrer ou faciliter le développement d'une application, d'un site. Par exemple, il met à disposition des outils de test (Vitest), des outils de rafraichissement rapide (quand le fichier d'un projet est mis à jour, le serveur est rafraichi pour faire apparaitre presque instantanément les modifications). Il met également à disposition des outils de _build_.

Le _build_ : une étape nécessaire pour mettre un site en production. Nos navigateurs ne comprennent pas les langages des frameworks Pour publier un site développé avec un framework il est donc nécessaire de traduire notre code dans une (en fait plusieurs: JS, HTML, CSS) langue que le navigateur peut interpréter. D'autre part, dès lors qu'on travail dans un environnement web moderne, la quantité de code qui permet de faire fonctionner le projet est très importante. Avant de publier un site web, il est important de le compresser au mieux afin de diminieur les temps de chargement des pages du site. En bref, les outils de build comme [Esbuild](https://esbuild.github.io/), utilisé par Vite de manière transparente pour nous, excluent le code et les librairies non utilisées et compressent les fichiers javascript en les réécrivant avec le moins de caractères possible. 


## Sveltkit

Maintenant que nous avons une idée dans l'environnement dans lequel nous allons travailler, installons un projet sveltekit afin de comprendre comme celui-ci est constitué.

Dans un terminal, entrez la commande :

> npm create svelte@latest nom-du-projet

On va choisir le projet squelette, on ne va ajouter aucune des options de test etc.

> cd nom-du-projet
> npm install

> npm run dev

Grâce à cette dernière commande, on a normalement réussi à lancer notre premier serveur de développement.

> Note : on pourrait se demander comment nous avons pu lancer notre première application Sveltekit sans l'avoir *buildée* au préalble : c'est que quand on lance une application en mode *dev* (`npm run dev`), c'est le serveur de développement (Vite) qui s'occupe de traduire à la volée les fichiers de notre projet. On peut d'ailleurs voir dans l'inspecteur de notre navigateur que c'est bien du HTML qui est interprété et non du svelte. 

Prenons maintenant le temps de regarder comment le projet est structuré. Cela nous permettra de mettre en évidence la présence de différents outils qui constitue notre environnement de travail.

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

C'est l'un des fichiers les plus importants de notre projet. Il contient les informations concernant les dépendances de notre projets et les instructions pour l'exécuter en développement ou pour en créer un build. Sans lui, il est presque impossible de reconstruire le projet.

Regardons plus en détail l'objet JSON qui le constitue.

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

Les "devDependencies" forment une partie des dépendances de notre projet. Comme son nom l'indique, ces dépendances ne sont utiles que durant les différentes phases de développement et de build. Cela veut également dire que le code de ces dépendances ne se retrouvera pas dans le _bundle_ (c.a.d le code JS compressé) de notre application.

On voit par exemple que le package `svelte` est seulement utile au moment du développement. Et de fait, cela rejoint notre première description du framework : il n'est là que pour donner un cadre à notre travail, à fournir des outils pour faciliter la conception d'interface. Une fois que le site est buildé et mis en production, c'est du code écrit en Javascript, HTML et CSS purs que l'on retrouve.

Il n'en reste donc pas moins que ces dépendances sont tout aussi importantes que les autres puisque sans elles il ne sera pas possible de lancer ou builder notre application.

##### Les "dependencies"

Lors de l'initialisation de notre projet sveltekit, aucune mention de ces "dependencies", c'est que pour le moment aucune dépendance n'existe.

Ces dépendances sont nécessaire au fonctionnement de l'application et feront donc partie du bundle final.


#### Le dossier node_modules

Lorsque nous avons initialisé le projet sveltekit, il nous a été demandé d'exécuter la commande `npm install` (on pourrait également utiliser `npm i` pour aller plus vite).

Lorsque cette commande est exécuter dans le terminal, on demande à NPM de regarder lire les dépendances explicitées dans le fichier `package.json` et les places dans le dossier `node_modules` à la racine du projet. Un coup d'oeil dans ce dossier montre que même si nous n'avons pas installé de packages par nous même, les dépendances de départ reposent elles sur de très nombreux packages.

Pour installer un package, on utilise encore la commande `npm install` mais cette fois-ci en indiquant le nom de package que l'on souhaite un installer (on pourrait indiquer les noms de plusieurs packages). Installons le Mdsvex qui nous servira à manipuler et afficher des fichiers markdown :

> npm install mdsvex

À l'exécution de la commande, on peut vérifier que NPM a bien créé une dépendance dans notre `package.json`. Cependant, comme c'est le cas de `svelte` ou de `vite`, `mdsvex` n'est utile qu'au moment du développement tandis que, pour le moment, elle inscrite comme étant une dépendance en tout temps. Réctifions le problème en retirant `mdsvex` des dépendances et en la réinstallant dans les `devDependencies` :

> npm remove mdsvex
> npm install -D mdsvex

Ici, c'est le paramètre `-D` qui indique à NPM que la dépendance que nous souhaitons installer est placer dans les devDependencies. Si l'on voulait expliciter qu'une dépendance est utile en tout temps on pourrait utiliser le paramètre `-S`.

Reste à noter qu'en aucun cas il ne faut modifier les fichiers à l'intérieur de `node_modules` pour la simple et bonne raison que toute modification apportée à l'intérieur du dossier ne sera pas apparente dans le prochain commit. Il est également peut conseillé de supprimer les dépendances en supprimant directement un ligne depuis le fichier `package.json`.


> Comment savoir si une dépendance n'est utile que pour la phase de développement ? On se demander si oui ou non un package est nécessaire au fonctionnement du site mais le plus simple est encore d'aller voir la documentation du package.


#### package-lock.json

Moins important que `package.json` ce fichier comporte l'arbre de toutes les dépendances du projet, incluant les dépendances indiquées dans le `package.json` et celles dans `node_modules`. Ce fichier est rarement voire jamais modifier à la main. Il est généré par NPM à chaque fois que l'on exécute la commande `npm install`.

> Pro tip (lol): il se peut qu'à un moment vous rencontriez des conflits de version entre les dépendances que NPM ne peut résourdre seul. Avant de s'énerver, on peut essayer de supprimer le fichier `package-lock.json` ainsi que le répertoire `node_modules` et relancer la commande `npm install` pour réinstaller toutes les dépendances. Dans la grande majorité des cas, cela permet de résoudre le problème.

#### .npmrc

Ce fichier permet de customiser le comportement de NPM. Il n'a pas besoin d'être modifié.

#### svelte.config.js

Un autre fichier important. Alors que la plupart des fichiers et répertoires que nous avons vu auparavant sont communs à tous les projets node, celui-ci est (de manière évidente) unique à Svelte.
Il permet notamment de configurer de nombreux aspects du comportement de Svelte et sveltekit :

- type de build (SPA, SSR, static, etc.) grâce aux différents `adapter`
- création d'alias pour faciliter l'emploi des chemins relatifs au sein du projet,
- ajout de plugins qui étendent les capacités Sveltekit,
- etc.

Nous avons précédemment installé le package `mdsvex`. Mdsvex est justement un plugin qui étend les fonctionnalités de Svelte en offrant la possiblilité de charger aisément des fichiers Markdown et d'en faire des composants : très pratique donc pour le blog que nous nous appretons à developper.

Il faut cependant indiquer à Svelte qu'il faut utiliser le plugin. Cela se fait dans le fichier `svelte.config.js` en ajoutant les attributs extensions et preprocess. Ainsi, on indique à svelte que pour traiter les `.md` et `.svx`, il faut faire appelle au plugin Mdsvex :

```javascript
import adapter from "@sveltejs/adapter-auto";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },
  extensions: [".svelte", ".svx", ".md"],
  preprocess: [mdsvex({ extensions: [".svx", ".md"] })],
};

export default config;
```


#### .gitignore

Ce fichier permet d'indiquer à Git quels fichiers ou répertoires sont à exclure des commits. Par défaut on retrouve `node_modules` puisqu'on ne veut généralement pas publier les dépendances (celles-ci sont déjà indiquées dans `package.json`) ou bien les fichiers sensibles `.env` qui contiennent souvent des clés (tokens) d'authentification que l'on ne veut surtout pas partager sur github.

#### README.md

Fichier markdown redonnant les commandes de base pour lancer un serveur de développement et builder l'application.

Si le projet est publié sur Github ou GitLab, ce fichier servira de description du projet tant qu'il est laissé à la racine du projet (à condition de ne pas changer le nom de fichier).

#### jsconfig.json

Un fichier qui permet de configurer certaines particularités syntaxique de Javascript. Par exemple on peut choisir de mettre un ';' à la fin de chaque ligne d'un fichier .js. Si nous avions utilisé Typescript un superset de Javascript, il y aurait eu un fichier tsconfig.js (ou.ts à revérifier).

On modifie généralement peu ce fichier, seuelement dans des cas bien précis. Même si les informations qu'il contient ne sont pas critique, une mauvaise modifications peut quand même détériorer l'exeprience utilisateur (erreurs qui apparaissent sans raison, problèmes d'imports, etc.)


## Pour le reste 

Ces notes ne contiennent pas d'informations précises concernant l'utilisation de Svelte et Sveltekit. C'est que la documentation est très bien faite et qu'il est bien plus pertinent de la parcourir que de redire ici ce qui est déjà bien expliqué. 

Il y a donc la [documentation de Svelte](https://svelte.dev/docs/introduction) et celle de [Sveltekit](https://kit.svelte.dev/docs/introduction). Les [tutos interactifs de Svelte](https://learn.svelte.dev/tutorial/introducing-sveltekit) sont également très bien pour découvrir apprendre les concepts de Svelte et Sveltekit 


