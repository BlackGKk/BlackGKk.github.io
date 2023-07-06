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
    "revision": "03dbcddf3c09e68c948a176d95a3c09f"
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
    "url": "assets/js/10.e64e34ed.js",
    "revision": "225873871ada102559507782cfebb21a"
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
    "url": "assets/js/13.9061b5db.js",
    "revision": "9febf6910e765d61817819960cfff54a"
  },
  {
    "url": "assets/js/14.5fa4daab.js",
    "revision": "93d9380d20138fd327c6cca5b58a8832"
  },
  {
    "url": "assets/js/15.e6bd8748.js",
    "revision": "c18a7af5135bafce069f11d99b6e4ea1"
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
    "url": "assets/js/18.11da32aa.js",
    "revision": "508f5bfa12f73471e3b55945b712f6bb"
  },
  {
    "url": "assets/js/19.6e2b2b9e.js",
    "revision": "e3bff8d8ad184cf1fbf79ade92a89ef6"
  },
  {
    "url": "assets/js/20.5e8fc286.js",
    "revision": "8b59d2e1a7b3a43db92c207d6d1102d9"
  },
  {
    "url": "assets/js/21.80e92cda.js",
    "revision": "340aeadd8ef5898902a928a4e474782d"
  },
  {
    "url": "assets/js/22.2bac97f0.js",
    "revision": "0563f0829707be84aaff169b72b562bb"
  },
  {
    "url": "assets/js/23.07d4dd86.js",
    "revision": "b40fad0b6f9f58fc80b7434c2cf7277c"
  },
  {
    "url": "assets/js/24.4b14fcee.js",
    "revision": "946b3094f4bd79e4a65256cbee5b3053"
  },
  {
    "url": "assets/js/25.fa80a000.js",
    "revision": "3b15bc2f86c1cb895af582caa1e7b263"
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
    "url": "assets/js/app.6fffdca7.js",
    "revision": "2e8800a8bd5085924e804aff176d9ec1"
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
    "revision": "e15ff7cf6b97b9167e352312e66fa4fc"
  },
  {
    "url": "categories/index.html",
    "revision": "63e2355d52aee6137cb897d2dd90567c"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "f068e8de5bd9cad9f0e1a98491145666"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "b1fd366b89b1602fd89f909c0cb28e19"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d8aa9ce7803e9510b598c2d1f532e078"
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
    "revision": "2f093827760817c94da04dfdeddee60c"
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
    "revision": "eec8719ede145c6f358ac9498f929b78"
  },
  {
    "url": "tag/All/page/2/index.html",
    "revision": "61adec5d2fad696624e887741dcde4d6"
  },
  {
    "url": "tag/Blog/index.html",
    "revision": "0a43cae2b445f056cb15a37c7b2c3dec"
  },
  {
    "url": "tag/index.html",
    "revision": "158cc7138eec8431f3bea1d44bac93e5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c46f3baaf13bc59bec43c0a10b52e26c"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "390b5174b6d49b0d256616584f2ede2d"
  },
  {
    "url": "timeline/index.html",
    "revision": "f3d84195e119945aac5caeb87284b20b"
  },
  {
    "url": "作者简介/author.html",
    "revision": "94255c2a0bc74acd94e4d3af0cad1634"
  },
  {
    "url": "其他/markdown.html",
    "revision": "463d873e9b646820790463d3654960ae"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "26887f0817cfe2aa513ddea4f380e9c8"
  },
  {
    "url": "技术文章/vue/vue02.html",
    "revision": "32437befffd61121fd7a601963dc3d2f"
  },
  {
    "url": "技术文章/vue/vue03.html",
    "revision": "14a934ebf8d93d574a3adb0b4f547087"
  },
  {
    "url": "技术文章/vue/vue04.html",
    "revision": "054a352e97b824b984337a3e50ecf81a"
  },
  {
    "url": "技术文章/vue/vue05.html",
    "revision": "8ca70b5b43d090b99c860e8f3f3bd5e7"
  },
  {
    "url": "技术文章/vue/vue06.html",
    "revision": "edc378143d841bbc495154ed4b88ecb2"
  },
  {
    "url": "技术文章/vue/vue07.html",
    "revision": "b89a99a430ea1bda80b9579223b65031"
  },
  {
    "url": "技术文章/vue/vue08.html",
    "revision": "bab5725460a0e5eb39d668933aae2970"
  },
  {
    "url": "技术文章/vue/vue09.html",
    "revision": "6c9d59c2c8653fd4e25d4570a0b39297"
  },
  {
    "url": "技术文章/vue/vue10.html",
    "revision": "718609051dea89d30fdb46764f5b3e88"
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
