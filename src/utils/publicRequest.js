import totast from './toast'

const Authorization = 'Bearer xxx';
class publicRequest {
  static get ({url,data={}}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'https://imondo.cn' + url,
        // header: {
        //   'Authorization': Authorization
        // },
        dataType: 'json',
        method: 'GET',
        data,
        success: (res) => {
          resolve(res.data)
        },
        fail: (error) => {
          totast.msg(error.errMsg, {});
          reject(error)
        }
      })
    })
  }

  static post ({url, data={}, isJson=false}) {

    let contentType = isJson ? 'application/json' : 'application/x-www-form-urlencoded';

    wx.showLoading({
      title: '加载中...'
    })
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        header: {
          'content-type': contentType,
          'Authorization': Authorization
        },
        method: 'POST',
        data,
        dataType: 'json',
        success: (res) => {
          wx.hideLoading();
          resolve(res.data);
        },
        fail: (error) => {
          wx.hideLoading();
          totast.msg(error.errMsg, {});
          reject(error);
        }
      })
    })
  }
}

export default publicRequest