const gulp = require('gulp');

const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');

gulp.task('images', () => {
  return gulp.src('img/**/*.{png,jpg,gif}')
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.jpegtran({ progressive: true })
    ]))
    .pipe(gulp.dest('src/static/api/img'));
});

gulp.task('svg', () => {
  return gulp.src('img/**/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('static/img'));
});

gulp.task('sprite', () => {
  return gulp.src('img/{icon,logo}-*.svg')
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('static/img'));
});
