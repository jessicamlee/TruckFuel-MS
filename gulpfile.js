const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const concat = require('gulp-concat');

function build_css() {
    return src('./src/styles/**/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('./build/styles/'));
}

function build_js() {
    return src([
            './src/scripts/jquery-min.js', 
            './src/scripts/gsap-min.js', 
            './src/scripts/MotionPathPlugin-min.js', 
            './src/scripts/scroll-lock.js', 
            './src/scripts/burger-menu.js', 
            './src/scripts/banner-anim.js', 
            './src/scripts/gsap-anim.js', 
            './src/scripts/main.js',])
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(concat({ path: 'main.js' }))
        .pipe(sourcemaps.write())
        .pipe(dest('./build/scripts/'));
}

function watchTasks() {
    watch('./src/styles/**/*.scss', build_css);
    watch('./src/scripts/**/*.js', build_js);
}

exports.default = series(build_css, build_js, watchTasks);