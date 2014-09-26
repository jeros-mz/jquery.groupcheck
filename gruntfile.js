module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				report: 'min'
			},
			jrx: {
				options:{
					sourceMap : true,
					sourceMapName:'<%= pkg.path.plugin %>/jquery.groupcheck.min.map'
				},
				files : {
					'<%= pkg.path.plugin %>/jquery.groupcheck.min.js' : [
						'<%= pkg.path.plugin %>/jquery.groupcheck.js'
					]
				}
			}
		},
		jsdoc : {
			dist : {
				src : ['<%= pkg.path.plugin %>/jquery.groupcheck.js'],
				options : {destination : 'doc'}
			}
		}
	});
	
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	// Default task(s).
	grunt.registerTask('default', ['concat', 'uglify', 'jsdoc']);
	
	grunt.registerTask('doc', ['jsdoc']);
	
	grunt.registerTask('min', ['uglify']);
	
	// grunt.registerTask('concat', ['concat']);
	
	// grunt.registerTask('less', ['less']);
};