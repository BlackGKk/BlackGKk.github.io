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
    "revision": "ac8fe640cd6258c66d038f4a7a89d75c"
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
    "url": "assets/js/10.bef93eae.js",
    "revision": "3a9edfce2c0f7c87f081bf22cfe74075"
  },
  {
    "url": "assets/js/11.475cd961.js",
    "revision": "f9de0b656656fca4a31474d2a702bbe1"
  },
  {
    "url": "assets/js/12.4b1718e6.js",
    "revision": "2e72639660e07750a2ea03bb4e726194"
  },
  {
    "url": "assets/js/13.bc857583.js",
    "revision": "8bbeb9663cf36ac90f6337fdf256211f"
  },
  {
    "url": "assets/js/14.01aac031.js",
    "revision": "9314e4250bcd4d263778dc202ee0f946"
  },
  {
    "url": "assets/js/15.26f19424.js",
    "revision": "e8a65694e09898244af1e1cd2d6a5c03"
  },
  {
    "url": "assets/js/16.026b7332.js",
    "revision": "56264e230f4265701e683fab3bfe08b5"
  },
  {
    "url": "assets/js/17.0b7a67b7.js",
    "revision": "c2efbfc61e2712cdc2b5dcb433a7c339"
  },
  {
    "url": "assets/js/18.2605f96e.js",
    "revision": "4307894d402a2c91f3685471cf564aef"
  },
  {
    "url": "assets/js/19.b8376da9.js",
    "revision": "cfe618091f23b5434bc3af8bf6c65b5b"
  },
  {
    "url": "assets/js/4.2cad79e6.js",
    "revision": "b23cb3abb08fb84a3f6a2d1cb13e4eb7"
  },
  {
    "url": "assets/js/5.d93665a6.js",
    "revision": "9a4cc07de786c0163941a63e9c885081"
  },
  {
    "url": "assets/js/6.3a69f474.js",
    "revision": "c79842edc9bab0d45bc1b36cb8acb3eb"
  },
  {
    "url": "assets/js/7.679e515c.js",
    "revision": "1585e675e586f178c1c4b0e1de224867"
  },
  {
    "url": "assets/js/8.8ad0910c.js",
    "revision": "ef06fccb7114e945ea4e84f08349ea2f"
  },
  {
    "url": "assets/js/9.0bdf5e37.js",
    "revision": "892cd850562ff89bd0745fe5659ddfe7"
  },
  {
    "url": "assets/js/app.0807934b.js",
    "revision": "d7a025bd48e0bc1b5b0d785d79ed72fc"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.085c4f0c.js",
    "revision": "b0f69481fb3b0c78b9394576c67e27a4"
  },
  {
    "url": "author.gif",
    "revision": "e54333660a323c0a36bf4eca57be62b0"
  },
  {
    "url": "categories/Blog/index.html",
    "revision": "ec9a840d0ad3f9d5072e878e6369e447"
  },
  {
    "url": "categories/index.html",
    "revision": "a3c9ce64f9f02034a9445f90eba70724"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "81ad98f3c0866fe969c063bed1098461"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "5bf1825a22313559aa3aa3157aa75a96"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5716b4d365f37b44b6b1c0db10709d43"
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
    "revision": "f6b635022f220087c7b95caf870d7e31"
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
    "revision": "9bb64d36448ccae297d587491b8fa8fe"
  },
  {
    "url": "tag/Blog/index.html",
    "revision": "1fcac8b7d79ca6ccce0951be50a92a57"
  },
  {
    "url": "tag/index.html",
    "revision": "437615561c1d78821ebfd2a6ea7b9e98"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "19a02026d26d8c0e14b0cd847939cf6a"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "3ff48612657412b54086f106951adbe8"
  },
  {
    "url": "timeline/index.html",
    "revision": "9ebfc4997b38ff2403f230f3318c49b6"
  },
  {
    "url": "作者简介/author.html",
    "revision": "075fc26dd88a034c168553ab5e97d210"
  },
  {
    "url": "其他/markdown.html",
    "revision": "1bda0a0703a35eb83605cfe1df12a702"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5a41a5b92df52a798a3703d0db1e89ce"
  },
  {
    "url": "技术文章/vue/vue02.html",
    "revision": "813036e380df8abc4b02b224645093b1"
  },
  {
    "url": "技术文章/vue/vue03.html",
    "revision": "8e608e3ea322c3cfabd5c20be5564309"
  },
  {
    "url": "技术文章/vue/vue04.html",
    "revision": "1bb0ff659aeea2c9a2bf7f5fcb14e650"
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
