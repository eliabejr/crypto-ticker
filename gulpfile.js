const gulp          = require("gulp");
const sass          = require("gulp-sass");
const notify        = require("gulp-notify");

// Compile SASS Files
gulp.task("compile-sass", function () {
	return gulp.src("./src/Assets/scss/style.scss")
			.pipe(sass())
			.on("error", notify.onError({title:"Error at compile CSS", message:"<%= error.message %>"}))
			.pipe(gulp.dest("./src/Assets/css"))
});

gulp.task("watch", function() {
    gulp.watch("./src/Assets/scss/**/*",    ["compile-sass"]);
});

gulp.task("default",["compile-sass","watch"]);
