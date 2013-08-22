module.exports = function (grunt) {
    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        jshint: {
            files: [
                'app/scripts/**/*.js',
                'test/spec/**/*.js',
                'test/specRunner.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        clean: {
            app: {
                files: [{
                    dot: true,
                    src: ['.tmp']
                }]
            },
            dist: {
                files: [{
                    dot: true,
                    src: ['.tmp', 'dist']
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'app',
                    dest: 'dist',
                    src: [
                        //'images/{,*/}*.{jpg,png}',
                        'fonts/*',
                        'lib/*',
                        'templates/*'
                    ]
                }]
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: 'dist/images'
                }]
            }
        },
        requirejs: {
            dist: {
                options: {
                    baseUrl: 'app/scripts',
                    out: 'dist/scripts/main.js',
                    mainConfigFile: 'app/scripts/main.js',
                    include: 'main',
                    optimize: 'uglify',
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/styles/main.css': [
                        'app/styles/{,*/}*.css',
                        '.tmp/styles/{,*/}*.css'
                    ]
                }
            }
        },
        bower: {
            all: {
                rjsConfig: 'app/scripts/main.js'
            }
        },
        mocha_phantomjs: {
            all: ['test/index.html']
        },
        compass: {
            options: {
                sassDir: 'app/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: 'app/images',
                javascriptsDir: 'app/scripts',
                fontsDir: 'app/fonts',
                importPath: 'vendor',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false
            },
            app: {
                options: {
                    debugInfo: true
                }
            },
            dist: {
                options: {
                    environment: 'production'
                }
            }
        },
        watch: {
            compass: {
                files: ['app/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:app']
            }
        }
    });

    grunt.registerTask('build', [
        'jshint',
        'mocha_phantomjs',
        'clean:dist',
        'requirejs:dist',
        'compass:dist',
        'cssmin',
        'imagemin',
        'copy:dist'
    ]);

    grunt.registerTask('test', [
        'jshint',
        'mocha_phantomjs'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'mocha_phantomjs',
        'compass:app'
    ]);

};