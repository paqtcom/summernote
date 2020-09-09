/**
 * Way 2 Wummernote.
 *
 * @param {object} element
 *
 * @return {object}
 */
window.W2Summernote = function (element) {
    'use strict';

    var version = '1.2.0';

    var globals = {
        element: element,
        height: 300,
        tooltip: true,
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
        globals.element.summernote({
            height: globals.height,
            toolbar: toolbar,
            tooltip: globals.tooltip,
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
     * @param {object} element
     *
     * @return {object}
     */
    function setElement(element) {
        globals.element = element;

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
     * Set the wysiwyg tooltip.
     *
     * @param {boolean} tooltip
     *
     * @return {object}
     */
    function setTooltip(tooltip) {
        globals.tooltip = tooltip;

        return this;
    }

    /**
     * Unset summernote.
     */
    function unset() {
        globals.element.summernote('destroy');
    }

    /**
     * Get the HTML contents of the first summernote in the set of matched elements.
     *
     * @return {string}
     */
    function get() {
        return globals.element.summernote('code');
    }

    /**
     * A string of HTML to set as the content of each matched element.
     *
     * @param {string} code
     *
     * @return {object}
     */
    function set(code) {
        globals.element.summernote('code', code);

        return this;
    }

    return {
        init: init,
        toolbar: setToolbar,
        element: setElement,
        height: setHeight,
        tooltip: setTooltip,
        get: get,
        set: set,
        unset: unset,
        version: version
    };
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.W2Summernote;
}
