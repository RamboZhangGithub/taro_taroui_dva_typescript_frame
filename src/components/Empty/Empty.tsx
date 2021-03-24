import { View, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React, { useEffect } from 'react';
import './Empty.scss';
import building from '@static/images/building.png';

interface EmptyProps {
  noMore: boolean;
  isEmpty: boolean;
  emptyText?: string;
  noMoreText?: string;
}

const Empty: React.FC<EmptyProps> = ({ noMore, isEmpty, emptyText = '- 暂无数据 -', noMoreText = '- 没有了哦 -' }) => {
  useEffect(() => {}, []);
  return (
    <View className="emptyMap">
      {isEmpty && <Image className="emptyLogo" src={building} mode="aspectFit"></Image>}
      {isEmpty ? <View className="emptyStatus">{emptyText}</View> : noMore ? <View className="emptyStatus">{noMoreText}</View> : ''}
    </View>
  );
};

export default Empty;
