var Search = require('./../js/search.js').searchModule;

$(document).ready(function() {
  userSearch = new Search();
  userSearch.getRepos();
});
