var gulp        = require('gulp');
var jscompile = require('./gulpfiles/jscompile');

gulp.task('browserify',function(){
    return jscompile(false);
});

gulp.task('watchify',function(){
    return jscompile(true);
});

gulp.task('build', ['browserify']);
gulp.task('default', ['build']);