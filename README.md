# Way 2 Summernote

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

```
new W2Summernote().init();
```

## .init()

Attach summernote.

Summernote is a JavaScript library that helps you create WYSIWYG editors online.

## .toolbar()

With the function toolbar you can send an array with the toolbars.

```
[
    ['style', ['bold', 'italic', 'underline', 'clear']],
    ['font', ['strikethrough', 'superscript', 'subscript']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['insert', ['link']],
    ['misc', ['undo', 'redo']],
    ['codeview', ['codeview']]
]
```

## .element()

Set the element of the textarea to attach the summernote wysiwyg editor.

`.js-wysiwyg`

## .height()

Set the height of the summernote wysiwyg editor.

`300`

[downloads-image]: https://img.shields.io/npm/dm/way2web-summernote.svg
[npm-url]: https://www.npmjs.com/package/way2web-summernote
[npm-image]: https://img.shields.io/npm/v/way2web-summernote.svg
