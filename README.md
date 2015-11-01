# Ember-checklist

## Test Environment

After you've gone through the ember installation below you can run the test environment with
this command. Note this app has only been tested on the Linux platform. Please note authorization is faked
in this format for testing and interacting with login / register will generate errors. 

`sh ./run.sh`

## Test Environment w/ Server

If you want to test ember-checklist on a Rails server, you'll need to install this repository
https://github.com/ashblue/rails-checklist. Once complete you need to run the rails sever in its root
before proceeding.

`mongod` Unless MongoDB is already running
`rails s`

Navigate back to the ember project so we can proxy into the Rails server. It will be assumed that rails-checklist
is running on localhost:3000. Run the following shell script to gain proxy server access.

`sh ./run-server.sh`

## Ember Installation

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

### Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

### Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

#### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

#### Running Tests

* `ember test`
* `ember test --server`

#### Building

* `ember build` (development)
* `ember build --environment production` (production)

#### Deploying

Specify what it takes to deploy your app.

### Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

