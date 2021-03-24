import Taro from '@tarojs/taro';
import { Effect } from 'dva';
import { Reducer } from 'redux';
import { themeType, userInfoType } from '../@types/common';
// 主题色
export const THEME = {
  PRUPLE: {
    base: '#838bf0'
  }
};

export interface CommonModelState {
  accessToken: string;
  info: userInfoType;
  theme: themeType;
}

export interface CommenModelType {
  namespace: string;
  state: CommonModelState;
  effects: {
    savelogin: Effect;
    changeTheme: Effect;
  };
  reducers: {
    setTheme: Reducer<CommonModelState>;
    setInfo: Reducer<CommonModelState>;
  };
}

const CommonModel: CommenModelType = {
  namespace: 'common',
  state: {
    accessToken: Taro.getStorageSync('accessToken'),
    info: {
      access_token: '',
      avatar: '',
      cityCode: '',
      districtCode: '',
      expires_in: 0,
      gradeId: '',
      id: '',
      ioStudent: '',
      license: '',
      miniCampusList: [],
      mpUserId: '',
      openid: '',
      phone: '',
      provinceCode: '',
      real_name: '',
      refresh_token: '',
      role_id: 0,
      school: '',
      tenant_id: '',
      token_type: '',
      user_id: '',
      miniSubjectGroupList: []
    },
    theme: THEME.PRUPLE
  },

  effects: {
    // 登录成功 保存个人信息
    *savelogin({ payload }, { call, put }) {
      Taro.setStorageSync('accessToken', payload.access_token);
      Taro.setStorageSync('refreshToken', payload.refresh_token);
      Taro.setStorageSync('userInfo', payload);
      yield put({ type: 'setInfo', payload: { info: payload, role: payload.role_id, accessToken: payload.access_token } });
    },
    // 切换主题
    *changeTheme({ payload }, { call, put }) {
      yield put({ type: 'setTheme', payload: { theme: payload } });
    }
  },

  reducers: {
    setTheme(state, { payload }) {
      return { ...state, ...payload };
    },
    setInfo(state, { payload }) {
      return { ...state, ...payload };
    },
  }
};

export default CommonModel;
