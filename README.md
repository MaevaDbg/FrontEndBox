FrontEndBox
===========
> FrontEndBox est une coquille HTML/CSS/JS servant de base au développement front des sites


## Prérequis
> Avant de commencer à travailler avec cette coquille, il est nécessaire d'avoir quelques outils et leurs dépendances installés sur votre ordinateur

* [SASS](http://sass-lang.com/install)
* [COMPASS](http://compass-style.org/install/)
* [Grunt](http://gruntjs.com/getting-started)
* [Bower](http://bower.io/)

## Installation
> Voici les différentes étapes à effectuer pour récupérer le projet et l'installer sur votre poste

1.Récupérer le dépot distant dans un de vos répertoires
`git clone git@github.com:MaevaDbg/FrontEndBox.git`
2. Définir les librairies javascript utilisées dans le fichier bower.json
3. Lancer un `bower install` en ligne de commande pour installer les différentes librairies dans le dossier js/libs/
4. Ensuite il faut modifier le fichier Gruntfile.js dans _integration pour pouvoir compiler les fichiers des différentes librairies que vous avez importées.  
   Ajouter les chemins relatifs vers les fichiers javascript dans la variable jsSrc
`//Liste des fichiers js importés  
var jsSrc = [  
'../js/libs/jquery/dist/jquery.min.js',  
'../js/libs/fancybox/source/jquery.fancybox.pack.js'  
]`
5. `npm install`
6. Lancer `grunt`


## Librairies

* [Pure](http://purecss.io/)
* [Jquery](https://github.com/jquery/jquery)
* [Fancybox](https://github.com/fancyapps/fancyBox)
* [Flexslider](https://github.com/woothemes/FlexSlider)
* [FitText](https://github.com/davatron5000/FitText.js)

## Ressources

* [http://www.alsacreations.com/tuto/lire/1609-bower-pour-les-nuls.html](http://www.alsacreations.com/tuto/lire/1609-bower-pour-les-nuls.html)
* [http://www.grafikart.fr/tutoriels/javascript/bower-474](http://www.grafikart.fr/tutoriels/javascript/bower-474)
* [http://www.k3z.fr/blog/post/5/automatisation-bower-grunt](http://www.k3z.fr/blog/post/5/automatisation-bower-grunt)
* [http://scotch.io/bar-talk/a-simple-guide-to-getting-started-with-grunt](http://scotch.io/bar-talk/a-simple-guide-to-getting-started-with-grunt)

