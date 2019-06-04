const { src, dest, series } = require('gulp');
const rename = require("gulp-rename");
const color = require('gulp-color');

function mvIndex(cb) {
    console.log (color('gulp renameIndex (long story)', 'GREEN'));
    return src('./build/index.html', {allowEmpty: true})
            .pipe(rename('react.html'))
            .pipe(dest('./build'))
}
exports.mvIndex = mvIndex;

function copyBuild(cb) {
    console.log (color('gulp copyBuild', 'GREEN'));
    return src('build/**/*')
            .pipe(dest('firebase/build'));
}
exports.copyBuild = copyBuild;

exports.deploy = series(mvIndex, copyBuild);