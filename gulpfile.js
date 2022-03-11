const gulp = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));
const watch = require("gulp-watch");
const concat = require("gulp-concat");

gulp.task('sass', function(done){
    gulp.src('src/scss/*.scss')
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(concat("main.css"))
        .pipe(gulp.dest("dist/content-scripts/css/"));
    done();
});
gulp.task("manifest", function(done){
    gulp.src("manifest.json")
        .pipe(gulp.dest("dist/"));
    done();
})

gulp.task("default", gulp.parallel("sass", "manifest"));