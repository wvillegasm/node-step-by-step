"use strict";
const
    gulp = require('gulp'),
    pug = require('gulp-pug'),
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
        }
    };


gulp.task('pug', ()=> {
    gulp
        .src(`${dir.src}/pug/*.pug`)
        .pipe(pug(opts.pug))
        .pipe(gulp.dest(dir.dist));

});
