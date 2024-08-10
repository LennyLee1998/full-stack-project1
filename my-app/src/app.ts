// 运行时配置
import type { RequestConfig } from 'umi';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'my-big-bang-pro' };
}

export const layout = () => {
  return {
    logo: 'https://telegraph-image-2s1.pages.dev/file/877db020dd515fe265932.png',
    menu: {
      locale: false,
    },
  };
};

export const request: RequestConfig = {
  timeout: 1000,
  baseURL: 'http://localhost:5000',
  // other axios options you want
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },
  requestInterceptors: [
    // (config: any) => {
    // console.log(url, options)
    // }
  ],
  responseInterceptors: [
    (response) => {
      // 拦截响应数据，进行个性化处理
      const { data } = response;
      // if(!data.success){
      //   message.error('请求失败！');
      // }
      console.log(response, data)
      return response;
    },
  ],
};
