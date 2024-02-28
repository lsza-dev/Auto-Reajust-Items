# Auto-Reajust Items

This little project is really simple. It provide a function called `getItemSize` that can retrieve the minimum size side of all flex container's childs to use the maximum space and prevent scrolling.

[JSFiddle Demo](https://jsfiddle.net/czdjmf3s/5/)

**HTML:**
```html
<div class="container">
    <div class="flex-div">
        <div class="flex-item"></div>
        <div class="flex-item"></div>
        <div class="flex-item"></div>
    </div>
</div>
```
**JS:**
```js
//Retrieve parent
const parent = document.querySelector(".flex-div");
//Retrieve the parent container
const parentContainer = parent.parentElement;
//Get the items to resize
const childs = parent.children;
//Get the number of items to resize
const numberOfChilds = children.length;
//Get the container width
const parentContainerWidth = parentContainer.offsetWidth;
//Get the container height
const parentContainerHeight = parentContainer.offsetHeight;
//Getting the size
const side = getItemSize(
    parentContainerWidth, //The container's width in pixels
    parentContainerHeight, //The container's height in pixels
    numberOfChilds, //The number of items to adjusts
    250, //Optionnal. The minimum width of an item to not exceed
    500 //Optionnal. The maximum height of an item to not exceed
);
//Apply to childs
Array.from(childs).forEach(el => el.style.width = Math.floor(side) + "px");
```