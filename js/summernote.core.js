/**
 * Way 2 Wummernote.
 *
 * @return {object}
 */
window.W2Summernote = function() {
    'use strict';

    var version = '0.0.1';

    var globals = {
        textarea: '.js-wysiwyg',
        height:   300
    };

    var toolbar = [
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['insert', ['link']],
        ['misc', ['undo', 'redo']],
        ['codeview', ['codeview']]
    ];

    /**
     * Attach summernote.
     *
     @return {object}
     */
    function init() {
        $(globals.textarea).each(function() {
            var elemEditor = $(this);

            elemEditor.summernote({
                height:  globals.height,
                toolbar: toolbar
            });
        });

        return this;
    }

    /**
     * Overrule the default toolbars.
     *
     * @param {array} newToobar
     */
    function setToolbar(newToobar) {
        toolbar = newToobar;
    }

    /**
     * Set the element.
     *
     * @param {string} element
     */
    function setElement(element) {
        globals.textarea = element;
    }

    /**
     * Set the wysiwyg height.
     *
     * @param {int} height
     */
    function setHeight(height) {
        globals.height = height;
    }

    return {
        init:    init,
        toolbar: setToolbar,
        element: setElement,
        height:  setHeight,
        version: version
    };
};
