var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

// Init browserSync
gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
	})
})

// Sass compile
gulp.task('sass', function() {
	gulp.src('app/sass/styles.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('app'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

//Watch task
gulp.task('default', ['browserSync', 'sass'], function() {
	gulp.watch('app/sass/**/*.scss',['sass']);
	gulp.watch('app/**/*', browserSync.reload); 
});