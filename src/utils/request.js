import config from "./config";
export const appPost = (url, data) => {
  return new  Promise(function (resolve, reject) {
    wx.request({
      url: config.API_SERVER + url,
      data: data,
      method: 'POST',
      success: function (res) {
        resolve(res);
      },
      fail: function (err) {
        reject(err);
      }
    });
  });
}
