"use strict";const gulp=require("gulp"),sass=require("gulp-sass")(require("sass")),cleanCSS=require("gulp-clean-css"),autoprefixer=require("gulp-autoprefixer"),minify=require("gulp-minify");gulp.task("sass",()=>gulp.src("assets/scss/app.scss").pipe(sass()).pipe(gulp.dest("assets/css"))),gulp.task("minify-css",()=>gulp.src("assets/css/*.css").pipe(cleanCSS()).pipe(gulp.dest("assets/css"))),gulp.task("compress",function(){gulp.src(["*.js","*.mjs"]).pipe(minify()).pipe(gulp.dest("dist"))}),gulp.task("autoprefixer",()=>{gulp.src("assets/css/app.css").pipe(autoprefixer({cascade:!1})).pipe(gulp.dest("assets/css"))}),gulp.task("watch",()=>{gulp.watch("assets/scss/**/*.scss",gulp.series("sass"))}),gulp.task("all",gulp.series("sass","minify-css","compress","watch")),gulp.task("default",gulp.series("all"));