module.exports = function(grunt) {

  //Compass : Minification/Concaténation SASS
  grunt.loadNpmTasks('grunt-contrib-compass');
  //Concaténation des fichiers JS/CSS
  grunt.loadNpmTasks('grunt-contrib-concat');
  //Minification JS
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //Surveille les changements de fichiers
  grunt.loadNpmTasks('grunt-contrib-watch');
  //Minification des fichiers css
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //Liste des fichiers js importés
  var jsSrc = [
    'librairies/jquery/dist/jquery.min.js', 
    'librairies/fancybox/source/jquery.fancybox.pack.js',
    'librairies/flexslider/jquery.flexslider.js',
    'librairies/FitText.js/jquery.fittext.js',
    'scripts/scripts.js',
  ]
  , jsDist = '../js/plugins.js'

  //Liste des fichiers css importés
  var cssSrc = [ 
    'librairies/fancybox/source/jquery.fancybox.css',
    'librairies/flexslider/flexslider.css'
  ]
  , cssDist = '../css/plugins.css'


  // Configuration de Grunt
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    //Config Compass
    compass: {
      compile: {
        options: {
          config: 'config.rb'
        }
      }
    },
    //Config de la concaténation des fichiers
    concat: {
      options: {
        separator: ';',
      },
      js: {
        src: jsSrc,
        dest: jsDist
      },
      css: {
        src: cssSrc,
        dest: cssDist
      }
    },
    //Config de la minification JS
    uglify: {
      options: {
        separator: ';'
      },
      compile: {
        src: '../js/plugins.js',
        dest: '../js/plugins-min.js'
      }
    },
    //Config minification CSS
    cssmin: {
      options: {
        banner: '/* My minified css file */'
      },
      compile: {
        files: {
          '../css/styles-min.css': ['../css/main.css', '../css/plugins.css']
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      styles: {
        files: '**/*.scss', // tous les fichiers Sass de n'importe quel dossier
        tasks: ['compass:compile']
      },
      scripts: {
        files: '**/*.js', // tous les fichiers JavaScript de n'importe quel dossier
        tasks: ['concat:js']
      },
      css: {
        files: cssSrc,
        tasks: ['concat:css']
      }
    }

  });

  // Les tâches sont enregistrées ici
  grunt.registerTask('default', ['dev', 'watch'])
  grunt.registerTask('dev', ['concat:js','concat:css','compass:compile']);
  grunt.registerTask('prod', ['dev','uglify:compile','cssmin:compile']);

};