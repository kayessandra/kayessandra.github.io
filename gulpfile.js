// const deploy = require('gulp-gh-pages');
const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const browsersync = require("browser-sync").create();

function css() {
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browsersync.stream());
}

// function deploy() {
// 	return gulp.src("./app/**/*")
//     .pipe(deploy())
// }

function watch() {
	browsersync.init({
	    server: {
		  baseDir: ['.'],
		  index: ['index.html'],
		  // directory: true
	    },
	});

	gulp.watch('app/scss/**/*.scss', css);
	gulp.watch('**/*.html').on('change', browsersync.reload);
	// gulp.watch('app/js/**/*.js', browsersync);
}

exports.css = css;
exports.watch = watch;