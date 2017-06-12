const gulp = require('gulp');
const exec = require('child_process').exec;

gulp.task('default', cb => {
  exec(
    'react-native bundle --platform ios --dev false --entry-file reactProject1/index.ios.js --bundle-output ./bin/reactProject1/reactProject1.jsbundle && react-native bundle --platform ios --dev false --entry-file reactProject2/index.ios.js --bundle-output ./bin/reactProject2/reactProject2.jsbundle',
    (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    }
  );
});
