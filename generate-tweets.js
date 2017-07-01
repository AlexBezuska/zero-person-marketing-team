var handlebars = require("handlebars");
var fs = require("fs");
var shuffle = require('fisher-yates')

var tweet = require("./tweet");
var templates = tweet.templates.map((template) => {
    return fs.readFileSync("./templates/"+ template, "utf8");
});
var data = tweet.data;
var hashtagList = tweet.data.hashtags;

createTweets(templates, data);

function createTweets(templates, data) {
  for (var i = 0; i < templates.length; i++) {
    createTweet(templates[i], data);
  }
}

function createTweet(template, data) {
  var tweet = "";
  var templateCompiled = handlebars.compile(template);
  data.hashtags = chooseHashtags(data.forceHashtag, hashtagList, data.hashtagTotal);
  tweet += templateCompiled(data);
  console.log(tweet);
}

function chooseHashtags(forced, hashtagList, total) {
  var hashtags = shuffle(hashtagList).slice(0, total);
  return hashtags;
}
