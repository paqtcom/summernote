/**
 * Way 2 Wummernote.
 *
 * @return {object}
 */
window.W2Summernote = function() {
    'use strict';

    var version = '0.0.5';

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
     * @return {object}
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
     *
     * @return {object}
     */
    function setToolbar(newToobar) {
        toolbar = newToobar;

        return this;
    }

    /**
     * Set the element.
     *
     * @param {string} element
     *
     * @return {object}
     */
    function setElement(element) {
        globals.textarea = element;

        return this;
    }

    /**
     * Set the wysiwyg height.
     *
     * @param {int} height
     *
     * @return {object}
     */
    function setHeight(height) {
        globals.height = height;

        return this;
    }

    /**
     * Unset summernote.
     */
    function unset() {
        $(globals.textarea).summernote('destroy');
    }

    /**
     * Get the HTML contents of the first summernote in the set of matched elements.
     *
     * @return {string}
     */
    function get() {
        return $(globals.textarea).summernote('code');
    }

    /**
     * A string of HTML to set as the content of each matched element.
     *
     * @return {object}
     */
    function set() {
        $(globals.textarea).summernote('code');

        return this;
    }

    return {
        init:    init,
        toolbar: setToolbar,
        element: setElement,
        height:  setHeight,
        get:     get,
        set:     set,
        unset:   unset,
        version: version
    };
};
