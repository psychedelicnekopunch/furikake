const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();


function build(callback) {
	gulp.src('src/style.scss')
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe($.sass({
			// includePaths : [require("bourbon").includePaths],
			// [outputStyle] Type: String Default: nested Values: nested, expanded, compact, compressed
			outputStyle  : 'nested',
		}).on('error', $.sass.logError))
		.pipe($.autoprefixer({
			browsers: ['last 1 versions']
		}))
		.pipe($.sourcemaps.write(''))
		.pipe(gulp.dest('./demo'))
	callback()
}


function watch(callback) {
	gulp.watch('src/**/*.scss', build)
}


gulp.task(watch)

gulp.task('default', (callback) => {
	build(() => {
		callback()
	})
})
