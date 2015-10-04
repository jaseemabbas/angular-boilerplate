(function () {
  'use strict';

  angular.module('app.common', [])
    .value('extractData', function extractData(result) {
      return angular.isDefined(result.data.data) ? result.data.data : result.data;
    });

})();