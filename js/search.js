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
    $('#githubLink').attr("href", response.html_url);
    $('#reposLink').attr("href", "https://github.com/" + userName + "?tab=repositories");
  });

  $.get('https://api.github.com/users/' + userName + '/repos?&per_page=1000&access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i++) {
      $('#repositoryPanel').append('<a href ="' + response[i].html_url + '">' + '<h3>' +  response[i].name + '</h3>' + '</a>' + '<h5>' + response[i].description + '</h5>');
      // if (response[i].description === null){
      // }
    }
  }).fail(function(error){
    $('#failure').show();
  });
};

exports.searchModule = Search;
