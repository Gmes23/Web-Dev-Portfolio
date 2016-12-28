function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;   // older versions of IE (yuck)
    }
}

function myKeyDownHandler(e) {
    // your code here
    preventDefault(e);
    return false;
}
