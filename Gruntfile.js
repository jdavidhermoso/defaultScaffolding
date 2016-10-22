module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      dist: {
        options: {
          compress: {
            drop_console: true
          }
        },
        files: {
          'dist/js/main.min.js': ['app/scripts/*.js']
        }
      }
    },
    sass: {
      files: {
        'dist/styles/main.css': 'app/styles/main.scss'
      }
    },
    sasslint: {
      options: {
        configFile: '.sass-lint.yml',
        outputFile: 'app/styles/sass-lint-report.xml'
      },
      target: ['app/styles/**/*.scss']
    },
    cssmin: {
      dist: {
        files: {
          'dist/styles/main.min.css': ['app/styles/*.css']
        }
      }
    },
    watch: {
      files: ['app/styles/**/*.scss','app/scripts/**/*.js',],
      tasks: ['sass','checks','copy']
    },
    jscs: {
      src: "app/scripts/*.js",
      options: {
        config: ".jscsrc",
        fix: false
      }
    },
    jshint: {
      beforeconcat: ['app/scripts/*.js']
    },
    copy: {
      js: {
        files: [
          {expand: true, cwd: 'app/scripts', src: ['**'], dest: 'dist/js'},

        ],
      },
      css: {
        files: [
          {expand: true, cwd: 'app/styles', src: ['*.css'], dest: 'dist/styles'},
        ],
      },
      images: {
        files: [
          {expand: true, cwd: 'app/images', src: ['**'], dest: 'dist/images'},
        ],
      },
      fonts: {
        files: [
          {expand: true, cwd: 'app/fonts', src: ['**'], dest: 'dist/fonts'},
        ]
      },
      other: {
        files: [
          {
            expand: true,
            cwd: 'app',
            src: ['favicon.ico', 'apple-touch-icon.png', 'index.html', 'robots.txt'],
            dest: 'dist'
          },
        ],
      }
    },
    clean: {
      js: ['dist/js/*.js', '!dist/js/r/*.min.js'],
      css: ['dist/styles/*.css', '!dist/styles/*.min.css']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sass-lint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-jscs");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('dev', ['check:js', 'check:css', 'cssmin', 'copy', 'watch']);
  grunt.registerTask('dist', ['check:js', 'check:css', 'clean:js', 'clean:css']);
  grunt.registerTask('check:js', ['jscs', 'jshint']);
  grunt.registerTask('check:css', ['sass', 'sasslint']);
  grunt.registerTask('checks', ['check:js', 'check:css']);
  grunt.registerTask('default', ['dev']);
}
