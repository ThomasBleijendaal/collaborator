Array.prototype.sum = function(selector) {
    var total = 0;
    for (var i = 0; i < this.length; i++) {
        if (selector) {
            total += selector(this[i]);
        }
        else {
            total += this[i];
        }
    }
    return total;
}

Array.prototype.count = function(selector) {
    var total = 0;
    for (var i = 0; i < this.length; i++) {
        if (selector(this[i])) {
            total += 1;
        }
    }
    return total;
}
