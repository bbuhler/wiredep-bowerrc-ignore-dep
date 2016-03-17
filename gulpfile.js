const gulp= require('gulp');

const wiredep= require('wiredep').stream;
const del= require('del');

gulp.task('clean', () => del('./dist'));

gulp.task('default', ['clean'], () => gulp.src('index.html')
    .pipe(wiredep({ exclude: [/jquery/, /bootstrap/] }))
    .pipe(gulp.dest('./dist'))
);
