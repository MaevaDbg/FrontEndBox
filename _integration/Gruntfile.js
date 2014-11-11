module.exports = function(grunt) {

  /**
   * DEPENDENT PLUGINS
   */
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

  /**
   * CONFIGURATION
   */
  //Liste des fichiers js minifiés qui vont être concaténés
  var jsSrc = [
    'librairies/jquery/dist/jquery.min.js',
    'librairies/bootstrap/dist/js/bootstrap.min.js',
    'scripts/scripts.js',
  ]
  , jsDist = '../js/scripts.js'

  //Liste des fichiers js minifiés qui vont être concaténés
  var jsUglifiedSrc = [
    'librairies/jquery/dist/jquery.min.js',
    'librairies/bootstrap/dist/js/bootstrap.min.js',
    'scripts/scripts.min.js',
  ]
  , jsUglifiedDist = '../js/scripts.js'

  //Liste des fichiers css des librairies
  var cssSrc = [ 
    'librairies/bootstrap/dist/css/bootstrap.min.css',
    'sass/css/main.css'
  ]
  , cssDist = '../css/styles.css'


  // Configuration de Grunt
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    //Config Compass
    compass: {
      compile: {
        options: {
          sassDir: 'sass',
          cssDir: 'sass/css',
          imagesDir: '../img',
          javascriptsDir: '../js',
          fontsDir: '../css/fonts',
          outputStyle: 'expanded',
          httpPath: '.',
        }
      }
    },
    //Config de la concaténation des fichiers
    concat: {
      options: {
        separator: grunt.util.linefeed,
        sourceMap: true
      },
      js: {
        src: jsSrc,
        dest: jsDist
      },
      jsUglified: {
        src: jsUglifiedSrc,
        dest: jsUglifiedDist
      },
      css: {
        src: cssSrc,
        dest: cssDist
      }
    },
    //Config de la minification JS
    uglify: {
      options: {
        preserveComments: 'false',
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        sourceMap : true,
        sourceMapIncludeSources : true,
        sourceMapIn : 'librairies/jquery/dist/jquery.min.map'
      },
      compile: {
        files: {
          'scripts/scripts.min.js': ['scripts/scripts.js']
        }
      }
    },
    //Config minification CSS
    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      minify: {
        files: {
          '../css/styles.css': ['../css/styles.css']
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


  /**
   * BUILD
   */
  // Par defaut la commande grunt compile les fichiers SASS, concatene les fichiers javascript 
  // et CSS et regarde si ça bouge
  grunt.registerTask('default', ['compass:compile','concat:js','concat:css','watch']);
  // La commande grunt prod compile les fichiers SASS, minifie les fichiers javascript et les concatene, 
  // concatene les fichiers CSS et minifie le tout
  grunt.registerTask('prod', ['compass:compile','uglify:compile','concat:jsUglified','concat:css','cssmin:minify']);

};