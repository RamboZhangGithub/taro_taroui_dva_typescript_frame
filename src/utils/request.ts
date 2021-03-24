import Taro from '@tarojs/taro';
import { baseUrl, noConsole } from '../config';
import interceptors from './interceptors';

interceptors.forEach((interceptorItem) => Taro.addInterceptor(interceptorItem));

interface method {
  /** HTTP 请求 OPTIONS */
  OPTIONS;
  /** HTTP 请求 GET */
  GET;
  /** HTTP 请求 HEAD */
  HEAD;
  /** HTTP 请求 POST */
  POST;
  /** HTTP 请求 PUT */
  PUT;
  /** HTTP 请求 DELETE */
  DELETE;
  /** HTTP 请求 TRACE */
  TRACE;
  /** HTTP 请求 CONNECT */
  CONNECT;
}

interface OptionsType {
  method: keyof method | any;
  data: any;
  url: string;
  noLoading?: boolean;
  headers?: {};
}

export default (options: OptionsType = { method: 'GET', data: {}, url: '', noLoading: false, headers: {} }) => {
  if (!options.noLoading) {
    Taro.showLoading({
      title: '加载中'
    });
  }
  if (!noConsole) {
    console.log(`${new Date().toLocaleString()}【 URL=${options.url} 】PARAM=${JSON.stringify(options.data)}`);
  }
  for (const key in options.data) {
    if (options.data.hasOwnProperty(key) && (options.data[key] === undefined || options.data[key] == null)) {
      delete options.data[key];
    }
  }

  return Taro.request({
    url: baseUrl + options.url,
    data: {
      ...options.data
    },
    header: {
      'Jy-Auth': Taro.getStorageSync('accessToken'),
      'Content-Type': 'application/x-www-form-urlencoded',
      ...options.headers
    },
    method: options.method.toUpperCase()
  }).then((res) => {
    if (!options.noLoading) {
      setTimeout(() => {
        Taro.hideLoading();
      }, 100);
    }
    return res;
    if (!noConsole) {
      console.log(`${new Date().toLocaleString('zh', { hour12: false })}【${options.url} 】【返回】`, res.data);
    }
  });
};
