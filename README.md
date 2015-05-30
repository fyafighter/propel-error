# propel-error
> Shared error Angular components for Propel applications

This package provides directives and services that will give you error popup functionality.  There is a `globalError` directive that listens to the `globalError` service to see if any error has been published to show.  Ex. a specific controller might have it's own error to show, and it's nice to only have one place to publish the error message.

To use it you will typically do something like this:

```html
<global-error></global-error>
```

Also you can set your own content into the generic error-popup like this:

```
<error-popup show="lpd.globalError.enabled" key="{{ lpd.globalError.messageKey }}" params="lpd.globalError.params"></error-popup>
```

## Error-Popup Attributes

You can customize the propel popup by using following attributes:

* show {boolean} - display the popup
* key {string} - key used to lookup Locale string
* params {object} - Object map used to replace parts of the key string.
    ex. If the resulting locale string has 'Error fetching {name}',
        the params object would need to be `{ name: "Users" }` to replace the name part of text.

## Global Error Service

globalError.show() params (in order):

* messageKey {string} - translation key for the error message
* paramsMap {object} - map of values to inject into translation message (optional)
* callback {function} - function to invoke on callback (optional)

You can trigger an error in the global error service by using the '.show()` method:

```
globalError.show('dashboard.config', { name: 'Users'}, callback);
```

# propel-error
