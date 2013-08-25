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
                    src: ['.tmp', 'www']
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'app',
                    dest: 'www',
                    src: [
                        //'images/{,*/}*.{jpg,png}',
                        'config.xml',
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
                    dest: 'www/images'
                }]
            }
        },
        requirejs: {
            dist: {
                options: {
                    baseUrl: 'app/scripts',
                    out: 'www/scripts/main.js',
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
                    'www/styles/main.css': [
                        'app/styles/{,*/}*.css',
                        '.tmp/styles/{,*/}*.css'
                    ]
                }
            }
        },
        useminPrepare: {
            options: {
                dest: 'www'
            },
            html: 'app/index.html'
        },
        usemin: {
            options: {
                dirs: ['www']
            },
            html: ['www/{,*/}*.html'],
            css: ['www/styles/{,*/}*.css']
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: '*.html',
                    dest: 'www'
                }]
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
        'htmlmin',
        'useminPrepare',
        'requirejs:dist',
        'compass:dist',
        'cssmin',
        'imagemin',
        'copy:dist',
        'usemin'
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