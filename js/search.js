var apiKey = require('./../.env').apiKey;

function Search(){

}

Search.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#userName').text(response.login);
    $('#avatar').attr("src", response.avatar_url);
    $('#githubLink').attr("href", response.url);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.searchModule = Search;
