resizeBoxes();

addEventListener("resize", resizeBoxes);

function resizeBoxes() {
    const parent = document.querySelector(".flex-div");
    const parentContainer = parent.parentElement;
    const childs = parent.children;
    const n = childs.length;
    const w = parentContainer.offsetWidth;
    const h = parentContainer.offsetHeight;
    const side = getItemSize(w,h,n,250,500);
    Array.from(childs).forEach(el => el.style.width = Math.floor(side) + "px");
}

/**
 * Calculate the minimum width of a number of squares in a rectangle for use the maximum space
 * @param {number} w Width of the rectangle
 * @param {number} h Height of the rectangle
 * @param {number} n Number of squares
 * @param {number} [min=0] The minimum width to not exceeded in pixels
 * @param {number} [max=Infinity] The maximum width to not exceed in pixels
 * @returns {number} The minimum width of a square in pixels
 */
function getItemSize(w, h, n, min=0, max=Infinity) {
    //Init min and maxSide
    let minSide = 0;
    let maxSide = Math.min(w, h);

    //Update maxSide and minSide, and check if the difference is under or equal to 1
    while((maxSide - minSide) > 1) {
        //Set the side regard to the min and maxSide
        const side = (minSide + maxSide) / 2;
        //Calculate the number of squares
        const squares = Math.floor(w / side) * Math.floor(h / side);
        if(squares < n) //Side too big
            maxSide = side;
        else //Side too small
            minSide = side;
    }
    //Return result in pixels
    if(minSide <= min) return min; //If minSide is smaller than minimum, return the minimum
    if(minSide >= max) return max; //If minSide is greater than maximum, return the maximum
    return Math.floor(minSide); //Prevent rounding up using the Math.floor method
}