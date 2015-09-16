var GithubStore = require('../node_modules/github-api');

var github = new GithubStore({apiUrl : "https://api.github.com"});

var repo = github.getRepo("lucasviola", "easyshell");

repo.show(function(err, repo){});

console.log(repo);
