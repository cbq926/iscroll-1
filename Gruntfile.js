module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      iscroll: {
        dest: 'build/iscroll.js',
        src: [
          'src/open.js',
          'src/utils.js',
          'src/core.js',
          'src/default/*.js',
          'src/move/*.js',
          'src/close.js'
        ]
      },
      lite: {
        dest: 'build/iscroll-lite.js',
        src: [
          'src/open.js',
          'src/utils.js',
          'src/core.js',
          'src/lite/*.js',
          'src/move/handleEvent.js',
          'src/default/_initEvents.js',
          'src/default/_translate.js',
          'src/default/getComputedPosition.js',
          'src/close.js'
        ]
      },
      zoom: {
        dest: 'build/iscroll-zoom.js',
        src: [
          'src/open.js',
          'src/utils.js',
          'src/core.js',
          'src/default/*.js',
          'src/zoom/*.js',
          'src/close.js'
        ]
      },
      iphone: {
        dest: 'build/iscroll-iphone.js',
        src: [
          'src/open.js',
          'src/utils.js',
          'src/core.js',
          'src/move/handleEvent.js',
          'src/default/indicator.js',
          'src/default/transitionProp.js',
          'src/default/_init.js',
          'src/iphone/*.js',
          'src/close.js'
        ]
      }
    },

    jshint: {
      dist: ['build/*.js']
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
        files: {
          'dist/iscroll.js': ['dist/iscroll.js'],
          'dist/iscroll-lite.js': ['dist/iscroll-lite.js'],
          'dist/iscroll-iphone.js': ['dist/iscroll-iphone.js'],
          'dist/iscroll-zoom.js': ['dist/iscroll-zoom.js']
        }
      }
    },

    watch: {
      files: [ 'src/**/*.js' ],
      tasks: 'concat'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-cmd-transport');

  grunt.registerTask('iscroll', ['concat:iscroll']);
  grunt.registerTask('lite', ['concat:lite']);
  grunt.registerTask('zoom', ['concat:zoom']);
  grunt.registerTask('iphone', ['concat:iphone']);
  grunt.registerTask('dist', ['concat', 'jshint', 'transport', 'uglify']);
};