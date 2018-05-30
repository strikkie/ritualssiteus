module.exports = function (grunt) {
    require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);
    var webpack = require("webpack");
    var webpackConfig = require("./webpack.config.js");

    grunt.initConfig({
        copy: {
            main: {
                files: [{
                    cwd: 'src/',
                    src: 'index.html',
                    dest: 'build/',
                    expand: true
                },
                {
                    cwd: 'src/images',
                    src: '*.png',
                    dest: 'build/',
                    expand: true
                },
                {
                    cwd: 'src/images',
                    src: '*.jpg',
                    dest: 'build/',
                    expand: true
                }],
                options: {
                    processContentExclude: [
                        '**/*.{png, gif, jpg, ico, psd, svg}'
                    ],
                    process: function (content, srcpath) {
                        return content.replace(/<script src="http:\/\/localhost:8080\/webpack-dev-server.js"><\/script>/g, "");
                    },
                }
            },
        },
        webpack: {
            options: webpackConfig,
            build: {
                // configuration for this build
                plugins: webpackConfig.plugins.concat(
                    new webpack.DefinePlugin({
                        "process.env": {
                            // This has effect on the react lib size
                            "NODE_ENV": JSON.stringify("production")
                        }
                    }),
                    new webpack.optimize.DedupePlugin(),
                    new webpack.optimize.UglifyJsPlugin()
                )
            },
            "build-dev": {
                devtool: "sourcemap",
                debug: true
            }
        },
        watch: {
            app: {
                files: ["app/**/*", "web_modules/**/*"],
                tasks: ["webpack:build-dev"],
                options: {
                    spawn: true
                }
            }
        },
        "webpack-dev-server": {
            options: {
                webpack: webpackConfig,
                contentBase: "./build"
            },
            start: {
                keepAlive: true,
                webpack: {
                    devtool: "eval",
                    debug: true
                },
                watch: true
            }
        }
    });

    // The development server (the recommended option for development)
    grunt.registerTask("default", ["copy:main", "webpack-dev-server:start"]);

    // Build and watch cycle (another option for development)
    // Advantage: No server required, can run app from filesystem
    grunt.registerTask("dev", ["copy:main", "webpack:build-dev", "watch:app"]);

    // Production build
    grunt.registerTask("build", ["copy:main", "webpack:build"]);
};

