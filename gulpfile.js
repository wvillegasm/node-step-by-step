'use strict';
const
    gulp = require('gulp'),
    pug = require('gulp-pug'),
    babel = require('gulp-babel'),
    dir = {
        src: 'src',
        dist: 'dist',
        nm: 'node_modules'
    },
    files = {
        CSS: [
            `${dir.nm}/responsimple/responsimple.min.css`,
            `${dir.dist}/css/styles.css`
        ],
        mCSS: 'styles.min.css',
        JS: [
            `${dir.dist}/js/scripts.js`
        ],
        mJS: 'scripts.min.js',
        fonts: [
            `${dir.nm}/font-awesome/fonts/*.*`
        ],
        statics: [
            `${dir.nm}/humans.txt`,
            `${dir.nm}/sitemap.xml`
        ]
    },
    opts = {
        pug: {
            pretty: true,
            locals: {
                title: 'Node.js course',
                files: files
            }
        },
        es6: {
            presets: ['es2015']
        }
    };


gulp.task('pug', ()=> {
    gulp
        .src(`${dir.src}/pug/*.pug`)
        .pipe(pug(opts.pug))
        .pipe(gulp.dest(dir.dist));

});

gulp.task('es6', ()=>{
    gulp
        .src(`${dir.src}/es6/*.js`)
        .pipe(babel(opts.es6)).
        pipe
});
