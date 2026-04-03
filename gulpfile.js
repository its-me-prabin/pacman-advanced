const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const removeCode = require('gulp-remove-code');
const terser = require('gulp-terser');
const csso = require('gulp-csso');
const babel = require('gulp-babel');

const isProduction = process.env.NODE_ENV === 'production';

// Compile SCSS to CSS
function styles() {
  let stream = gulp
    .src('app/style/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'));

  if (isProduction) {
    stream = stream.pipe(csso());
  }

  return stream.pipe(gulp.dest('build'));
}

// Process and concatenate JavaScript
function scripts() {
  let stream = gulp
    .src('app/scripts/**/*.js')
    .pipe(removeCode({ production: isProduction }))
    .pipe(babel({
      presets: [['@babel/preset-env', { targets: { browsers: ['last 2 versions', 'ie >= 11'] } }]],
    }))
    .pipe(concat('app.js'));

  if (isProduction) {
    stream = stream.pipe(terser({
      compress: true,
      mangle: true,
    }));
  }

  return stream.pipe(gulp.dest('build'));
}

// Copy HTML
function copyHtml() {
  return gulp.src('index.html').pipe(gulp.dest('build'));
}

// Copy favicon
function copyFavicon() {
  return gulp.src('favicon.ico').pipe(gulp.dest('build'));
}

// Copy graphics
function copyGraphics() {
  return gulp.src('app/style/graphics/**/*', { nodir: true }).pipe(gulp.dest('build/app/style/graphics'));
}

// Copy audio
function copyAudio() {
  return gulp.src('app/style/audio/**/*', { nodir: true }).pipe(gulp.dest('build/app/style/audio'));
}

// Watch files for changes
function watchFiles() {
  gulp.watch('app/style/**/*.scss', styles);
  gulp.watch('app/scripts/**/*.js', scripts);
  gulp.watch('index.html', copyHtml);
  gulp.watch('favicon.ico', copyFavicon);
  gulp.watch('app/style/graphics/**/*', copyGraphics);
  gulp.watch('app/style/audio/**/*', copyAudio);
}

// Build task
const build = gulp.parallel(styles, scripts, copyHtml, copyFavicon, copyGraphics, copyAudio);

// Watch task
exports.watch = watchFiles;
exports.build = build;
exports.default = build;
