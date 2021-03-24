import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';
import './index.scss';
import { connect } from 'react-redux';
import { CommonModelState, ConnectProps, ConnectState } from '@models/connect';

interface IndexProps extends ConnectProps {
  common: CommonModelState;
}

const Index: React.FC<IndexProps> = ({ common }) => {
  const [current, setCurrent] = useState(0) // 页面索引

  const changeCurrent = (e) => {
    setCurrent(e)
  }
  useEffect(() => { }, [])
  return (<View className="index">
    <View className="pageMap">
    </View>
    <AtTabBar
      fixed
      tabList={[
        { title: '待办事项', iconType: 'bullet-list', text: 'new' },
        { title: '拍照', iconType: 'camera' },
        { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
      ]}
      onClick={e => { changeCurrent(e) }}
      current={current}
    />
  </View>)
}

export default connect(({ common }: ConnectState) => ({ common }))(Index);
