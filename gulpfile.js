'use strict';
const gulp = require('gulp');
const fs = require('fs');
const esformatter = require('esformatter');


gulp.task('watcher', () => {

    gulp.watch('./src/*.js', function (event) {
        //console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        let str = fs.readFileSync(event.path).toString();
        let output = esformatter.format(str);

        fs.writeFileSync(event.path, output);
    });

})