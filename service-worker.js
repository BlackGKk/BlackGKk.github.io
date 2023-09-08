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
    "revision": "ae9bede0eeea373766c1d551f7e2dce0"
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
    "url": "assets/js/10.f5874a28.js",
    "revision": "000c4537de3186ccb7c2807b170eb723"
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
    "url": "assets/js/15.8ef1f0d5.js",
    "revision": "3d2d5c3ab69c58cd574a5e782cadd3a1"
  },
  {
    "url": "assets/js/16.00e01161.js",
    "revision": "6fb5d69b0b8475222c9933f468037bfd"
  },
  {
    "url": "assets/js/17.8c13fdd7.js",
    "revision": "bae80a2017fd25053aa787c01cc1104c"
  },
  {
    "url": "assets/js/18.afc76576.js",
    "revision": "e619eebbc27b4877e7d32bf124faf3c0"
  },
  {
    "url": "assets/js/19.7db26fbd.js",
    "revision": "4d865cf078f8399b032a82fe72bb92de"
  },
  {
    "url": "assets/js/20.72dddebc.js",
    "revision": "9f4f49d5324007620fd88a40623596d0"
  },
  {
    "url": "assets/js/21.af3d74a8.js",
    "revision": "c85436f1ed43cac89b6caee44c541c9b"
  },
  {
    "url": "assets/js/22.944c7766.js",
    "revision": "39c9f62d90dec4d35b3bdc596d067691"
  },
  {
    "url": "assets/js/23.9565d7bd.js",
    "revision": "347d59b169fd23d47a9a96aae53715d1"
  },
  {
    "url": "assets/js/24.49bc91f4.js",
    "revision": "31d7ec3d1d4bd4ece4c3ea6630fb2dac"
  },
  {
    "url": "assets/js/25.f5b0ca02.js",
    "revision": "89b9badec36b8ea2a382c78cb56d0d4f"
  },
  {
    "url": "assets/js/26.d2fcd0a6.js",
    "revision": "25aa945d3f9342847b83afe17f8923e5"
  },
  {
    "url": "assets/js/27.7b602080.js",
    "revision": "b456cda030de5eb674e6c06108b1c4eb"
  },
  {
    "url": "assets/js/28.57e15473.js",
    "revision": "a9be922ab4d4a9318ffc50a0c626f412"
  },
  {
    "url": "assets/js/29.b46306d6.js",
    "revision": "de481732e2aa418702dc3902c914e621"
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
    "url": "assets/js/app.c4ac1bb4.js",
    "revision": "4b57240254b1f80823cf562b0a9f31db"
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
    "revision": "72624cc129c1c20d09307367e96b3e3e"
  },
  {
    "url": "categories/index.html",
    "revision": "e9c180410211a80370b9175e310d7cce"
  },
  {
    "url": "categories/Mongodb/index.html",
    "revision": "abd2e0610d9d141f3de5d4308f8d7b00"
  },
  {
    "url": "categories/node/index.html",
    "revision": "9e0b350b1858ba4fb85b92a7c446c893"
  },
  {
    "url": "categories/TS/index.html",
    "revision": "19d46db05e53f5b60bf41e6329dd4555"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "e3bbf381d53be847d9341d018e01d9cb"
  },
  {
    "url": "categories/vue/page/2/index.html",
    "revision": "ce67e41f6314384953437bad6b3c0125"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "5bb983544077425eb5e966e185694542"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "953590ab49499138273c8db978271191"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "c262c9af5f8446eec59f9021eeb53ec3"
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
    "revision": "86b7517e4b9b97b30a3c4ea248942e71"
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
    "revision": "ef9ee7b066bdd9d8af09dbb21167d451"
  },
  {
    "url": "tag/All/page/2/index.html",
    "revision": "25c441eeffd82017f1f43cfe9cd282d5"
  },
  {
    "url": "tag/Blog/index.html",
    "revision": "c8ce9030cc67a7f0957bdc4295cea1c4"
  },
  {
    "url": "tag/index.html",
    "revision": "402ae7af0c784e6220db68c4d692666b"
  },
  {
    "url": "tag/Mongodb/index.html",
    "revision": "7bdc9f9ed21ced461812043d6a09d327"
  },
  {
    "url": "tag/node/index.html",
    "revision": "c53a3aadd23af2bbdb0c810c300a87ea"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "321067345ad79e7d8a7d0999de5a2ece"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "63162aafadab7b09747a8132469a90a2"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "ccb2ebe5ced071fdc82f28352f491b8f"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "cc3913b69ad774eba052eda23099ee2f"
  },
  {
    "url": "timeline/index.html",
    "revision": "93738fdc0676a2a64692521e694b7134"
  },
  {
    "url": "作者简介/author.html",
    "revision": "1123ac72759c188f1abf312db461e57e"
  },
  {
    "url": "其他/markdown.html",
    "revision": "9979b37a0ffa6b931a631705ef3abd39"
  },
  {
    "url": "技术文章/node/bcryptjs加密.html",
    "revision": "15f16abae8151345a487c77b873716a9"
  },
  {
    "url": "技术文章/node/nodemailer.html",
    "revision": "c97ecb4584f0a40593146a9ccf761bd2"
  },
  {
    "url": "技术文章/SQL/mongoose.html",
    "revision": "68569f2fea7ff15ea9bdf87616f7ed20"
  },
  {
    "url": "技术文章/Ts/ts01.html",
    "revision": "e0332aa62946770231d3e42b86943a14"
  },
  {
    "url": "技术文章/Ts/ts02.html",
    "revision": "783889cd4d9c448c6ba4bb949920df97"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5f0ae20d5e68a6d8e9258bf5f7f7f11f"
  },
  {
    "url": "技术文章/vue/vue02.html",
    "revision": "66c46805a88dd7f53d77bbb99a871f9a"
  },
  {
    "url": "技术文章/vue/vue03.html",
    "revision": "5f56b3b3ec9f292c331586aa570cc3dd"
  },
  {
    "url": "技术文章/vue/vue04.html",
    "revision": "be7a11179ba484e40389a08baea71e82"
  },
  {
    "url": "技术文章/vue/vue05.html",
    "revision": "e9e63f6d5209fc9fdf2283a265ce847b"
  },
  {
    "url": "技术文章/vue/vue06.html",
    "revision": "ea38e4578513839e3a20ac52a8fe8f5b"
  },
  {
    "url": "技术文章/vue/vue07.html",
    "revision": "af68edd415e3dc1e51830f9ba77cd3fd"
  },
  {
    "url": "技术文章/vue/vue08.html",
    "revision": "37b572447c94ca4930d924cf44c2e764"
  },
  {
    "url": "技术文章/vue/vue09.html",
    "revision": "e4872a9c25133f5e4524208c5dc3eaf1"
  },
  {
    "url": "技术文章/vue/vue10.html",
    "revision": "27e6e20590de54c024e740b058ddbf21"
  },
  {
    "url": "技术文章/vue/vue11.html",
    "revision": "6185e22af75a73430a027e9e3c305f62"
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
