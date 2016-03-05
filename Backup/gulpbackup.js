var gulp = require('gulp');

// Gulp Plugins
var sass = require('gulp-sass');
var liveReload = require('gulp-livereload');
var prefix = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var imageMin = require('gulp-imagemin');
var uncss = require('gulp-uncss');
var changed = require('gulp-changed');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var php = require('gulp-connect-php');

// Default Task - Runs with 'gulp' Command
	gulp.task('default', ['watch', 'phpserver']);

// Compile SASS and Autoprefixer into CSS
	gulp.task('sass', function() {
		gulp.src('sass/*.scss')
		.pipe(sass({outputStyle:'compact'}))
		.pipe(prefix({
		browsers: ['last 3 version'],
		cascade: false
		}))
		.pipe(gulp.dest('css/'));
	});

// PHP Server
	gulp.task('phpserver', function(){
		php.server({base: 'build', port: 8010, keepalive: true});
		});

// BrowserSync
	gulp.task('browser-sync', function() {
    	browserSync.init(["css/*.css"], {
        	server: {
        		baseDir: "./php/",
        		notify: false
        	}
    	});
	});
	
// Watch Task
	gulp.task('watch', ['sass', 'browser-sync'], function() {
		gulp.watch(["sass/*.scss"], ['sass']);
		gulp.watch(["./*.html"], reload);
		gulp.watch(["./*.php"], reload);
});
  












// // UnCSS - Removes unused CSS selectors 
// 	gulp.task('uncss', function () {
//     	return gulp.src('css/test.css')
//         .pipe(uncss({
//             html: ['index.html', 'aboutme.html, experiments.html']
//         }))
//         .pipe(gulp.dest('build_css'));
// });

// // Compress Task - Compresses images
// 	gulp.task('image-compress', function() {
// 		gulp.src('img/*').pipe(imageMin()).pipe(gulp.dest('img_min/'));
// });
