module.exports = function (grunt) {

  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      dist: {
        src: [ "build/<%= pkg.name %>.js" ]
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
        dest: "build/<%= pkg.name %>.js"
      }
    },

    transport: {
      all: {
        files: [
          {
            cwd: 'build',
            src: '*.js',
            dest: 'dist'
          }
        ]
      }
    },

    uglify: {
      build: {
        src: 'dist/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.js'
      }
    }
  });

  // Load grunt tasks from NPM packages
  grunt.loadNpmTasks("grunt-cmd-transport");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat");

  // Default grunt with transport
  grunt.registerTask("default", [ "concat", "jshint", "transport", "uglify" ]);

  // Build grunt for dev
  grunt.registerTask("build", [ "concat", "jshint", "uglify" ]);
};
