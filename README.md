# jQuery-multitabs

The easiest way to get up and running with nested tabs. 

## Installation

cdn:

```html
<link href="//unpkg.com/jquery-multitabs@1.1.0/src/css/jquery-multitabs.css">
<script src="//unpkg.com/jquery-multitabs@1.1.0/src/js/jquery-multitabs.js"></script>
```

npm:

`npm i jquery-multitabs`

## Usage

### HTML

```html
<div class="tab1">
  <div class="tab__header">
    <div class="tab__header-1 tab__header--active">Tab 1</div>
    <div class="tab__header-2">Tab 2</div>
    <div class="tab__header-3">Tab 3</div>
  </div>
  <div class="tab__content">
    <div class="tab__content-1 tab__content--active">
      <div class="tab">
        <div class="tab__header">
          <div class="tab__header-1 tab__header--active">Sub Tab 1</div>
          <div class="tab__header-2">Sub Tab 2</div>
          <div class="tab__header-3">Sub Tab 3</div>
          <div class="tab__header-4">Sub Tab 4</div>
        </div>
        <div class="tab__content">
          <div class="tab__content-1 tab__content--active">Sub Tab Content 1</div>
          <div class="tab__content-2">Sub Tab Content 2</div>
          <div class="tab__content-3">Sub Tab Content 3</div>
          <div class="tab__content-4">
            <div class="tab">
              <div class="tab__header">
                <div class="tab__header-1 tab__header--active">Sub Tab Level 3 - 1</div>
                <div class="tab__header-2">Sub Tab Level 3 - 2</div>
              </div>
              <div class="tab__content">
                <div class="tab__content-1 tab__content--active">Sub Tab Content Level 3 - 1</div>
                <div class="tab__content-2">Sub Tab Content Level 3 - 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab__content-2">Tab Content 2</div>
    <div class="tab__content-3">Tab Content 3</div>
  </div>
```

You can nest unlimited tabs, here are several [examples](https://jsfiddle.net/marco321/87e3Lg53/).

#### Required Markup

A simple tab looks like the following: 

```html
<div>
  <div class="tab__header">
    <div class="tab__header-1 tab__header--active"></div>
      <div class="tab__header-2"></div>
    </div>
    <div class="tab__content">
      <div class="tab__content-1 tab__content--active"></div>
      <div class="tab__content-2"></div>
    </div>
</div>
```

- `tab__header` is where the tabs are located 
- `tab__content` is where the content to the corresponding tab resides
- `tab__header-1` corresponds to `tab__content-1`
- `tab__header--active` and `tab__content--active` are both currently showing in other words `display: block;`


### JavaScript

To get up and running with the plugin, all you have to do is: 

```javascript
$(function() {
  $('.tab1').multitabs();
});
```
## Roadmap 

- ~~More flexibility to add nested tabs (right now it only supports 1 extra level of nested  tabs)~~.
- An API to add, remove a tab. 
- ... More to come

## Changelog

### 1.1.0

- Removed `data-child` attribute dependency, allowing unlimited nested tabs. 

This project is licensed under [MIT](https://github.com/marco3211/jquery-multitabs/blob/master/LICENSE).
