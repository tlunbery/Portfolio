var gulp = require('gulp');
// var sass = require('gulp-ruby-sass');
// var liveReload = require('gulp-livereload');
var prefix = require('gulp-autoprefixer');
// var uglify = require('gulp-uglify');
// var imageMin = require('gulp-imagemin');
// var gulpIf = require('gulp-if');
// var size = require('gulp-size');
// var git = require('gulp-git');
// var notify = require('gulp-notify');
// var purify = require('gulp-uncss');
// var validate = require('gulp-w3cjs');

// Default Task - Runs with 'gulp' command
	// gulp.task('default', ['compile', 'watch']);
	gulp.task('default', function () {
	return gulp.src('**/css/')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('/dist'));
});


// // Watch Task - Watches HTML and SASS
// gulp.task('watch', function() {
// 	var server = liveReload();
// 	gulp.watch('scss/*.scss', ['compile']);
// 	gulp.watch('*.html'), ['']);
// });

// // UnCSS - Removes unused CSS selectors 
// gulp.task('uncss', function () {
//     return gulp.src('main.css')
//         .pipe(uncss({
//             html: ['index.html', 'posts/**/*.html']
//         }))
//         .pipe(gulp.dest('build_css'));
// });


// // Compile Task - Compiles SASS
// 	gulp.task('compile', function() {
// 		gulp.src('/sass/**/*.scss').pipe(sass()).pipe(prefix('last 2 versions')).pipe(gulp.dest('css/')).pipe(liveReload());
// });

// // Compress Task - Compresses images
// 	gulp.task('compress', function() {
// 		gulp.src('/img/*').pipe(imageMin()).pipe(gulp.dest('img_min/'));
// });

// // Minify Task - Removes white space in JavaScript
// 	gulp.task('minify', function() {
//   	gulp.src('/js/*.js').pipe(uglify()).pipe(gulp.dest('/build/js/'));
// });




