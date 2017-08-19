(function(Way2web) {
    'use strict';


    Way2web.summernote = [];

    /**
     * Call function if the dom is ready.
     */
    Way2web.onDomReady = function() {
        var toolbar = [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['insert', ['link']],
            ['misc', ['undo', 'redo']],
            ['codeview', ['codeview']]
        ];

        $('.js-wysiwyg').each(function() {
            Way2web.summernote.push(
                new W2Summernote()
                    .element($(this))
                    .toolbar(toolbar)
                    .init()
            );
        });
    };
})(window.Way2web = window.Way2web || {});

$(document).ready(window.Way2web.onDomReady);
