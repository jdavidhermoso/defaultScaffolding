module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dev: {
        files: {
          'app/styles/main.css': 'app/styles/main.scss'
        }
      }
    },
    sasslint: {
      options: {
        configFile: '.sass-lint.yml',
        outputFile: 'app/styles/sass-lint-report.xml'
      },
      target: ['app/styles/**/*.scss']
    },
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

  grunt.registerTask('default', ['sasslint', 'sass']);
};
