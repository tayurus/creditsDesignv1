var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var urlAdjuster = require('gulp-css-url-adjuster');

var srcPath = {
    phpSrc: "index.php",
    foldersPhpSrc: ["./classes/**/*.php","./query/**/*.php","./php/**/*.php"],
    imgSrc: ["**/*.png", "**/*.jpg", "**/*.svg"],
    cssSrc: ["**/*.css"],
    jsSrc: ["**/*.js", "!gulpfile.js", "!node_modules/**/*.js"],
}

var distSrc = {
    dist: "../dist/",
    distImg: "../dist/img/"
}

gulp.task('build', function() {
    gulp.src(srcPath.phpSrc).pipe(gulp.dest(distSrc.dist));

    gulp.src(srcPath.foldersPhpSrc, {
        base: "./"
    }).pipe(gulp.dest(distSrc.dist));

    gulp.src(srcPath.imgSrc).pipe(rename({
        dirname: ''
    })).pipe(gulp.dest(distSrc.distImg));

    gulp.src(srcPath.cssSrc).pipe(rename({
        dirname: ''
    })).pipe(concat("styles.css")).pipe(urlAdjuster({
        replace: ['../img/', 'img/'],
    })).pipe(gulp.dest(distSrc.dist));

    gulp.src(srcPath.jsSrc).pipe(rename({
        dirname: ''
    })).pipe(concat("script.js")).pipe(gulp.dest(distSrc.dist));

});

var srcArr = ["index.php", "**/*.png", "**/*.jpg", "**/*.svg", "**/*.css", "**/*.js", "!gulpfile.js", "!node_modules/**/*.js", "./classes/**/*.php","./query/**/*.php"]


gulp.task('watch', function() {
    gulp.watch(srcArr, ['build']);
});
