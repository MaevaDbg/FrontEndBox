module.exports = function(grunt) {

  //Compile Sass to CSS using Compass
  grunt.loadNpmTasks('grunt-contrib-compass');

  //Concaténation des fichiers JS/CSS
  grunt.loadNpmTasks('grunt-contrib-concat');

  //Minification JS
  grunt.loadNpmTasks('grunt-contrib-uglify');
    //Minification des fichiers css
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //Surveille les changements de fichiers
  grunt.loadNpmTasks('grunt-contrib-watch');


  //Liste des fichiers js importés
  var jsSrc = [
    'librairies/jquery/dist/jquery.min.js',
    'librairies/bootstrap/dist/js/bootstrap.min.js',
    'scripts/scripts.js',
  ]
  , jsDist = '../js/scripts.js'

  //Liste des fichiers css importés
  var cssSrc = [ 
    'librairies/bootstrap/dist/css/bootstrap.css'
  ]
  , cssDist = '../css/plugins.css'


  // Configuration de Grunt
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    //Config Compass
    compass: {
      compile: {
        options: {
          sassDir: 'sass',
          cssDir: '../css',
          imagesDir: '../img',
          javascriptsDir: '../js',
          fontsDir: '../css/fonts',
          outputStyle: 'expanded',
          httpPath: '../',
        }
      }
    },
    //Config de la concaténation des fichiers
    concat: {
      options: {
        separator: '/',
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
      compile: {
        src: '../js/scripts.js',
        dest: '../js/scripts-min.js'
      }
    },
    //Config minification CSS
    cssmin: {
      minify: {
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
        tasks: ['concat:css', 'cssmin:minify']
      }
    }

  });

  // Les tâches sont enregistrées ici
  grunt.registerTask('default', ['prod', 'watch']);
  grunt.registerTask('prod', ['compass:compile','concat:js','concat:css','uglify:compile','cssmin:compile']);

};