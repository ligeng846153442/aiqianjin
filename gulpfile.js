var gulp = require("gulp");//本地安装gulp所用到地方

//复制HTML文件
gulp.task("copyhtml",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\aiqianjin1"));
	gulp.src("reg.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\aiqianjin1"));
	gulp.src("login.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\aiqianjin1"));
	gulp.src("app.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\aiqianjin1"));
	gulp.src("shopping.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\aiqianjin1"));
});
//复制img文件
gulp.task("copyimg",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\aiqianjin1\\img"));
});
//复制css文件
gulp.task("copycss",function(){
	gulp.src("css/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\aiqianjin1\\css"));
});
//复制js文件
gulp.task("copyjs",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\aiqianjin1\\js"));
});

gulp.task("bulid",["copyhtml","copycss","copyjs","copyimg",]);

gulp.task("watchall",function(){
	gulp.watch("*.html",["copyhtml"]);
	gulp.watch("img/**/*",["copyimg"]);
	gulp.watch("css/**/*",["copycss"]);
	gulp.watch("js/**/*",["copyjs"]);
});
