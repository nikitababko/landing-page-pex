module.exports = function (gulp, plugins) {
    return async function () {
        gulp.src("./src/css/index.css")
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.cssmin())
            .on("error", console.error.bind(console))
            .pipe(plugins.sourcemaps.write("./"))
            .pipe(gulp.dest("./build/css/"));
    };
};
