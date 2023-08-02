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
    "revision": "bd6926497c6e9b4bdb4f2b743d1987ed"
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
    "url": "assets/js/13.41bd241e.js",
    "revision": "3bc7e9fec63750a6d9a457ba06bf8cc5"
  },
  {
    "url": "assets/js/14.8ec5bd3a.js",
    "revision": "fc0e29be713ae746a1910d33acb554fe"
  },
  {
    "url": "assets/js/15.5b928e85.js",
    "revision": "0be16f8504d90e03dec77b1d21034c98"
  },
  {
    "url": "assets/js/16.d23911cb.js",
    "revision": "f78a8ff470d60697c585b930275f0b8f"
  },
  {
    "url": "assets/js/17.95a5f6ac.js",
    "revision": "ab530495ae2ccd168a52d26b3bc88826"
  },
  {
    "url": "assets/js/18.ae8e32ec.js",
    "revision": "5503b0d5c13ac9e8c24798f39af35819"
  },
  {
    "url": "assets/js/19.18a71b4e.js",
    "revision": "c474bef2de3086875e09d85afe8b26d2"
  },
  {
    "url": "assets/js/20.7449b5e4.js",
    "revision": "07c1144c0cc797b85e4ff4286ebc65f0"
  },
  {
    "url": "assets/js/21.17fd63b4.js",
    "revision": "81d6131e48a0c59953c243da5502fcf1"
  },
  {
    "url": "assets/js/22.2305375c.js",
    "revision": "b8abfb112654eb3c5e63c5396805bad1"
  },
  {
    "url": "assets/js/23.ec24704f.js",
    "revision": "a8d4ecef245c3e9aa272d8f93aaaf65d"
  },
  {
    "url": "assets/js/24.588c4b59.js",
    "revision": "89e776eeac53d8e215fdb8a07082f201"
  },
  {
    "url": "assets/js/25.7b4c2774.js",
    "revision": "ad9a2a43b16ef7b9cf334642fb59d15a"
  },
  {
    "url": "assets/js/26.f123e268.js",
    "revision": "1e2351eda8783123c4458e667a4ad8de"
  },
  {
    "url": "assets/js/27.91d00be7.js",
    "revision": "8d6c1c852a1db604eda66d7bc9d3caad"
  },
  {
    "url": "assets/js/28.84628b2b.js",
    "revision": "309322541d4091463d1568145784fdb5"
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
    "url": "assets/js/app.9512b71f.js",
    "revision": "8c24a77af11cfb363711241ce8405124"
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
    "revision": "2322f2e470cedf37c34cb74e453a9497"
  },
  {
    "url": "categories/index.html",
    "revision": "7a901e37957c57432a475cbe48fb5d37"
  },
  {
    "url": "categories/TS/index.html",
    "revision": "24068c8085364cbc883b22d5642dc2f7"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "7e75c0b0b4fee410e63c34c7625c34f8"
  },
  {
    "url": "categories/vue/page/2/index.html",
    "revision": "763324eecb373c3bb7ccf2f9362ea701"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "b394841dce628723c24cb0115b30baac"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "985431ae3f0013d485d20b1629908ba1"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "fe3f80ac1bed281650dbb966932c54f2"
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
    "revision": "ca713ef17dc3f8b5095ce9746e8ba1f0"
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
    "revision": "771a8e32ddeeaad85ecf5d15b5333e7d"
  },
  {
    "url": "tag/All/page/2/index.html",
    "revision": "dd13bcb6b69990ab3063437bd883c092"
  },
  {
    "url": "tag/Blog/index.html",
    "revision": "cec254bbba6e453ca24d888e684d54de"
  },
  {
    "url": "tag/index.html",
    "revision": "95ee2c0231fbccbb5f2d1ee8dd271328"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "0bd33cfd67cb15e68af030a7efdedfff"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "86ec251239ea10b372e449e900f5e0a4"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "26a6916a9f95c31f6974712056abb63b"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "5ce5f2efbd0cae6d3f1c8a7b9b311bd2"
  },
  {
    "url": "timeline/index.html",
    "revision": "92847f8d4c232924971998e5d9b527c1"
  },
  {
    "url": "作者简介/author.html",
    "revision": "8d8592588f843fd5cab7f87017870d32"
  },
  {
    "url": "其他/markdown.html",
    "revision": "9da4d5020c1ade2fc507bd16f603900c"
  },
  {
    "url": "技术文章/Ts/ts01.html",
    "revision": "b1d821afa23796a80eecab60546469d1"
  },
  {
    "url": "技术文章/Ts/ts02.html",
    "revision": "1dcdb14e6fd524063737aa74f555f1e8"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "afdce1f59495aa4eba8b83f416ac1ec2"
  },
  {
    "url": "技术文章/vue/vue02.html",
    "revision": "173848ccdf54d058d12740affad1f6d8"
  },
  {
    "url": "技术文章/vue/vue03.html",
    "revision": "3657dbfd7ad121f9864398351630040e"
  },
  {
    "url": "技术文章/vue/vue04.html",
    "revision": "70ad1c3887475bdaf51c73b8aebf2ea6"
  },
  {
    "url": "技术文章/vue/vue05.html",
    "revision": "d60be7819dfe32c784225488bb24bfa6"
  },
  {
    "url": "技术文章/vue/vue06.html",
    "revision": "f5fadd839147b792da4aa2922e1f0e41"
  },
  {
    "url": "技术文章/vue/vue07.html",
    "revision": "16e5f8b6d5bd5e63b8002d80eab8b50e"
  },
  {
    "url": "技术文章/vue/vue08.html",
    "revision": "456ac5790736a4210fe863b6117b1bb4"
  },
  {
    "url": "技术文章/vue/vue09.html",
    "revision": "a3bbd67054d0e981c4a764286cfde15b"
  },
  {
    "url": "技术文章/vue/vue10.html",
    "revision": "fceb28f2ba7026a28a7b3fd8a8cd9ce8"
  },
  {
    "url": "技术文章/vue/vue11.html",
    "revision": "060670c54c3ae73d3af7a2695bc4f360"
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
