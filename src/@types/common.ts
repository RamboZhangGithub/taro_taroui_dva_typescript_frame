// 用户信息
export interface userInfoType {
  access_token: string;
  avatar: string;
  cityCode: string;
  districtCode: string;
  expires_in: number;
  gradeId: string;
  id: string;
  ioStudent: string;
  license: string;
  miniCampusList: any;
  mpUserId: string;
  openid: string;
  phone: string;
  provinceCode: string;
  real_name: string;
  refresh_token: string;
  role_id: number;
  school: string;
  tenant_id: string;
  token_type: string;
  user_id: string;
  miniSubjectGroupList: any;
}

export interface themeType {
  base: string;
}

// 接口请求
export interface requestType<T> {
  code: number;
  data: T;
  msg: string;
  success: boolean;
}

// 用户信息
export interface infoType {
  access_token: string;
  avatar: string;
  cityCode: string;
  districtCode: string;
  expires_in: number;
  gradeId: string;
  id: string;
  ioStudent: string;
  license: string;
  miniCampusList: [];
  mpUserId: string;
  openid: string;
  phone: string;
  provinceCode: string;
  real_name: string;
  refresh_token: string;
  role_id: number;
  school: string;
  tenant_id: string;
  token_type: string;
  user_id: string;
}

// 所在区域
export interface stuAreaType {
  areaCode: string;
  cityCode: string;
  code: string;
  districtCode: string;
  districtName: string;
  name: string;
  parentCode: string;
  provinceCode: string;
  provinceName: string;
}
