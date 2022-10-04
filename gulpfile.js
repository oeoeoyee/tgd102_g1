const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

// rename 
const rename = require('gulp-rename');
//js uglify
const uglify = require('gulp-uglify');
// css minify
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
// 圖片
const imagemin = require('gulp-imagemin');
// 降轉 babel es6 - > es5
const babel = require('gulp-babel');
// 清除舊檔案
const clean = require('gulp-clean');


//1.html
function includeHTML() {
    return src('*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./dist'));
}

exports.html =  includeHTML;


// 2.sass


function sassstyle(){ 
    return src('sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))

    // 壓縮 更改附檔名
    .pipe(cleanCSS())
    .pipe(rename({ extname: ".min.css" }))
    // 更改附檔名
    
    .pipe(sourcemaps.write())
    .pipe(dest('dist/css')) 
}

exports.style = sassstyle

//3. js

function  Jsminify(){
    return src('js/*.js')
    .pipe(uglify())
    // .pipe(rename({
    //     extname: '.min.js' 
    // }))
    .pipe(dest('dist/js'))
}

exports.uglify = Jsminify;

// 降轉 babel es6 - > es5
function babel5() {
    return src('js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest('dist/js'));
}

exports.js_update = babel5;

// *打包PHP.搬家 無壓縮!!!
function php_move(){
    return src(['php/*.*' , 'php/**/*.*']).pipe(dest('dist/php'))
}


//4.搬家
function img_move(){
    return src(['images/*.*' , 'images/**/*.*']).pipe(dest('dist/images'))
 }
 
 // mini images
function min_images(){
    return src(['images/*.*' , 'images/**/*.*' , 'images/**/**/*.*'])
    .pipe(imagemin())
    .pipe(dest('dist/images'))
}

exports.images_online = min_images; 


// 清除舊檔案
function clear() {
    return src('dist' ,{ read: false ,allowEmpty: true })//不去讀檔案結構，增加刪除效率  / allowEmpty : 允許刪除空的檔案
    .pipe(clean({force: true})); //強制刪除檔案 
}

exports.cls = clear;


 // 瀏覽器同步
 function browser(done) {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html"
        },
        port: 3000
    });
    watch(['*.html' , 'layout/*.html'] , includeHTML).on('change' ,reload)  
    watch(['sass/*.scss' , 'sass/**/*.scss'] , sassstyle).on('change' ,reload)
    watch(['images/*.*' , 'images/**/*.*'] , img_move).on('change' , reload)
    watch(['php/*.*' , 'php/**/*.*'] , php_move).on('change' , reload)
    watch('js/*.js' ,Jsminify).on('change' ,reload)
    done();
}

//執行
exports.default = series(parallel(includeHTML , sassstyle ,img_move ,php_move , Jsminify) ,browser)

// 上線
exports.online = series(clear, parallel(includeHTML, sassstyle, img_move,php_move, babel5));