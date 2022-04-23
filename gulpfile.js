var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('testConcat', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
});
