var id = 7;
var company = "SeamlessHR";
var x = null;
var list = [{ id: "hy " }];
var user = { id: 1, name: "me" };
var cid = "x";
var ctid = cid;
var addNum = function (x, y) {
    return x + y;
};
// if you pass in a string to the params while calling the func, it will fail.
var addedNum = addNum(3, 3);
//x can be changed to anything 
// tsc --watch index to run file in watch mode
