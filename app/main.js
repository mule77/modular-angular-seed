require.config({
  paths: {
    jquery: 'vendor/jquery/jquery.min',
    angular: 'vendor/angular/angular',
    angularBootstrap: 'vendor/angular-bootstrap/ui-bootstrap-tpls.min',
    angularUiRouter: 'vendor/angular-ui-router/release/angular-ui-router',
    angularTouch: 'vendor/angular-touch/angular-touch.min',
    underscore: 'vendor/underscore/underscore'
  },
  shim: {
    'angular': {
      'deps': ['jquery'],
      'exports': 'angular'
    },
    'angularBootstrap': ['angular'],
    'angularUiRouter': ['angular'],
    'angularTouch': ['angular']
  }
});


require([
  "angular",
  "angularBootstrap",
  "angularUiRouter",
  "angularTouch",
  "underscore"
], function() {
  initApplication();
});


var initApplication = function() {
  require([
/* @echo CUSTOMER_REQUIRE */
  ], function(
/* @echo CUSTOMER_MODULES */
  ) {
    var appName = "modular-angular-seed";
    var app = angular.module(
      appName, [
/* @echo CUSTOMER_MODULES */
      ]
    );

    if (typeof initTemplates === 'function') {
      initTemplates();
    }

    angular.element().ready(function() {
      angular.bootstrap(document, [appName]);
    });
  });
};