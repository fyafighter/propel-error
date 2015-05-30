'use strict';

var gulp = require('gulp');
var protractor = require('gulp-protractor').protractor;
require('jumpstart-angular-test').testTasks();


gulp.task('e2e', function () {
  return gulp.src('./test/e2e/**/*_test.js')
    .pipe(protractor({
      configFile: './test/protractor.config.js'
    }));
});

gulp.task('default', ["test.ui"]);
