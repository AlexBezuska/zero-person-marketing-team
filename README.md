# Zero Person Marketing Team

A tool for assisting with marketing for small creative brands

Currently does:

- procedurally generated tweets based on some data and templates you create
- outputs the tweets to your terminal for you to copy and paste and use


**Tested on Mac OS X, should work on Mac/Win/Lin ( be sure to [submit an issue](https://github.com/AlexBezuska/zero-person-marketing-team/issues) if you find compatibility problems!)**

## Prerequisites

- Node.js
  - [Install Node.js](https://nodejs.org/en/)

- Git (optional)
	- [https://git-scm.com/](https://git-scm.com/)

## Installation

- In your terminal clone this github repo `git clone git@github.com:AlexBezuska/zero-person-marketing-team.git` (git required)

	**or** Download the zip of the project [Zero Person Marketing Team Zip](https://github.com/AlexBezuska/zero-person-marketing-team/archive/master.zip) (git not required)
- Install dependencies
	- In your terminal, inside the folder for this project run `npm install`, this will download all this project's required packages from NPM (Node Package Manager)


## How to use
- duplicate `sample-tweet.json` and call it `tweet.json`
- add some data inside of `tweet.json` for the set of tweets you want to create
- edit the file `templates/sample-tweet.hbs` to create a tweet, duplicate it to create more tweets (be sure to add the filenames to the `templates` array in `tweet.json`)

- Commands (run in your terminal while inside the root of the `zero-person-marketing-team` directory)
	 - **`npm run tweets`** - creates tweets and outputs them in your terminal window

## Feature requests

- coming soon

## Contributing

If you are interested in participating in this project, please feel free to send a bug or feature request by [submitting an issue](https://github.com/AlexBezuska/zero-person-marketing-team/issues), or submit a PR for me to review.

## Versioning

We use [SemVer](http://semver.org/) for versioning. Check out the [changelog](CHANGELOG.md)

## Authors

* **[Alex Bezuska](https://github.com/AlexBezuska)** - *Initial work*

See also the list of [contributors](https://github.com/AlexBezuska/zero-person-marketing-team/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.TXT](LICENSE.txt) file for details
