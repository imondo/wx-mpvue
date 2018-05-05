import publicRequest from './../utils/publicRequest'
import HmacMD5 from 'crypto-js/hmac-md5'

class handleLocation {
  static async getLocationList () {
    const key = 'ec457d0a974c48d5685a7efa03d137dc8bbde7e3';
    const method = 'GET';
    const path = '/lyetms/api/m/configs';
    const query = '';
    const body = '';
    const sign = HmacMD5((method + path + query + body), key).toString();
    console.log(sign)

    let orgList = await publicRequest.get({
      url: 'https://app.ly100.cn/etmsadminserver/api/m/configs',
      header: {
        'X-Ly-Sign': sign,
        'X-Ly-Debug' : true,
        'X-Ly-Version': 1,
      },
      hasToken: false
    })
    console.log(orgList)
    return orgList;
  }
}

export default handleLocation
