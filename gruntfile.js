module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'expanded'
          },
          files: [{                         // Dictionary of files
            expand: true,
            cwd: 'styles',
            src: ['*.scss'],       // 'destination': 'source'
            dest: 'build',
            ext: '.css'
          }]
        }
      },
      concat: {
        client: {
          files: {
            'build/client.js': ['src/client/**']
          },
        },
        server: {
          files: {
            'build/server.js': ['src/server/**']
          },
        },
      },
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          src: 'build/server.js',
          dest: 'build/server.min.js'
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    // Load the plugin that provides the "concat" task.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Default task(s).
    grunt.registerTask('default', ['concat']);
  };