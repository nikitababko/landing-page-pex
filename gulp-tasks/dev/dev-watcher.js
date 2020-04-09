module.exports = function (gulp, plugins) {
    return async function () {
        gulp.watch("./src/*.html");
        gulp.watch("./src/less/**/*.less", gulp.parallel("dev-less"));
        gulp.watch(["./src/js/*js", "!./src/js/index.js"], gulp.parallel(gulp.series(["clean-js", "dev-script"])));
        gulp.watch("./src/img/**/*");
    };
};
