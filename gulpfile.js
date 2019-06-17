const { src, dest, series } = require('gulp');
const color = require('gulp-color');

function copyBuild(cb) {
    console.log (color('gulp copyBuild', 'GREEN'));
    return src('build/**/*')
            .pipe(dest('firebase/build'));
}
exports.copyBuild = copyBuild;

exports.deploy = series(mvIndex, copyBuild);