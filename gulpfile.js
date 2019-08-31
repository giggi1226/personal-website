const gulp = require('gulp'),
      gulpWatch = require('gulp-watch'),
      sass = require('gulp-sass'),
      liveServer = require('live-server');


const sassCompile = () => 
          gulp
          .src('./scss/**/*.scss')
          .pipe(sass({
            outputStyle: 'compressed'
          }))
          .on('error', sass.logError)
          .pipe(gulp.dest('./assets'));

gulp.task('sass', sassCompile);
gulp.task('sass:watch', () => { 
  sassCompile();
  gulpWatch('./scss/**/*.scss', 
            sassCompile);
});

gulp.task('serve', () => 
          liveServer.start({
  port: 9000,
  open: false
}));