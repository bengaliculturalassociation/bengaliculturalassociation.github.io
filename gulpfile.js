var gulp = require('gulp');
var imageResize = require('gulp-image-resize');

images = ['./assets/img/index/1.jpg',
			'./assets/img/index/2.jpg',
			'./assets/img/index/3.jpg',
			'./assets/img/index/4.jpg',
			'./assets/img/index/5.jpg',
			'./assets/img/index/6.jpg',
]

gulp.task('resize', function () {
  gulp.src(images)
    .pipe(imageResize({
      width : 300,
      height : 300,
      crop : true,
      upscale : true
    }))
    .pipe(gulp.dest('gulpimages'));
});