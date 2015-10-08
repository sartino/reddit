### Instructions

The objective of this project is to use the PlatypusTS framework to create an app using the Reddit API.

Before begining, complete the [getting started guide](https://platypi.io/docs/getting-started).

IMPORTANT NOTE!!!!!!!!!!!!!: Stop before compliting the deploy to a device step.

#### Further Reading
Typescript [type definition](https://blog.mariusschulz.com/2014/05/19/using-typescripts-type-definition-files-to-get-tooling-support-for-plain-javascript) files
[APIs](https://en.wikipedia.org/wiki/Web_API)


#### Resources
[PlatypusTS docs](https://platypi.io/docs/api)
[reddit docs](https://www.reddit.com/dev/api)

### Basic Req's

* Initialize a new project using platypi-cli:
		~~~~~~
		$ plat create -n reddit
		// Answer no to ? Should we create a Cordova project? (Y/n)

		$ npm install
		$ npm start
		~~~~~~

The server will be running on http://localhost:3000 throught hte use of http-server npm module.

* Use the Reddit API to get a list of reddits. May use any end point.
	-example apiendpoint: http://www.reddit.com/r/aww.json
* App.ts - initialize app and configure views
* Models: define types for reddit items, details and api response
* Services:
	-getRedditList() function:
		- use the host string form base service to get all reddits from the reddit api
		- the function should return an array of data on success
		- the function should handle any errors

* Repository:
	-getRedditList() function:
		- calls the getRedditList() service function, filters data (minimum needed is author, id, title, url) and returns an array

* Viewcontrols:
	-enable user to switch between views
	-listview to display a list of all reddits.
	-detail view to display the details of the reddit clicked
		- should display info like author, title and actual reddit
			- hint: can be done with an html [element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
			* any endpoint is an option but note restrictions due to [same origin policy](https://en.wikipedia.org/wiki/Same-origin_policy)
	-controller should call functions from the respective respository to handle actions
