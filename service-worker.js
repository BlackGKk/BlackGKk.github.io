/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dd4e9856f3851e3ce8f43db1b1f4d132"
  },
  {
    "url": "assets/css/0.styles.8d08c88d.css",
    "revision": "44eac6e58527cc3b70227ad6e0e9d2d2"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.9c1910d2.js",
    "revision": "668fa8d0d80a64bc38d28c20a1166bb8"
  },
  {
    "url": "assets/js/10.2d37c0ac.js",
    "revision": "a0f0fdcb9af62a354bb1504771a26f70"
  },
  {
    "url": "assets/js/11.b21f6ece.js",
    "revision": "8f5ff1d711dc71eb3c43d04a0cd6ba92"
  },
  {
    "url": "assets/js/12.9d6b30fc.js",
    "revision": "5e9b671ed26396be0d10f35550dd823b"
  },
  {
    "url": "assets/js/13.1d87081e.js",
    "revision": "86a26a66a7761f69dfe28f81f65e2ddb"
  },
  {
    "url": "assets/js/14.34ef889d.js",
    "revision": "7610bc083f11593f32bdf5ffe2ab16a8"
  },
  {
    "url": "assets/js/15.3d53b089.js",
    "revision": "8926a6702b7015b42f0801bd065fd729"
  },
  {
    "url": "assets/js/16.4507c44e.js",
    "revision": "af3e0bfccc9f352e40ddcab2e0c31faf"
  },
  {
    "url": "assets/js/17.b3de6bc1.js",
    "revision": "9b2498a324c5fa834d1af1dd4561ee96"
  },
  {
    "url": "assets/js/18.4bcdeee7.js",
    "revision": "019c9dbad3aaaa113f7c93f643042b55"
  },
  {
    "url": "assets/js/4.2b178a56.js",
    "revision": "591c7e2127d09dce059eaac4806aec5f"
  },
  {
    "url": "assets/js/5.1fdcd9ea.js",
    "revision": "a2b3b2c750821fd11597497e872c9a16"
  },
  {
    "url": "assets/js/6.c5953533.js",
    "revision": "0ef1a624808f514900f20ea235a653fc"
  },
  {
    "url": "assets/js/7.30adf369.js",
    "revision": "ea27b9c0c2601bfcabff53a8aeae0465"
  },
  {
    "url": "assets/js/8.0b0c33e5.js",
    "revision": "288a850dd3ae7a6a951c2d1357c75219"
  },
  {
    "url": "assets/js/9.9303dd7f.js",
    "revision": "53c6592c1d9e01ec4a5acbb461ffd8ac"
  },
  {
    "url": "assets/js/app.cbede077.js",
    "revision": "bc2703e2275255a1b9cd8834e18b2528"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.f6a65eb0.js",
    "revision": "b6425f8de02855bd075f34d263984a92"
  },
  {
    "url": "author.gif",
    "revision": "e54333660a323c0a36bf4eca57be62b0"
  },
  {
    "url": "categories/Blog/index.html",
    "revision": "2f7cdb65d1463047c42b06330bcb4cd8"
  },
  {
    "url": "categories/index.html",
    "revision": "4cf50cbf310cd17b500040bdb72ab0bb"
  },
  {
    "url": "categories/java/index.html",
    "revision": "617dfdc951664f9e332358ee1d64e4f8"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "babd8da7772501884e8225ff3807f24e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6e3ff2171e604c0ae739d76d8ac26056"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "0c5161b2c1b83aa1f43c6aa9a793cc60"
  },
  {
    "url": "css/style.css",
    "revision": "165f082e65af52e79c2d56e7390d1155"
  },
  {
    "url": "img/bg.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "img/favicon.png",
    "revision": "0072566acbbc05f92380d8c0880956c0"
  },
  {
    "url": "index.html",
    "revision": "eac08d8ba6e62527360e4c11948b0e89"
  },
  {
    "url": "js/custom.js",
    "revision": "d05129c3aaa5c20b77268a11ffb64a47"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e23ee129f5718a347effd8e2ff3d2a77"
  },
  {
    "url": "tag/All/index.html",
    "revision": "4cdcf93d34ba0f2fcf79882ccf3e8027"
  },
  {
    "url": "tag/Blog/index.html",
    "revision": "b9f32df99465556b6b82c6478fb1473c"
  },
  {
    "url": "tag/index.html",
    "revision": "708430c25f8d2097a3135b594a7d020b"
  },
  {
    "url": "tag/JavaSE/index.html",
    "revision": "f4ee81a8ece7d7921e14ee92f82e3227"
  },
  {
    "url": "tag/js/index.html",
    "revision": "9e2afac847214976039177a2f412bd80"
  },
  {
    "url": "tag/Spring/index.html",
    "revision": "de059ec00a4257272ceb37a98f96ebbc"
  },
  {
    "url": "tag/SpringBoot/index.html",
    "revision": "6c658dc7452d751cfec3a24d5058c89a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "5df6908b3b42060d5bd87be6673fd0b5"
  },
  {
    "url": "tag/分享生活/index.html",
    "revision": "568b30e586a28a8a8cff1f72754d74f8"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "b4bbb40ec92204f3fafcf27b02e230d2"
  },
  {
    "url": "tag/面向对象/index.html",
    "revision": "67b4d583d87a93acf52beb1298d4919a"
  },
  {
    "url": "timeline/index.html",
    "revision": "6031caeb84909fa46b303d2ffdf73c9a"
  },
  {
    "url": "作者简介/author.html",
    "revision": "3f819267faa6ea717f09a5a6e8ab9319"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "fe59febff9caa78dcfe7401ed95f1d48"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "d2c8fc050af565d23a6915d13d01bd8b"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "db394e61e0467eb9733c5c71e67f33d8"
  },
  {
    "url": "生活分享/life.html",
    "revision": "3684ac19b0d461b6aea098d24c5bae45"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
