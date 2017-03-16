const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babelify = require('babelify');
const exorcist = require('exorcist');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
	browserify({
			entries: './src/linq.js',
			standalone: 'Enumerable',
			debug: true,
			insertGlobalVars: {
				global: function() {
					return 'typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}';
				}
			}
		})
		.transform(babelify.configure({
			presets: ['es2015', 'stage-3'],
			sourceMaps: true
		}))
		.bundle()
		.pipe(exorcist('./dist/linq.js.map', '', '', './dist/'))
		.pipe(source('linq.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./dist/'))
		.pipe(rename('linq.min.js'))
		.pipe(sourcemaps.init({
			loadMaps: true
		}))
		.pipe(uglify({
			// mangle: {
			// 	except: ['require', 'exports', 'module']
			// },
			compress: true
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/'));
});