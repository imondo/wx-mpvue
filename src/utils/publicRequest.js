import totast from './toast'

const Authorization = 'Bearer xxx'
class publicRequest {
  static get ({url, data = {}, isJson = false, hasToken = true, header}) {
    let hasNetWork = checkNetWork()

    if (!hasNetWork) {
      totast.msg('网路异常', {})
      return false
    }

    let contentType = isJson ? 'application/json' : 'application/x-www-form-urlencoded'
    let _authorization = hasToken ? {'Authorization': Authorization} : {}
    let _header = Object.assign({'content-type': contentType}, _authorization, header)
    wx.showLoading({title: '加载中...'})
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        header: _header,
        dataType: 'json',
        method: 'GET',
        data,
        success: (res) => {
          if (res.statusCode === 200) {
            resolve(res.data)
          }
        },
        fail: (error) => {
          totast.msg(error.errMsg, {})
          reject(error)
        },
        complete: res => {
          if (res.statusCode !== 200) {
            totastMessage({
              statusCode: res.statusCode,
              message: res.data.msg
            })
          }
          wx.hideLoading()
        }
      })
    })
  }

  static post ({url, data = {}, isJson = false, hasToken = true, header}) {
    let hasNetWork = checkNetWork()

    if (!hasNetWork) {
      totast.msg('网路异常', {})
      return false
    }
    let contentType = isJson ? 'application/json' : 'application/x-www-form-urlencoded'
    let _authorization = hasToken ? {'Authorization': Authorization} : {}
    let _header = Object.assign({'content-type': contentType}, _authorization, header)
    wx.showLoading({title: '加载中...'})
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        header: _header,
        method: 'POST',
        data,
        dataType: 'json',
        success: (res) => {
          resolve(res.data)
        },
        fail: (error) => {
          totast.msg(error.errMsg, {})
          reject(error)
        },
        complete: res => {
          if (res.statusCode !== 200) {
            totastMessage({
              statusCode: res.statusCode,
              message: res.data.msg
            })
          }
          wx.hideLoading()
        }
      })
    })
  }
}

const checkNetWork = function () {
  let hasNetWork = false
  wx.onNetworkStatusChange(function (res) {
    console.log(res.networkType)
    hasNetWork = res.isConnected
  })
  return hasNetWork
}

const totastMessage = function ({statusCode, message}) {
  switch (statusCode) {
    case 502:
      totast.msg('服务器异常', {})
      break
    default:
      totast.msg(message, {})
      break
  }
}

export default publicRequest
