module.exports = function(grunt) {
	
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		 uglify: {
		 	options: {
		 		banner: '/*! <%=pkg.name %> <%=grunt.template.today("yyyy-mm-dd") %> */\n'
		 	},
		 	dev: {
		 		files: {

				}	
		 	}
			
		},
		less: {
			options: {
				paths: ["assets/css"]
			},
			dev: {
				files: {
					"web/css/scouts.css": "web/less/*.less"
				}	
			}
		},
		connect: {
			server: {
				options: {
					port: 8082,
					base: './web'
				}
			}
		},
		watch: {
			dev_less: {
				files: ['web/less/*.less'],
				tasks: ['less']
			}, 
			live: {
				files: [
                    'web/index.html',
                    'web/cmpt/*',
                    'web/config/*',
                    'web/css/*',
                    'web/js/*',
                    'web/tmpl/*'

                ],
				options: { livereload: true }	
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['less']);
	grunt.registerTask('server', ['default', 'connect', 'watch']);

};
