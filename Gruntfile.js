module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'app/**/*.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        watch: {
            scripts: {
                files: ['app/**/*.js'],
                tasks: ['jshint']
            },
            html: {
                files: ['app/**/*.html'],
                options: {
                    livereload: true
                }
            },
            less: {
                files: ['app/style/*.less'],
                tasks: ['less:development'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'app',
                    //keepalive: true,
                    livereload: true
                }
            }
        },

        less: {
            development: {
                options: {
                    //paths: ['assets/css']
                },
                files: {
                    'app/style/main.css': 'app/style/main.less'
                }
            },
            production: {
                options: {
                    paths: ['assets/css'],
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                        //new (require('less-plugin-clean-css'))(cleanCssOptions)
                    ],
                    modifyVars: {
                        imgPath: '"http://mycdn.com/path/to/images"',
                        bgColor: 'red'
                    }
                },
                files: {
                    'path/to/result.css': 'path/to/source.less'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    //grunt.registerTask('default', ['uglify']);
    grunt.registerTask('serve', ['connect', 'watch']);

};