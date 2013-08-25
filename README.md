Tocapu
======

A front template to geo-applications.


##How to start

First open Terminal.

Install Bower, Grunt Client and Phonegap

	npm install -g bower grunt-cli phonegap

Install project Node dependencies

	npm install

Now, install front end dependencies with Bower

	bower install

To end, run! This command run test, concat, minify, check syntax and optimize:

	grunt

And this command watch next changes for run the tasks again.

	grunt test

To stop grunt press Ctrl + C on Terminal

## Deploy

    grunt build

    phonegap run ios

    phonegap run android