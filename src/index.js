const fastmatter = require('fastmatter');

module.exports = function (source) {
  this.cacheable && this.cacheable();

  return JSON.stringify(fastmatter(source));
}
