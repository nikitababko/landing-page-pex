module.exports = function (gulp, plugins) {
    return async function () {
        gulp.src("./src/less/index.less")
            .pipe(plugins.sourcemaps.init())
            .pipe(
                plugins.less({
                    errorLogToConsole: true,
                })
            )
            .on("error", console.error.bind(console))
            .pipe(plugins.autoprefixer(["last 15 versions", "> 1%", "ie 7"], { cascade: true }))
            .pipe(plugins.sourcemaps.write("./"))
            .pipe(gulp.dest("./src/css/"));
    };
};
