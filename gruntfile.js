module.exports = function(grunt) {
  grunt.initConfig ({
    sass: {
      dist: {
      	options: { 
      		includePaths: require('node-bourbon').includePaths
      	},
      	files: {
      		'public/stylesheets/application.css' : 'sass/application.scss'
      	}
      }
  },
  clean: ["public/stylesheets/application.css", "public/scripts/*.*"],
  copy: {
    main: {
      files: [
      {
        src: "src/*.js",
        dest: "public/scripts/",
        expand: true,
        filter: "isFile",
        flatten: true
      },
      {
        src: "node_modules/bootstrap-treeview/dist/*.js",
        dest: "public/scripts/",
        expand: true,
        filter: "isFile",
        flatten: true
      }]
    }
  },
  watch: {
  	source: {
  		files: ['sass/**/*.scss', 'views/**/*.pug'],
  		tasks: ['sass'],
  		options: {
  			livereload: true
  		}
  		}
  	}
});
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask("all", ["clean", "copy", "sass", "watch"]);
  grunt.registerTask('default', ['all']);
};