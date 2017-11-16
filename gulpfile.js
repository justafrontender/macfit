'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();

var sequence = require('run-sequence');
var del = require('del');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
var ghPages = require('gulp-gh-pages');

gulp.task('build', function(fn) {
  sequence(
    'clean',
    'copy',
    'style',
    'images',
    'svg',
    'sprite',
    fn
  );
});

gulp.task('deploy', function() {
  return gulp.src('build/**/*')
    .pipe(ghPages());
});

gulp.task('serve', function() {
  server.init({
    server: 'build/',
    notify: false,
    open: false,
    cors: true,
    ui: false
  });

  gulp.watch('sass/**/*.{scss,sass}', ['style']);
  gulp.watch('*.html', ['html:update']);
});

gulp.task('style', function() {
  gulp.src('sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: [
          'last 2 versions',
          'iOS 8'
        ]
      })
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});

gulp.task('copy', function() {
  return gulp.src(
    [
      'fonts/**/*.{woff,woff2}',
      'js/**',
      '*.html'
    ],
    {
      base: '.'
    }
  )
    .pipe(gulp.dest('build'));
});

gulp.task('images', function() {
  gulp.src('img/**/*.{png,jpg,gif}')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest('build/img'));
});

gulp.task('svg', function() {
  gulp.src('img/**/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('build/img'))
});

gulp.task('sprite', function() {
  gulp.src('img/{icon,logo}-*.svg')
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'));
});

gulp.task('clean', function() {
  return del('build');
});

gulp.task('html:copy', function() {
  return gulp.src('*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('html:update', ['html:copy'], function(done) {
  server.reload();
  done();
});