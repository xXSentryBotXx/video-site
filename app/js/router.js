function router () {
  var _element = document.getElementById('main');
  var _hash;

  var defaultHash;
  var routes = {};

  function addRoute (params) {
    routes[params.route] = {
      template: params.template,
      script: params.script
    };
    return this;
  }

  function setDefaultHash (hash) {
    defaultHash = hash;
    location.hash = hash;
    return this;
  }

  function getRoutes () {
    return routes;
  }

  function getDefaultHash () {
    return defaultHash;
  }

  function _navigate () {
    _hash = location.hash.substr(1);
    _getContent(_hash, _renderContent);
  }

  function _getContent (hash, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        callback(_element, xmlhttp.responseText);
        routes[hash].script();
      }
      else {
        callback(_element, 'Loading from server...');
      }
    };
    var url = routes[hash] ? routes[hash].template : routes[defaultHash].template;
    xmlhttp.open('GET', url, true);
    xmlhttp.send(null);
  }

  function _renderContent (element, content) {
    element.innerHTML = content;
  }

  function init () {
    window.addEventListener('hashchange', _navigate);
  }

  init();

  return {
    addRoute: addRoute,
    getRoutes: getRoutes,
    setDefaultHash: setDefaultHash,
    getDefaultHash: getDefaultHash
  };
}
