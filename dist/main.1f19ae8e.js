// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var n = 0;
var m = 0;
console.log(1);
var string = "\n.dundun{\n    position: absolute;\n    width: 600px;\n    height: 600px;\n    left:50%;\n    top:50vh;\n    margin-left: -300px;\n    margin-top: -300px;\n}\n.er1{\n    position: absolute;\n    background-color: black;\n    width: 100px;\n    height: 80px;\n    left: 50%;\n    margin-left: -150px;\n    margin-top: -80px;\n    transform: rotate(-30deg);\n    border-radius: 50px/40px ;\n    z-index: -1;\n}\n.er2{\n    position: absolute;\n    background-color: black;\n    width: 100px;\n    height: 80px;\n    left: 50%;\n    margin-left: 50px;\n    margin-top: -80px;\n    transform: rotate(30deg);\n    border-radius: 50px/40px ;\n    z-index: -1;\n}\n.faces{\n    width: 400px;\n    height: 400px;\n    position: relative;\n    left: 50%;\n    top:50%;\n    margin-left: -200px;\n    margin-top:-200px;\n    \n}\n.faceone{\n    position: absolute;\n    background-color: rgba(44, 185, 63,0.6);\n    left: 50%;\n    top:50%;\n    width: 358px;\n    height: 298px;\n    margin-left: -189px;\n    margin-top: -149px;\n    border-radius: 100% 100% 70% 70%;\n}\n.facetwo{\n    position: relative;\n    background-color:rgba(94, 110, 199, 0.6);\n    width: 356px;\n    height: 296px;\n    margin-left: 1px;\n    margin-top: 1px;\n    border-radius: 100% 100% 70% 70%;\n}\n.face{\n    position:absolute;\n    margin-left: 1px;\n    margin-top: 1px;\n    border-radius: 100% 100% 70% 70%;\n}\n.three{\n    background-color: rgb(186, 80, 216,0.6);\n    width: 354px;\n    height: 294px;\n}\n.four{\n    background-color: rgba(149, 195, 41,0.6);\n    width: 352px;\n    height: 292px;\n}\n.five{\n    background-color: rgba(154, 45, 182,0.6);\n    width: 350px;\n    height: 290px;\n}\n.six{\n    background-color: rgba(59, 145, 202,0.6);\n    width: 348px;\n    height: 288px;\n}\n.seven{\n    background-color: rgba(90, 95, 19,0.6);\n    width: 346px;\n    height: 286px;\n}\n.eight{\n    background-color: rgba(20, 117, 117,0.6);\n    width: 344px;\n    height: 284px;\n}\n.nine{\n    background-color: rgba(25, 74, 153,0.6);\n    width: 342px;\n    height: 282px;\n}\n.ten{\n    background-color: rgb(254, 254, 254);\n    width: 340px;\n    height: 280px;\n    margin-left: 1px;\n    margin-top: 1px;\n    border-radius: 100% 100% 70% 70%;\n}\n\n\n.lefteye{\n    position: absolute;\n    background-color: rgb(9,8,11);\n    width: 80px;\n    height: 140px;\n    margin-left: 30px;\n    margin-top: 40px;\n    border-radius:60% / 50% ;\n    transform: rotate(35deg);\n    z-index: 10;\n}\n.righteye{\n    position: absolute;\n    background-color: rgb(9,8,11);\n    width: 80px;\n    height: 140px;\n    margin-left: 230px;\n    margin-top: 40px;\n    border-radius:60% / 50% ;\n    transform: rotate(-35deg);\n    z-index: 10;\n}\n.lefteye2{\n    background-color: white;\n    width: 40px;\n    height: 52px;\n    transform: rotate(-35deg);\n    border-radius: 60%/50%;\n    margin-top: 28px;\n    margin-left: 28px;\n}\n.righteye2{\n    background-color: white;\n    width: 40px;\n    height: 52px;\n    transform: rotate(35deg);\n    border-radius: 60%/50%;\n    margin-top: 28px;\n    margin-left: 12px;\n}\n.lefteye3{\n    position: absolute;\n    background-color: rgb(5,2,1);\n    width: 34px;\n    height: 44px;\n    transform: rotate(5deg);\n    border-radius: 60%/50%;\n    top:7%;\n    left: 5%;\n}\n.righteye3{\n    position: absolute;\n    background-color: rgb(5,2,1);\n    width: 34px;\n    height: 44px;\n    transform: rotate(-5deg);\n    border-radius: 60%/50%;\n    top:7%;\n    left: 5%;\n}\n.lefteye4{\n    position: absolute;\n    /* background-color: rgba(139,129,76,0.5); */\n    background-image: radial-gradient(rgb(110, 100, 77) 60%, rgb(114, 116, 78) 15%, rgba(100, 96, 77, 0.5) );\n    width: 28px;\n    height: 36px;\n    border-radius: 60%/50%;\n    top:8%;\n    left: 5%;\n}\n.righteye4{\n    position: absolute;\n    /* background-color: rgba(139,129,76,0.5); */\n    background-image: radial-gradient(rgb(110, 100, 77) 60%, rgb(114, 116, 78) 15%, rgba(100, 96, 77, 0.5) );\n    width: 28px;\n    height: 36px;\n    border-radius: 60%/50%;\n    top:8%;\n    left: 5%;\n}\n.lefteye5{\n    position: absolute;\n    background-color:  rgb(5,2,1);\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    left:4px;\n    top:6px;\n}\n.righteye5{\n    position: absolute;\n    background-color:  rgb(5,2,1);\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    left:4px;\n    top:6px;\n}\n.nose1{\n    position: absolute;\n    border:10px solid red;\n    border-color:rgb(9,8,11) transparent transparent transparent;\n    left: 50%;\n    top:45%;\n    margin-left: -10px;\n    z-index: 10;\n}\n.nose2{\n    position: absolute;\n    background-color: rgb(9,8,11);\n    width: 20px;\n    height: 3px;\n    left: 50%;\n    top:44%;\n    margin-left: -10px;\n    border-radius: 40% 40% 0 0;\n    z-index: 1;\n}\n.mouse1{\n    position: absolute;\n    border: 1px solid black;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    border-left-color: transparent;\n    width: 100px;\n    height: 80px;\n    border-radius: 200px/150px;\n    left: 50%;\n    margin-left:-50px;\n    top:34%;\n    background-color: red;\n    z-index: 0;\n}\n.mouse2{\n    position: absolute;\n    border: 1px solid black;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    border-left-color: transparent;\n    width: 100px;\n    height: 80px;\n    border-radius: 1000px/999px;\n    left: 50%;\n    margin-left:-50px;\n    top:33.2%;\n    background-color: rgb(254, 254, 254); \n}\n.box1{\n    position: absolute;\n    width: 23.6px;\n    height: 20px;  \n    left:37%; \n    top:36%;\n    transform:rotate(32deg) ;\n    background-color: rgb(254, 254, 254);\n    margin-left: -10px;\n    margin-top: 40px;\n}\n.box2{\n    position: absolute;\n    width: 26px;\n    height: 24px;  \n    left:61.2%; \n    top:34%;\n    transform:rotate(-32deg) ;\n    background-color: rgb(254, 254, 254); \n    margin-left: -10px;\n    margin-top: 40px;\n    z-index:inherit;\n}\n";
var string2 = "\u4EB2\u7231\u7684\u5B9D\u8D1D\uFF0C\u8C22\u8C22\u4F60\u4E00\u76F4\u4EE5\u6765\u7684\u966A\u4F34\u3002\n\u4ECA\u5929\u662F\u4F60\u7684\u751F\u65E5\uFF0C\u4E5F\u662F\u60C5\u4EBA\u8282\u3002\n\u795D\u4F60\u751F\u65E5\u5FEB\u4E50\uFF0C\u60C5\u4EBA\u8282\u5F00\u5FC3\uFF01\n\u9001\u4F60\u4E00\u53EA\u4E11\u4E11\u7684\u51B0\u58A9\u58A9\uFF0C\n\u5B83\u4F1A\u50CF\u4E11\u4E11\u7684\u6211\u4E00\u6837\u4E00\u76F4\u966A\u4F34\u7740\u4F60\n";
var time = 0;

var play = function play() {
  demo1.innerText = string2.substr(0, m); // demo2.scrollTop = 999999

  demo1.scrollTop = demo1.scrollHeight;
  m = m + 1;

  if (m > string2.length) {
    window.clearInterval(id);
    return;
  }
};

var play2 = function play2() {
  demo2.innerHTML = string.substr(0, n); // demo2.scrollTop = 999999

  n = n + 1;

  if (n > string.length) {
    window.clearInterval(id);
    return;
  }
};

var id = setInterval(play, 300);
var id2 = setInterval(play2, time);
},{}],"D:/nodejs/node_global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60774" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["D:/nodejs/node_global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map