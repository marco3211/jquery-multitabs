# jQuery-multitabs

The easiest way to get up and running with nested tabs. 

## Example

```html
<div class="tab1">
  <div data-child="false" class="tab__header">
    <div class="tab__header-1 tab__header--active">Tab 1</div>
    <div class="tab__header-2">Tab 2</div>
    <div class="tab__header-3">Tab 3</div>
  </div>
  <div class="tab__content">
    <div class="tab__content-1 tab__content--active">
      <div class="tab">
        <div data-child="true" class="tab__header">
          <div class="tab__header-1 tab__header--active">Sub Tab 1</div>
          <div class="tab__header-2">Sub Tab 2</div>
          <div class="tab__header-3">Sub Tab 3</div>
          <div class="tab__header-4">Sub Tab 4</div>
        </div>
        <div class="tab__content">
          <div class="tab__content-1 tab__content--active">Sub Tab Content 1</div>
          <div class="tab__content-2">Sub Tab Content 2</div>
          <div class="tab__content-3">Sub Tab Content 3</div>
          <div class="tab__content-4">Sub Tab Content 4</div>
        </div>
      </div>
    </div>
    <div class="tab__content-2">Tab Content 2</div>
    <div class="tab__content-3">Tab Content 3</div>
  </div>
</div>
```

`data-child` will tell the tabs whether they are nested or not. Set the parents tabs to `data-child="false"` and the nested tabs to `data-child="true"`. You can take a loot at several examples [here](https://jsfiddle.net/marco321/87e3Lg53/).

To get up and running with the plugin, all you have to do is: 

```javascript
$(function() {
  $('.tab1').multitabs();
});
```
## Roadmap 

- More flexibility to add nested tabs (right now it only supports 1 extra level of nested  tabs).
- An API to add, remove a tab. 
- ... More to come

This project is licensed under [MIT](https://github.com/marco3211/jquery-multitabs/blob/master/LICENSE).