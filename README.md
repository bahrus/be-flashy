# be-flashy (🚨) [TODO]
Set css class temporarily when element state changes

```html
<output 🚨 value=12367.45>12,367.45</output>
<data 🚨 value=12367.45>12,367.45</data>
```

or

```html
<output be-flashy value=12367.45>12,367.45</output>
<data be-flashy value=12367.45>12,367.45</data>
```

What this does:

1.  Watches for changes to the value attribute.
2.  When the value attribute changes, adds class 'be-flashy' for 1 second, removes it after 1 second.


## Set the timeout [TODO]

```html
<output 🚨=2000 value=12367.45>12,367.45</output>
<data 🚨=500 value=12367.45>12,367.45</data>
```

Number is in milliseconds.