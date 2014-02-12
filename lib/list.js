module.exports = List;

function List() {
  this.items = [];
}

List.prototype.count = function () {
  return this.items.length;
}

List.prototype.append = function (item) {
  return this.items.push(item);
}

List.prototype.prepend = function (item) {
  return this.items.unshift(item);
}

List.prototype.remove = function (item) {
  return this.items.splice(this.items.indexOf(item), 1);
}

List.prototype.pop = function () {
  return this.items.pop();
}

List.prototype.shift = function () {
  return this.items.shift();
}

List.prototype.has = function (item) {
  return this.items.indexOf(item) !== -1;
}

List.prototype.index = function (item) {
  return this.items.indexOf(item);
}

List.prototype.last = function () {
  if (this.items.length === 0) {
    return null;
  }

  return this.items[this.items.length - 1];
}

List.prototype.first = function () {
  if (this.items.length === 0) {
    return null;
  }

  return this.items[0];
}

List.prototype.each = function (callback) {
  this.items.forEach(function (item, index) {
    callback.call(item, item, index);
  });
}

List.prototype.before = function (item) {
  var itemIndex = this.items.indexOf(item);

  if (itemIndex === -1) {
    return null;
  }

  if (itemIndex === 0) {
    return null;
  }

  return this.items[itemIndex - 1];
}

List.prototype.after = function (item) {
  var itemIndex = this.items.indexOf(item);

  if (itemIndex === -1) {
    return null;
  }

  if (itemIndex === this.items.length - 1) {
    return null;
  }

  return this.items[itemIndex + 1];
}
