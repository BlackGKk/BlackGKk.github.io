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
    "revision": "6ffc9335c2f0b22ad61974e922bb01a9"
  },
  {
    "url": "assets/css/0.styles.c986e881.css",
    "revision": "a42f4bd6b90ab87430d2b9ff5d1dc994"
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
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.267254bb.js",
    "revision": "e1122f8868c4e6315e8a7bf11d315b22"
  },
  {
    "url": "assets/js/10.3e94535d.js",
    "revision": "8f92585f2c257ab4fdc9c04b9a4e6b04"
  },
  {
    "url": "assets/js/11.cf8bfb2f.js",
    "revision": "06ffa0bb3165b1d8ec2e19e1297c6565"
  },
  {
    "url": "assets/js/12.4881051f.js",
    "revision": "34daa3004d2519dbf33b84631dcb4446"
  },
  {
    "url": "assets/js/13.ea886991.js",
    "revision": "be3611cdff46e36d7057249212152dc3"
  },
  {
    "url": "assets/js/14.acac3f04.js",
    "revision": "e68dd2e637e51c551911118a9acea6ea"
  },
  {
    "url": "assets/js/15.e8d3ea25.js",
    "revision": "4af495968cb4e72dfefdb55963743c7f"
  },
  {
    "url": "assets/js/16.a65a16f6.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.78a99eaa.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.9152c63f.js",
    "revision": "32a5f8ea1bf0cef421b33b6bffbb0016"
  },
  {
    "url": "assets/js/4.7ba65a8e.js",
    "revision": "2971ff8699ce6f0f8b7e5017c3ef1a5e"
  },
  {
    "url": "assets/js/5.38ad200e.js",
    "revision": "7cca75e8e4ba93d3c9450f7abb9a64a5"
  },
  {
    "url": "assets/js/6.e9124f59.js",
    "revision": "1ec20a6e7e67382f2246b0f1365beaf5"
  },
  {
    "url": "assets/js/7.f99d6d8e.js",
    "revision": "7d30b98bfd57db7181109a2a075025be"
  },
  {
    "url": "assets/js/8.b9207daf.js",
    "revision": "cbe2e70db850a968b3fe5ccba1bccd99"
  },
  {
    "url": "assets/js/9.c432a680.js",
    "revision": "bca34c4ae9ae3c148ea244fbbf490c70"
  },
  {
    "url": "assets/js/app.b6045e56.js",
    "revision": "2539df8b3d60731b6b3d9bd35531a33b"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.8e492b97.js",
    "revision": "5f74bb947a906e821af871857bb92c32"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "fbecb417bacfaaad83096fd46e883b6e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "437b17dcc1e6ec11b15e4c481393034f"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "91878ccd8476be79c95a47d245e17e12"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "31937a5912ae54eb64ed8023e67a6578"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "f17e0adb5287e24a7c78e04bcdef1b5c"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "be8d3e22b64348814ef879523d7bf3c1"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "2caa415c87ec2dc53592379c7c316e5e"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8b9c5420c52235a7d6a5004bb3b5ec38"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "b7e645175df18484bc5ff7126c20c7e5"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "346219e3a642667ea7e9b893338e5a62"
  },
  {
    "url": "tags/js/index.html",
    "revision": "67625c46e8b5ca6de2db30b6ae167390"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "1c36771d54926b3d2fabfeff5305eec9"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "373967241728edc589a6febebabe4438"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c67e70b7265d0b66d6ad2b014954f3d3"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "aba819c32d1172ce7950590e7c0c06cf"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "dbd33b2fb96a868afe70664c468859d6"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "3e2a58a895d3abd4e4fee9362f7b420d"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "02be7bd751bfebba923c395d95d8711c"
  },
  {
    "url": "timeline/index.html",
    "revision": "074140658c1790680b660c419532a922"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "569232e47334c1b59ab84d7a78049116"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "e8f2a979dd95ac1c96c6e1cf489bdd50"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "c8442cf6785746e3369ab9d8a090df77"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "352510c26c868beac4343b170d0b6a07"
  },
  {
    "url": "生活分享/life.html",
    "revision": "23b552650e528f57404cdc0b8f0f4a44"
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
