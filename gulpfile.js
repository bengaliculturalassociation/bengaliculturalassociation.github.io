var gulp = require('gulp');
var imageResize = require('gulp-image-resize');

images = ['./assets/img/index/1.jpg',
			'./assets/img/index/2.jpg',
			'./assets/img/index/3.jpg',
			'./assets/img/index/4.jpg',
			'./assets/img/index/5.jpg',
			'./assets/img/index/6.jpg',
]

imagesEvents = ['./assets/img/events/2.jpg',
			'./assets/img/events/3.jpg',
			'./assets/img/events/4.jpg',
			'./assets/img/events/5.jpg',
			'./assets/img/events/6.jpg',
			'./assets/img/events/7.jpg',
			'./assets/img/events/8.jpg',
]

gulp.task('resize', function () {
  gulp.src(imagesEvents)
    .pipe(imageResize({
      height : 300,
      width : 500,
      crop : true,
      upscale : true
    }))
    .pipe(gulp.dest('gulpimages'));
});