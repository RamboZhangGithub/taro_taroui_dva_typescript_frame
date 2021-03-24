import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import dva from './utils/dva';
import models from './models';
import Taro from '@tarojs/taro';

import './app.scss';
import { requestType, infoType } from './@types/common';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const dvaApp = dva.createApp({
  initialState: {},
  models: models
});
const store = dvaApp.getStore();

class App extends React.Component {

  componentDidMount() {
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
