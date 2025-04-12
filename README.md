# be-flashy (🚨) 

Set css class temporarily when element state changes.

[![Playwright Tests](https://github.com/bahrus/be-flashy/actions/workflows/CI.yml/badge.svg)](https://github.com/bahrus/be-flashy/actions/workflows/CI.yml)
[![NPM version](https://badge.fury.io/js/be-flashy.png)](http://badge.fury.io/js/be-flashy)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-flashy?style=for-the-badge)](https://bundlephobia.com/result?p=be-flashy)
<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-flashy?compression=gzip">

```html
<data 🚨 value=12367.45>12,367.45</data>
```

or

```html
<data be-flashy value=12367.45>12,367.45</data>
```

What this does:

1.  Watches for changes to the value attribute.
2.  When the value attribute changes, adds class 'be-flashy' for 1 second, removes it after 1 second.


## Set the timeout [TODO]

```html
<data 🚨-delay=500 value=12367.45>12,367.45</data>
```

Number is in milliseconds.

## Observing changes to textContent

```html
<output 🚨-attr=textContent>12,367.45</output>
```

## Viewing Locally

Any web server that serves static files with server-side includes will do but...

1.  Install git.
2.  Fork/clone this repo.
3.  Install node.
4.  Install Python 3 or later.
5.  Open command window to folder where you cloned this repo.
6.  > npm install
7.  > npm run serve
8.  Open http://localhost:8000/demo in a modern browser.

## Running Tests

```
> npm run test
```

## Using from ESM Module:

```JavaScript
import 'be-flashy/be-flashy.js';
```

## Using from CDN:

```html
<script type=module crossorigin=anonymous>
    import 'https://esm.run/be-flashy';
</script>
```