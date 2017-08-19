import * as utilities from './utilities';

/*
 * Default specfific package options
 */
let packageOptions = {
    postcssUrls: {
        rules: [{
            from: 'font/summernote',
            to: '../fonts/summernote/summernote'
        }]
    },
    uglify: {
        options: {
            compress: {
                drop_console: true
            }
        }
    },
    modernizr: {
        'options': [],
        'tests': ['formattribute'],
        'crawl': false
    }
};


/*
 * Default gulp options
 */
let gulpOptions = {
    src: {
        allowEmpty: utilities.doContinue()
    }
};

export { packageOptions, gulpOptions };
