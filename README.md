# Hoodie + [AngularJS](http://angularjs.org)

This is a ready to use template to create web apps using the awesome hoodie toolkit and the MVC framework AngularJS. Code on weekend, bill on monday =)
It is also configured to use [Bower](https://github.com/bower/bower) as the js package manager.


## Organization based on Yeoman Angular Generator

There are a lot of files in this template in order to run the tests and to build the app. A smaller template can be used just to integrate hoodie and angular, but if you like to test you code as many angularjs users does, then you might enjoy this. This organization is based on the [yeoman angular generator](https://github.com/yeoman/generator-angular) and [angular-seed](https://github.com/angular/angular-seed). All the motivations behind this can be read from the original link, so don't blame me for something you don't like =)


### Modifications

If you have alread seen the original template generated by yoeman you may see few diferences here, they are:

* GruntFile

  I updated the 'yeomanConfig' variable name to 'paths' and setup the 'dist' to the 'www'

* Angular Controllers

  Controller source file were moved from *app/scripts/controller/main.js* to *app/scripts/controllers.js*
  This is how the first [angular-seed](https://github.com/angular/angular-seed) were organized.

* Hoodie inside angular world

  The hoodie toolkit is declared on app/scripts/services.js and can be injected into angular "things" by the $injector as any other dependency.

* Tests

  If you look at **/test** folder you will se that this template came ready configured to test. It uses the awesome [karma runner](karma-runner.github.com)( testacularjs++ ) as test runner. Configurations are defined in karma*.conf.js files.

# Demo App ( work in progress )

This application is based on the original [hoodie demo](https://github.com/hoodiehq/demo), it isn't full working yet. More information on the original repo.


# Creating a new Hoodie App

In order to create a new Hoodie App using this template you must do pretty much the same thing as if you wer creating
using the default app template [my-first-hoodie](https://github.com/hoodiehq/my-first-hoodie).

If you never created a Hoodi App before i recommend you to read the steps in the original link and after came back here.

Prerequisits:

* Node.JS and CouchDB ( same as my-first-hoodie )

  `$ brew install node`
  `$ brew install couchdb`

(If any of these fail, run `brew update` to make sure your Homebrew version is up to date.)

* Bower

  `$ npm install -g bower`

* Grunt

  Grunt is used to run the build and test you app. It requires few steps to get installed, so i recommend follow the tutorial in the [oficial home-page](http://gruntjs.com/)

Install with:

    $ npm install -g local-tld
    $ brew tap hoodiehq/homebrew-hoodie
    $ brew install hoodie

Once everything is running fine, then lest go create your first Hoodie app using this template:

    $ hoodie new myappname thiagofelix/hoodie-angular

That created a folder "myappname". You are done. Start the app:

    $ cd myappname
    $ bower install
    $ grunt build
    $ hoodie start

Now follow instructions, your browser should automatically open
http://myappname.dev

Once your app is running, you can access your app's couch at
http://couch.myapp.dev (Futon, CouchDB's web-based administration
at http://couch.myapp.dev/_utils) and your app's admin backend at
http://admin.myapp.dev

If you want to access your local hoodie installation from
other computers or mobile devices on the same local network,
you can use http://myapp.10.0.0.1.xip.io (assuming `10.0.0.1`)
is your machines local ip address.


More information about Modules, Deployment and other things are avalliable in the [my-first-hoodie template](https://github.com/hoodiehq/my-first-hoodie).
