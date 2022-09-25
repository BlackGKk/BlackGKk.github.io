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
    "revision": "cb31b5e531147ad5d7240e3f61238607"
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
    "url": "assets/js/13.cd66c14e.js",
    "revision": "88907df55ddf0e92e7d824fee3f0a94f"
  },
  {
    "url": "assets/js/14.93df3760.js",
    "revision": "cc6353588aaf3730546012d0bec820b8"
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
    "url": "assets/js/17.22ecac8d.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
  },
  {
    "url": "assets/js/18.558301ea.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
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
    "url": "assets/js/app.022215fd.js",
    "revision": "e2f1314d574d705e390a0a4295f6da29"
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
    "revision": "ae9750e3e378d48761b87f07e679fe72"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7e0f210f2229277084705d7d1b8396d4"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "69b793823b03d03dc2205adca3f05d77"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c2ff2bbd3a74bd15c2f840974fba355a"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "545572e2bf0552a325e53e43d812981c"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "4d76a0a937899563fb3263d3d5d08295"
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
    "revision": "e79d225e35fd7d2b5d643580e37a46ef"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "559d7bb31ace19ab1d1d12b818f06c1f"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "24d201d37910a475d01d09e433bb8816"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "52e6803b990d3cf0bf11ead7903cb9c9"
  },
  {
    "url": "tags/js/index.html",
    "revision": "8889a4fae100a87c5f8ceeb3c731a1b3"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "9410b57bcf322b65f3ff1db1094f1523"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "a5f1180ee4ec790a83580c28543e63e6"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "983a38975cce695d03cfb850d175c05a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "8f35c3813efe226d7ed99fa5068d95fc"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "ad34b8042b7352740f30d391bd4510ee"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "8aa04725f43f80a5547da869d5d852fd"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "73ab6c40c725d311e9f710d22730eb27"
  },
  {
    "url": "timeline/index.html",
    "revision": "cf767d999c67db8f24d9dfb057f19265"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1cefb70bfa689e7ce30a51c9fb01a539"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "d74b50a6db03b08f42e0a7eeeff77590"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "72f1f36c14537a11240ce84fbda7fd31"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "1d9af2fc20ef5c0b9d2b6df9b590188d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e1c805c5bbd9ba16285981547feb4551"
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
