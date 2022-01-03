let gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass')(require('sass')),
    concat = require('gulp-concat'),
    minCSS = require('gulp-clean-css');


function server() {
    browserSync.init({
       server: {baseDir: 'app/'},
        notify: true,
        online: false,
        tunnel: true,
    });

}
function scripts(){

}
function buildStyles() {
    $css_name = 'style.css';
    return gulp.src([
        'app/sass/**/*.sass',
    ])

        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(minCSS({
            level: 1,
        }))
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.stream());


}

function startwatch(){
    // gulp.watch(['app/js/**/*.js'], scripts);
    gulp.watch(['app/sass/**/*.sass'], buildStyles);
    gulp.watch(['app/**/*.html']).on('change', browserSync.reload)
    gulp.watch(['app/js/**/*.js']).on('change', browserSync.reload)
}

exports.browser = server;
exports.scripts = scripts;
exports.minCSS = minCSS;
exports.default = gulp.parallel(server, buildStyles, startwatch);

