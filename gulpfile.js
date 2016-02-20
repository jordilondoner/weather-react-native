const gulp = require('gulp');
const prettify = require('gulp-js-prettify');

gulp.task('prettify', function() {
    gulp.src('./src/*.js')
        .pipe(prettify({collapseWhitespace: true}))
        .pipe(gulp.dest('./src'))
});