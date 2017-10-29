import axios from 'axios'

const host = 'http://software.efly.nenu.edu.cn/homework';

const isUrlExist = data => !!data.url;

const Server = {
  get(options) {
    if (!isUrlExist(options)) {
      console.log('参数错误');
      return false;
    }

    axios.get(host + options.url, options.data || {})
      .then(data => {
        return data;
      })
      .catch(err => {
        throw Error(`${options.url}请求出错`)
      })
  },

  post(options) {
    if (!isUrlExist(options)) {
      console.log('参数错误');
      return false;
    }

    axios.post(host + options.url, options.data || {}, options.config || {})
      .then(data => {
        return data;
      })
      .catch(err => {
        throw Error(`${options.url}请求出错`)
      })
  }
}

module.exports = Server;
