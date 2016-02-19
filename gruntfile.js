module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify: {
			my_target: {
				files:{
					'js/script.min.js': ['_/components/js/*.js']
				}
			}
		},
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				}
			}
		},
		watch: {
			options: { livereload: true },
			scripts:{
				files: ['js/app.js', 'js/controllers.js', 'js/routes.js', 'js/controllers/*.js', 'js/directives/*.js', '_/components/js/*.js', 'images/svg/*.svg'],
				tasks: ['uglify']
			},
			sass: {
				files: ['_/components/sass/*.scss'],
				tasks: ['compass:dev']
			},
			html: {
				files: ['*.html', 'templates/*.html', 'templates/*/index.html', 'templates/directives/*.html']
			},
			json: {
				files: ['*.json', 'json/*.json']
			}
		}
	})
	grunt.registerTask('default', 'watch');
}