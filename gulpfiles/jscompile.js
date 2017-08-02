var gulp        = require('gulp');
var browserify  = require('browserify');
var watchify    = require('watchify');
var babelify    = require('babelify');
var uglify      = require('gulp-uglify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var glob = require('glob');

module.exports = function jscompile(is_watch){

  glob('src/javascript/+(pc|sp)/entrypoint/**/*.js',function(err,files){
    files.map(function(entry){
      var bundler;
      if(is_watch){
        bundler = watchify(browserify(entry,{paths: ['./node_modules','./src/javascript']}).transform(babelify, {"presets": ["es2015", "react"]}));
      }else{
        bundler = browserify(entry,{paths: ['./node_modules','./src/javascript']}).transform(babelify, {"presets": ["es2015", "react"]});
      }
      bundler.on('update',function(){
        bundle();
      });

      function bundle(){
          return bundler
          .bundle()
          .on("error", function (err) { console.log("Error : " + err.message); })
          .pipe(source(entry.replace(/^src\/javascript\/(sp|pc)\/entrypoint\//,'')))
          //.pipe(buffer())
          //.pipe(uglify())
          .pipe(gulp.dest('static/javascript'));
      }

      bundler.on('log',function(message){
        console.log( message );
      });

      return bundle();
    });
  });
}
