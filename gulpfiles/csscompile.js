var gulp        = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require("gulp-sass-glob");

var SOURCE = 'src/scss/pc/entrypoint/**/*.scss';

module.exports = function csscompile(){
  gulp.src(SOURCE)
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest('static/css'))
}
