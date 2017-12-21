var gulp = require('gulp');
var minify = require('gulp-minify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var gls = require('gulp-live-server');

// server
gulp.task('server', function() {
  var server = gls.static(['examples', 'dist'], 3000);
  server.start();
});

// minifiers
gulp.task('minifyjs', function() {
  gulp.src('./src/js/*.js')
    .pipe(minify({
      ext: {
        min: '.min.js'
      }
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('minifycss', function() {
  gulp.src('./src/css/*.css')
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['minifyjs', 'minifycss']);
gulp.task('serve', ['server']);