var AParse = require('../../component/aParse/aParse.js');

Page({
  onLoad(query) {

    let article = `
      <h3>
      <p style="color:orange">钉钉小程序 富文本解析</p>
      <p style="color:blue">视频标签</p>
      <video width="320" height="240" controls>
      <source src="https://vod-progressive.akamaized.net/exp=1579262338~acl=%2A%2F623685558.mp4%2A~hmac=07faab920062ef5b008fa350abb136e822a1b27eecd07ac4052e597b02b4c817/vimeo-prod-skyfire-std-us/01/2670/7/188350983/623685558.mp4"  type="video/mp4">
      </video>
      <p style="color:blue">图片标签</p>
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579257677102&di=f0b843a14422b4517d564a58e3a377c4&imgtype=0&src=http%3A%2F%2Fi1.sinaimg.cn%2Fent%2Fd%2F2008-06-04%2FU105P28T3D2048907F326DT20080604225106.jpg" alt="Smiley face" width="42" height="42">
      </h3>
  `
    /**
     * 使用说明：
    * AParse.AParse(bindName , type, data, target,imagePadding)
    * 1.bindName绑定的数据名(必填)
    * 2.type可以为html或者md(必填)
    * 3.data为传入的具体数据(必填)
    * 4.target为Page对象,一般为this(必填)
    * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
    */

    let that = this;
    AParse.aParse('article', 'html', article, that, 5);
  }
});
