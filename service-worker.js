"use strict";var precacheConfig=[["/portfolio/index.html","a4c144089cb273b5137fdfed8545f19e"],["/portfolio/static/css/main.767385c4.css","ec7b37b39f8cab91976321b44bff1303"],["/portfolio/static/js/main.aae19bf6.js","8e25ab255f5020c8ee44ffa75af962bb"],["/portfolio/static/media/UFC-wallpaper.bf291d41.jpg","bf291d417b3daed5a1e2076063d7f96a"],["/portfolio/static/media/afterlife-wallpaper.25b75376.jpg","25b75376337370e236e725d7c305e505"],["/portfolio/static/media/businessman-AI.f68ddcba.png","f68ddcbae4824ebcf8289ac19e6435c7"],["/portfolio/static/media/chartjs-icon.06df2317.png","06df23170f20fa22556625c1f140a3bc"],["/portfolio/static/media/css-icon.1f851630.png","1f851630df640828e3d1bb4cfff4c011"],["/portfolio/static/media/es6-icon.9020ffe9.jpg","9020ffe91dd490c1e4a52fd8805a14f7"],["/portfolio/static/media/express-icon.d638bd34.png","d638bd34b425dec39792d4a81189eddf"],["/portfolio/static/media/graphql-icon.762edb84.png","762edb84b0bf808c1746d10188ebf04a"],["/portfolio/static/media/jest-icon.c5b8c7d2.png","c5b8c7d229e40297784fe502b5b22054"],["/portfolio/static/media/nodejs-icon.270f55ff.png","270f55fffea36219b66a63fbe03ff497"],["/portfolio/static/media/portrait2.6ce8ce88.png","6ce8ce88eab1c2e0cf5f8a0f497406b4"],["/portfolio/static/media/postgresql-icon.50156c71.png","50156c71fb2cf47d5cfe134231975922"],["/portfolio/static/media/postman-icon.10a5c241.png","10a5c241c59fb16c83857ad55bfe1df1"],["/portfolio/static/media/react-icon.84d44aff.png","84d44aff3af7aab4ce4495c3de9c2e64"],["/portfolio/static/media/redux-icon.b51d1861.png","b51d1861e7fe5782d20d5455c7c9f1f4"],["/portfolio/static/media/restfulapi-icon.fe2d7fcc.png","fe2d7fccda6d993731f1455369d8b644"],["/portfolio/static/media/sass-icon.20e8d776.png","20e8d7760ee87d4c1f33524935e38a93"],["/portfolio/static/media/strategy-wallpaper.dff9623f.jpg","dff9623fda236ba721d4a46dba38bd0d"],["/portfolio/static/media/video-game-wallpaper.9e98fe22.jpg","9e98fe22c5d13af4bc26657c50932335"],["/portfolio/static/media/vr-games.0eb0936c.jpg","0eb0936c6aa5e14331ddfc9427204295"],["/portfolio/static/media/whosbringingwhat-home-page.14476b8a.png","14476b8a0abc6931085e4abc79116f51"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});