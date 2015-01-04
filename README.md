# Touchy

## Test

.. if a browser is run on a touch device.

```js
var touchy = require('touchy');
touchy(window);	// true/false
```

## Mark

.. the `<html>` element with classes.

```js
var touchy = require('touchy');
touchy.mark(window);
```

```html
<html class="touch">
<html class="no-touch">
```

```css
html.no-touch a:hover {
	color: pink;
}
```

You can add any or none of these two classes by default. If present and
test shows otherwise it will be removed.

Since most touch devices run moderne browsers it is often preferable to
have `no-touch` as the default.

## Toggle

.. classes on any DOM element

```
toggle(element, switch)
```

```js
var touchy = require('touchy');
touchy.toggle(document.querySelector('#some-id'), touchy(window));
```

```js
var touchy = require('touchy');
touchy.toggle(document.querySelector('#some-id'), true);
```

## License

[MIT](http://opensource.org/licenses/MIT) © [src.agency](http://src.agency) / Thomas Jensen
