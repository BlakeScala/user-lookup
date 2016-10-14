var apiKey = require('./../.env').apiKey;

function Search(){

}

Search.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#userPanel').show();
    $('#repositoryPanel').show();
    $('#userName').text(response.login);
    $('#avatar').attr("src", response.avatar_url);
    $('#githubLink').attr("href", response.url);
  });

  $.get('https://api.github.com/users/' + userName + '/repos?&per_page=100&access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i++) {
      $('#repositoryPanel').append('<h3>' + response[i].name + '</h3>' + '<br>'+ '<h5>' + response[i].description + '</h5>');
      if (response[i].description === null){
        response[i].description = "No Description"
      }
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.searchModule = Search;
