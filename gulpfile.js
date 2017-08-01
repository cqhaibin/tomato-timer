var path = require('path');
var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect',function(){
    connect.server({
        root: './',
        port: 9001
    })
});
