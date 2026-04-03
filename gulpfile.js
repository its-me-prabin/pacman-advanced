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

// Watch files for changes
function watchFiles() {
  gulp.watch('app/style/**/*.scss', styles);
  gulp.watch('app/scripts/**/*.js', scripts);
}

// Clean output directory
async function clean() {
  const del = require('del');
  await del(['build/**/*']);
}

// Build task
const build = gulp.series(
  styles,
  scripts,
);

// Watch task
exports.watch = watchFiles;
exports.build = build;
exports.clean = clean;
exports.default = build;
