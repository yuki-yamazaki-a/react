var gulp        = require('gulp');
var jscompile = require('./gulpfiles/jscompile');
var csscompile = require('./gulpfiles/csscompile');

gulp.task('browserify',function(){
    return jscompile(false);
});

gulp.task('watchify',function(){
    return jscompile(true);
});

gulp.task('css',function(){
    return csscompile();
});

gulp.task('build', ['browserify', 'css']);
gulp.task('default', ['build', 'css']);
