import totast from './toast'
import handleToken from './token'

const Authorization = `${handleToken.get().token_type} ${handleToken.get().access_token}`;

class publicRequest {
  static get({url, data={}, header={}, isJson=false, hasToken=true}) {

    let contentType = isJson ? 'application/json' : 'application/x-www-form-urlencoded';
    let _header = Object.assign({'content-type': contentType}, hasToken ? {'Authorization': Authorization}: {}, header);

    let hasNetWork = checkNetWork();
    console.log(hasNetWork)
    if (!hasNetWork) {
      totast.msg('网络异常', {});
      return false;
    }

    return new Promise((resolve, reject) => {
      wx.request({
        url,
        header:_header,
        dataType: 'json',
        method: 'GET',
        data,
        success: (res) => {
          if (res.statusCode === 200) {
            resolve(res.data);
          }
        },
        fail: (error) => {
          reject(error);
        },
        complete: (res) => {
          if (res.statusCode !== 200) {

            totastMsg({
              statusCode: res.statusCode,
              message: res.data.msg
            });
          }
        }
      })
    })
  }

  static post({url, data={}, header={}, isJson=false, hasToken=true}) {

    let contentType = isJson ? 'application/json' : 'application/x-www-form-urlencoded';
    let _header = Object.assign({'content-type': contentType}, hasToken ? {'Authorization': Authorization}: {}, header);

    let hasNetWork = checkNetWork();

    if (!hasNetWork) {
      totast.msg('网络异常', {});
      return false;
    }

    wx.showLoading({
      title: '加载中...'
    })
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        header: _header,
        method: 'POST',
        data,
        dataType: 'json',
        success: res => {
          if (res.statusCode === 200) {
            resolve(res.data);
          }
        },
        fail: (error) => {
          reject(error);
        },
        complete: res => {
          if (res.statusCode !== 200) {
            let isLogin = url.includes('token');
            let message = isLogin ? res.data.error_description : res.data.msg;
            totastMsg({
              statusCode: res.statusCode,
              message
            });
          }
          wx.hideLoading();
        }
      })
    })
  }
}

const totastMsg = function ({statusCode, message}) {
  switch (statusCode) {
    case 502:
      totast.msg('服务器错误', {});
      break;
    case 401:
      totast.msg('用户无权限访问', {});
      break;
    default:
      totast.msg(message, {});
      break;
  }
}

const checkNetWork = async function () {
  let isConnected = false;
  wx.onNetworkStatusChange(function(res) {
    isConnected = res.isConnected;
  })
  console.log(isConnected)
  return isConnected;
}

export default publicRequest
