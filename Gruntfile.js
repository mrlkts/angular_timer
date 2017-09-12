module.exports = function(grunt){
    // Project configuration.

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy:{
            js: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        filter: 'isFile',
                        src: ['src/js/main.js'],
                        dest: 'dist/js'
                    }
                ]
            }
        },
        watch: {
            scripts: {
                files: ['src/js/main.js','src/scss/main.scss'],
                tasks: ['copy','sass']
            },
            options: {
                reload: true
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/css/main.css': 'src/scss/main.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['copy', 'sass']);
};