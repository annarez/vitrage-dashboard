(function() {
  'use strict';

  angular
    .module('horizon.dashboard.project.vitrage')
    .service('vitrageTopologySrv', VitrageTopologySrv);

  VitrageTopologySrv.$inject = ['$http', '$injector'];

  function VitrageTopologySrv($http, $injector) {
    var vitrageAPI;

    if ($injector.has('horizon.app.core.openstack-service-api.vitrage')) {
      vitrageAPI = $injector.get('horizon.app.core.openstack-service-api.vitrage');

    }
    function getTopology() {

      if (vitrageAPI) {
        return vitrageAPI.getTopology()
          .success(function(data) {
            return data;
          })
          .error(function(err) {
              console.error(err);
            }
          )
      }
    }

    function getAlarms(vitrage_id) {

      if (vitrageAPI) {
        return vitrageAPI.getAlarms(vitrage_id)
          .success(function(data) {
            return data;
          })
          .error(function(err) {
              console.error(err);
            }
          )
      }
    }

    return {
      getTopology: getTopology,
      getAlarms: getAlarms
    }
  }
})();
