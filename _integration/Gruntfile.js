module.exports = function(grunt) {

  //Compass : Minification/Concaténation CSS
  grunt.loadNpmTasks('grunt-contrib-compass');
  //Concaténation des fichiers JS
  grunt.loadNpmTasks('grunt-contrib-concat');
  //Minification JS
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //Surveille les changements de fichiers
  grunt.loadNpmTasks('grunt-contrib-watch')

  //Liste des fichiers js importés
  var jsSrc = [
    '../js/libs/jquery/dist/jquery.min.js', 
    '../js/libs/fancybox/source/jquery.fancybox.pack.js',
    '../js/libs/flexslider/jquery.flexslider.js'
  ]
  , jsDist = '../js/plugins.js'


  // Configuration de Grunt
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    compass: {
      compile: {
        options: {
          config: 'config.rb'
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      compile: {
        src: jsSrc,
        dest: jsDist
      }
    },
    uglify: {
      options: {
        separator: ';'
      },
      compile: {
        src: jsSrc,
        dest: jsDist
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: '**/*.js', // tous les fichiers JavaScript de n'importe quel dossier
        tasks: ['concat:compile']
      },
      styles: {
        files: '**/*.scss', // tous les fichiers Sass de n'importe quel dossier
        tasks: ['compass:compile']
      }
    }

  });

  // Les tâches sont enregistrées ici
  grunt.registerTask('default', ['dev', 'watch'])
  grunt.registerTask('dev', ['concat:compile','compass:compile']);
  grunt.registerTask('prod', ['dev','uglify:compile']);

};