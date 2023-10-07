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
    "revision": "2a7a94c4078cd2b17159326b6dfa16ba"
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
    "url": "assets/img/2023-06-03-21-32-24.5f45cd8e.png",
    "revision": "5f45cd8e1d4dcea6e3cb8e3bc6345252"
  },
  {
    "url": "assets/img/2023-06-16-21-23-33.1ac8945c.png",
    "revision": "1ac8945c0402283fcecc766ef409b0da"
  },
  {
    "url": "assets/img/2023-07-05-21-04-43.8d37d959.png",
    "revision": "8d37d9597431770c0720f7da1b227a13"
  },
  {
    "url": "assets/img/2023-07-05-21-05-05.f1167f7c.png",
    "revision": "f1167f7c04a93515d9f71216f402005e"
  },
  {
    "url": "assets/img/2023-07-05-21-05-56.c2eb6359.png",
    "revision": "c2eb635908cbff27efaa39c152cfed2e"
  },
  {
    "url": "assets/img/2023-07-05-21-06-12.e7e4356e.png",
    "revision": "e7e4356ec93bc6ea0beebd608a125b7f"
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
    "url": "assets/img/image.350a27ed.png",
    "revision": "350a27edfaf2cc34c5197c9498cd4c2f"
  },
  {
    "url": "assets/js/1.9c1910d2.js",
    "revision": "668fa8d0d80a64bc38d28c20a1166bb8"
  },
  {
    "url": "assets/js/10.7c9defd3.js",
    "revision": "e0f2b25e6f800f7d69170c42e043662a"
  },
  {
    "url": "assets/js/11.3d010f67.js",
    "revision": "ea35cd69e8d479f5961c1690e3d377e1"
  },
  {
    "url": "assets/js/12.d73593d8.js",
    "revision": "abbc9e804b1567fa07e011eb16c04b22"
  },
  {
    "url": "assets/js/13.3257b063.js",
    "revision": "4984338dbea989f360451fdd6703f32b"
  },
  {
    "url": "assets/js/14.c23d7bd8.js",
    "revision": "dd5103afc056505e33ad33eb11d99ac7"
  },
  {
    "url": "assets/js/15.92a28967.js",
    "revision": "04f16ee00b9f7255abbea54717bc523c"
  },
  {
    "url": "assets/js/16.da2cdf50.js",
    "revision": "336a385180a81f32297ad5122f9365f9"
  },
  {
    "url": "assets/js/17.8c13fdd7.js",
    "revision": "bae80a2017fd25053aa787c01cc1104c"
  },
  {
    "url": "assets/js/18.08f8dee7.js",
    "revision": "3629314a268b9f8f1512eb78820a3691"
  },
  {
    "url": "assets/js/19.cb2ba1ac.js",
    "revision": "cffdeaeba257752616299abf6cf671ef"
  },
  {
    "url": "assets/js/20.bd078c15.js",
    "revision": "0f666b9b0ed2d590d91518bea6ed1f55"
  },
  {
    "url": "assets/js/21.0dc4d6e4.js",
    "revision": "ce5ba6d06d098b0c8f1adc2491723396"
  },
  {
    "url": "assets/js/22.ee2e193e.js",
    "revision": "7904c3baa81d8b5e618c0618e90ada10"
  },
  {
    "url": "assets/js/23.454189b9.js",
    "revision": "90b6b45396837aa1c64fd8c012e70f1f"
  },
  {
    "url": "assets/js/24.7e8d3b6a.js",
    "revision": "038eb493b28efb9161c2b06ec039576a"
  },
  {
    "url": "assets/js/25.d7b09300.js",
    "revision": "b6bf14d45c8623addcb2b72d0979c60b"
  },
  {
    "url": "assets/js/26.4a4dfd8a.js",
    "revision": "d603b66d59446bb0381d81967430ef7c"
  },
  {
    "url": "assets/js/27.dc06d398.js",
    "revision": "44dbc7c8bc90ef3d3414dc6b48e046ab"
  },
  {
    "url": "assets/js/28.bc073c56.js",
    "revision": "4b8e8c2ab152b72d62057c0ee3301b6a"
  },
  {
    "url": "assets/js/29.cfc40299.js",
    "revision": "49859de1be152e57e1f95cad29575a23"
  },
  {
    "url": "assets/js/30.8d06017c.js",
    "revision": "3e3462d4749239748b3125ea37ed32ae"
  },
  {
    "url": "assets/js/31.f4d11156.js",
    "revision": "150ff447e71a089880328a4fd485da55"
  },
  {
    "url": "assets/js/4.7f8c691b.js",
    "revision": "98fd0bdcc1e8879b0c9b6035b8fd4489"
  },
  {
    "url": "assets/js/5.6708d07b.js",
    "revision": "b84080cb047032675bd9b910e9c31156"
  },
  {
    "url": "assets/js/6.85117c63.js",
    "revision": "a0324c4eb678d937ddc2b689705b0ea4"
  },
  {
    "url": "assets/js/7.c42a5726.js",
    "revision": "f13aba8eb5a1ffd306997c1012d3d320"
  },
  {
    "url": "assets/js/8.baeea29a.js",
    "revision": "99f130473d8f58ff9474a4a418117890"
  },
  {
    "url": "assets/js/9.a1f4ffcb.js",
    "revision": "b225a5bf6a6dcb1a5b701fa83e2afcc8"
  },
  {
    "url": "assets/js/app.c9e41727.js",
    "revision": "3cee0a0a9776f9b5f49ecb0b69a7ce06"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.596fe88f.js",
    "revision": "16be51f2b97428268d4b9cf78b82c750"
  },
  {
    "url": "author.gif",
    "revision": "e54333660a323c0a36bf4eca57be62b0"
  },
  {
    "url": "categories/Blog/index.html",
    "revision": "ac6bdcd61357ad7e8a852200d9e59fac"
  },
  {
    "url": "categories/index.html",
    "revision": "5c1ef2d6a0ffd765a989a10ab4f47b4d"
  },
  {
    "url": "categories/Mongodb/index.html",
    "revision": "786052a4baeb84bf91eec9d21bca2ce4"
  },
  {
    "url": "categories/node/index.html",
    "revision": "e9d12eb3c69d18a04900461006f797f7"
  },
  {
    "url": "categories/TS/index.html",
    "revision": "cdf05e64337df69f87bf9689fd07254d"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "a7675785ecaea274bbdba1b60902a994"
  },
  {
    "url": "categories/vue/page/2/index.html",
    "revision": "e908210b36878bb3c506beda88987f2f"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "1291c0606c3cda1cc2e2e114a99813ca"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e4729e9663f53890f6277ad155dcaf36"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "1117ab6acb422cfb92c9fcebbc71f7bb"
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
    "revision": "9cd8b47fa5efe462f26add503684e18d"
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
    "revision": "8c45bcd140d6fbc55ea0ca19772b182e"
  },
  {
    "url": "tag/All/page/2/index.html",
    "revision": "3a4d19fe85278916de59c5facf4598f8"
  },
  {
    "url": "tag/Blog/index.html",
    "revision": "367d8534b2307c60f683b50754d6dd1b"
  },
  {
    "url": "tag/index.html",
    "revision": "505e99ec715bcdfa9e0d42db459efce7"
  },
  {
    "url": "tag/Mongodb/index.html",
    "revision": "7503d0dc3b04c2c8ec640ba791618087"
  },
  {
    "url": "tag/node/index.html",
    "revision": "b290ea9283f15733ee3b03d64ce5975f"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "ced6eaa44107b2ca4dd3062c8cd41bab"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "113b793a05e1f98418f266c82fe55f80"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "d787273103219f93d4409c401ffcf205"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "d0509e17566ce14b4b7961eaf34ca5ca"
  },
  {
    "url": "timeline/index.html",
    "revision": "e413b6e75a9a81f44c60e26aa46a9279"
  },
  {
    "url": "作者简介/author.html",
    "revision": "d7f1515acd5bd2ebe0834854d82a7ba1"
  },
  {
    "url": "其他/markdown.html",
    "revision": "c3b1fe086dab9643c0f5af29495a8c97"
  },
  {
    "url": "技术文章/node/bcryptjs加密.html",
    "revision": "27991d4542644ca2c2e63959e3fa9af3"
  },
  {
    "url": "技术文章/node/nodemailer.html",
    "revision": "e6bc0ed829f9032e717e95753faddeee"
  },
  {
    "url": "技术文章/SQL/mongoose.html",
    "revision": "410f08bbb3fee162875628398b8b8cb8"
  },
  {
    "url": "技术文章/Ts/ts01.html",
    "revision": "3350be1e7ee5536fc88cb6a68036fc69"
  },
  {
    "url": "技术文章/Ts/ts02.html",
    "revision": "66b9647a5eaf03d586f8ebc93c1ed2f0"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e6ed1f03f024b02a9a07f24e00aa034d"
  },
  {
    "url": "技术文章/vue/vue02.html",
    "revision": "c0e9341ecb13f07b73ad5f8a4587b974"
  },
  {
    "url": "技术文章/vue/vue03.html",
    "revision": "717cb8097769c8e90cafc5fd63675c64"
  },
  {
    "url": "技术文章/vue/vue04.html",
    "revision": "f8cefcc2301622e01e41de319d6ae1f6"
  },
  {
    "url": "技术文章/vue/vue05.html",
    "revision": "98fb85b04624e372dc749068581266b6"
  },
  {
    "url": "技术文章/vue/vue06.html",
    "revision": "9fe0b2f718dee3652eec97cfdb52eaf1"
  },
  {
    "url": "技术文章/vue/vue07.html",
    "revision": "0411a1710928c28636f03198e7767b6c"
  },
  {
    "url": "技术文章/vue/vue08.html",
    "revision": "b869ecbf18f2a3b5f3b891443f8211b8"
  },
  {
    "url": "技术文章/vue/vue09.html",
    "revision": "037e949c789a59f33372a8a3586c0936"
  },
  {
    "url": "技术文章/vue/vue10.html",
    "revision": "234f9634f2da3098921348ec4f461d5c"
  },
  {
    "url": "技术文章/vue/vue11.html",
    "revision": "320ff61da422f5834dd0635a77470166"
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
