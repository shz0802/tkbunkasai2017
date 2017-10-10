var gulp = require('gulp');
var sass = require('gulp-sass');
var pleeease = require("gulp-pleeease");
var cmq = require("gulp-combine-media-queries");
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var browserSync = require('browser-sync');
var ejs = require("gulp-ejs");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var fs = require('fs');
var jsonData = JSON.parse(fs.readFileSync("./src/assets/json/data.json","utf8"));

gulp.task('scss', function() {
  gulp.src(["src/assets/scss/**/*.scss","!src/assets/scss/**/_*.scss"])
    .pipe(plumber({
        errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(sass())
    .pipe(pleeease({
        sass: true,
        autoprefixer: true,
        minifier: true,
        mqpacker: true
    }))
    .pipe(gulp.dest("src/assets/css"));
});

gulp.task('browser-sync', function() {
    browserSync({
        notify: false,
        server:{baseDir: "src/"}
    });
});

gulp.task('bs-reload',function(){
    browserSync.reload();
});

gulp.task("ejs",function(){
    gulp.src(["src/ejs/**/*.ejs","!src/ejs/**/_*.ejs"],{base:"src/ejs"})
        .pipe(plumber({
            errorHandler: notify.onError("<%= error.message %>")
        }))
        .pipe(ejs({jsonData:jsonData}))
        .pipe(rename({extname:".html"}))
        .pipe(gulp.dest("src/"));
});

gulp.task('js', function() {
    gulp.src("src/assets/js/*.js")
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest("src/assets/js/min/"));
});

gulp.task("default",["browser-sync"], function() {
	gulp.watch("src/assets/scss/**/*.scss",["scss"]);
	gulp.watch("src/ejs/**/*.ejs", ['ejs']);
	gulp.watch("src/assets/js/*.js", ['js']);
    gulp.watch("src/**/*.html", ['bs-reload']);
    gulp.watch("src/**/*.css", ['bs-reload']);
	gulp.watch("src/**/*.js", ['bs-reload']);
	gulp.watch("src/**/*.json", ['ejs']);
});
