"use strict";expose("http",["fetch",function(t){function n(t){this._opts=t||{}}return n.prototype.get=function(n){var e=$.extend(!0,{},this._opts);return e.method="GET",t(n,e)},n.prototype.getJson=function(t){var n=".json"===t.substring(t.length-5)?t:t+".json";return this.get(n).then(function(t){if(t.ok)return t.json();throw new Error("Bad response "+t.status)})},n}]);
//# sourceMappingURL=http.js.map
