const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const sequence = require('run-sequence');
const del = require('del');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');

gulp.task('build', fn => {
  sequence(
    'clean',
    'style',
    'images',
    'svg',
    'sprite',
    fn
  );
});

gulp.task('style', () => {
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
    .pipe(gulp.dest('static/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('static/css'));
});

gulp.task('images', () => {
  gulp.src('img/**/*.{png,jpg,gif}')
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.jpegtran({ progressive: true })
    ]))
    .pipe(gulp.dest('static/img'));
});

gulp.task('svg', () => {
  gulp.src('img/**/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('static/img'));
});

gulp.task('sprite', () => {
  gulp.src('img/{icon,logo}-*.svg')
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('static/img'));
});

gulp.task('clean', () => {
  return del('static');
});
