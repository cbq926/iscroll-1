module.exports = function (grunt) {

  "use strict";

  grunt.initConfig({

    jshint: {
      dist: {
        src: [ "dist/iscroll-debug.js" ]
      },
      grunt: {
        src: [ "Gruntfile.js" ]
      },
      modules: {
        src: [
          "src/lib/utils.js",
          "src/methods/handleEvent.js",
          "src/methods/reset.js",
          "src/methods/refresh.js",
          "src/methods/resetPosition.js",
          "src/methods/scroll.js",
          "src/methods/destroy.js",
          "src/methods/enable.js",
          "src/methods/disable.js",
          "src/methods/_resize.js",
          "src/methods/_start.js",
          "src/methods/_move.js",
          "src/methods/_end.js",
          "src/methods/_translate.js",
          "src/methods/_transitionEnd.js",
          "src/methods/_transitionTime.js"
        ]
      }
    },

    concat: {
      build: {
        src: [
          "src/intro.js",
          "src/iscroll.js",
          "src/lib/utils.js",
          "src/methods/handleEvent.js",
          "src/methods/reset.js",
          "src/methods/refresh.js",
          "src/methods/resetPosition.js",
          "src/methods/scroll.js",
          "src/methods/destroy.js",
          "src/methods/enable.js",
          "src/methods/disable.js",
          "src/methods/_resize.js",
          "src/methods/_start.js",
          "src/methods/_move.js",
          "src/methods/_end.js",
          "src/methods/_translate.js",
          "src/methods/_transitionEnd.js",
          "src/methods/_transitionTime.js",
          "src/outro.js"
        ],
        dest: ".build/iscroll.js",
        options: {
          banner: "/*!\n * iScroll v5.0.0 pre-alpha-use-it-and-kittens-die ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org\n * Released under MIT license, http://cubiq.org/license\n */\n"
        }
      }
    },

    transport: {
      all: {
        files: [{
          cwd: '.build',
          src: '*.js',
          dest: 'dist'
        }]
      }
    },

    uglify: {
      all: {
        files: {
          "dist/iscroll.js": ['dist/iscroll.js']
        },
        options: {
          sourceMap: "dist/iscroll.map",
          beautify: {
            ascii_only: true
          }
        }
      }
    },

    watch: {
      files: [ "<%= jshint.grunt.src %>", "<%= jshint.modules.src %>" ],
      tasks: "default"
    }
  });

  // Load grunt tasks from NPM packages
  grunt.loadNpmTasks("grunt-cmd-transport");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat");

  // Default grunt
  grunt.registerTask("default", [ "concat", "transport", "jshint", "uglify" ]);
};
