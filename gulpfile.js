var gulp = require('gulp')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
gulp.task('testConcat', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'))
        .pipe(uglify()) //压缩文件
        .pipe(rename({suffix:'.min'})) //更改后缀
        .pipe(gulp.dest('./dist/'))
});
