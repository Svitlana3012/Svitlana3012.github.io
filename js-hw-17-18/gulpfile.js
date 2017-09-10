'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rigger = require('gulp-rigger');
const autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var cssnano = require('gulp-cssnano');
var del = require('del');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var imagemin = require('gulp-imagemin');
const gulpPngquant = require('gulp-pngquant');

var paths = {
    src: {
        html: 'src/*.html',
        css: 'src/scss/**/*.scss',
        js: 'src/js/**/*.js',
        fonts: 'src/fonts/**/*.*',
        img: 'src/img/**/*.+(png|svg|jpg|gif)'
    },
    dist: {
        html: 'dist/',
        css: 'dist/css',
        js: 'dist/js',
        fonts: 'dist/fonts',
        img: 'dist/img'
    },
    clean: './dist'
};

var serverConfig = {
    server: {
        baseDir: './dist'
    },
    host: 'localhost',
    port: 9000,
    logPrefix: 'NASA',
    notify: false
}

gulp.task('bundleHtml', function() {
    return gulp.src(paths.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(paths.dist.html))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('bundleCss', function() {
    return gulp.src(paths.src.css)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('main.css'))
        .pipe(cssnano())
        .pipe(gulp.dest(paths.dist.css))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('bundleJs', function() {
    return gulp.src(paths.src.js)
        .pipe(concat('main.js'))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist.js))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('bundleFonts', function() {
    return gulp.src(paths.src.fonts)
        .pipe(gulp.dest(paths.dist.fonts))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('bundleImg', function() {
    return gulp.src(paths.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [gulpPngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(paths.dist.img))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('webServer', function() {
    browserSync(serverConfig);
});

gulp.task('watch', function () {
    gulp.watch(paths.src.html, ['bundleHtml']);
    gulp.watch(paths.src.css, ['bundleCss']);
    gulp.watch(paths.src.js, ['bundleJs']);
    gulp.watch(paths.src.fonts, ['bundleFonts']);
    gulp.watch(paths.src.img, ['bundleImg']);
});

gulp.task('cleanDist', function() {
  return del.sync(paths.clean);
});

gulp.task('start', ['cleanDist', 'bundleHtml', 'bundleCss', 'bundleJs', 'bundleFonts', 'bundleImg','webServer', 'watch']);