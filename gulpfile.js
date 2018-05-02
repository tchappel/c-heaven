const gulp   = require('gulp'),
      csso   = require('gulp-csso'),
      sass   = require('gulp-sass'),
      del    = require('del');

// Delete all CSS files
gulp.task('css:clean', function() {
  return del('public/css/*.css', { force: true });
});

// Compile CSS
gulp.task('css:compile', ['css:clean'], function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(csso())
    .pipe(gulp.dest('public/css'));
});

gulp.task('build', ['css:compile']);

gulp.task('develop', ['build'], function() {
  gulp.watch('src/scss/*', ['css:compile']);
});
