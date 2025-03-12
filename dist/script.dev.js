"use strict";

var _components = require("./components/components.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

document.addEventListener('DOMContentLoaded', function () {
  [{
    component: 'menu',
    reference: '../../',
    isAsync: true
  }, {
    component: 'letrasCyberPunk',
    reference: './',
    isAsync: false
  }, {
    component: 'heroslide',
    reference: './',
    isAsync: false
  }, {
    component: 'carruselproducts',
    reference: './',
    isAsync: false
  }, {
    component: 'slidecategorias',
    reference: './',
    isAsync: false
  }, {
    component: 'brands',
    reference: './',
    isAsync: false
  }, {
    component: 'footer',
    reference: '../../',
    isAsync: false
  }].forEach(function (_ref) {
    var component = _ref.component,
        reference = _ref.reference,
        isAsync = _ref.isAsync;
    (0, _components.loadComponent)("".concat(component, "-container"), "".concat(reference, "components/").concat(component, "/").concat(component, ".html"), "".concat(reference, "components/").concat(component, "/").concat(component, ".css"), isAsync ? function _callee() {
      var module, capitalizedComponent;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(Promise.resolve().then(function () {
                return _interopRequireWildcard(require("".concat(reference, "components/").concat(component, "/").concat(component, ".js")));
              }));

            case 2:
              module = _context.sent;
              console.log("".concat(component, ".js cargado:"), module);
              capitalizedComponent = component.charAt(0).toUpperCase() + component.slice(1);

              if (module && module['initialize' + capitalizedComponent]) {
                console.log("Ejecutando initialize".concat(capitalizedComponent, "()"));
                module['initialize' + capitalizedComponent]();
              } else {
                console.warn("initialize".concat(capitalizedComponent, " no existe en ").concat(component, ".js"));
              }

              return _context.abrupt("return", module);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    } : function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("".concat(reference, "components/").concat(component, "/").concat(component, ".js")));
      });
    });
  });
});
/* export function readMore() {
    alert("Funcionalidad de 'Leer más' aún en desarrollo. ¡Gracias por visitar!");
} */