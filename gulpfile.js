var gulp = require('gulp');

// Gulp Plugins
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
//var uglify = require('gulp-uglify');
//var imageMin = require('gulp-imagemin');
//var uncss = require('gulp-uncss');
// var changed = require('gulp-changed');
//var sftp = require('gulp-sftp');

/* ---------------Gulpfile.js--------------- */

// Default Task - Runs with 'gulp' Command
	gulp.task('default', ['watch']);

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

// BrowserSync
	gulp.task('browser-sync', function() {
    	browserSync.init({
        	proxy: "localhost:8080/portfolio/",
        	serveStatic: ['.', 'portfolio/']
        	});
    	});

// Watch Task
	gulp.task('watch', ['sass', 'browser-sync'], function() {
		gulp.watch(["sass/*.scss"], ['sass']);
		gulp.watch(["./*.html"], reload);
		gulp.watch(["./*.php"], reload);
		gulp.watch(["css/*.css"], reload);
	});
 
 /*
// Sftp - Uploads files to hosting provider 
	gulp.task('sftp', function () {
		return gulp.src('src/*')
		.pipe(sftp({
			host: '',
			user: '',
			pass: ''
			port: ''
		}));
	});
*/

/*  
 // Uglify - Minifies JavaScript files
	gulp.task('compress', function() {
  		return gulp.src('lib/*.js')
   		.pipe(uglify())
    	.pipe(gulp.dest('dist'));
	});
*/

/*
// UnCSS - Removes unused CSS selectors 
	gulp.task('uncss', function () {
     	return gulp.src('css/test.css')
        .pipe(uncss({
         html: ['index.html', 'aboutme.html, experiments.html']
	}))
        .pipe(gulp.dest('build_css'));
	});
*/

/*
// ImageMin - Compresses images
	gulp.task('image-compress', function() {
		gulp.src('img/*').pipe(imageMin()).pipe(gulp.dest('img_min/'));
	});
*/
