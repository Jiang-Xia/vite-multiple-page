interface configState {
  iconfonrUrl: string;
}
const config: configState = {
  // 阿里巴巴图标库链接，新添加图标需要重新生成 css 改成js
  iconfonrUrl: '//at.alicdn.com/t/c/font_3574965_lazt5u4512p.js',
};

let url: string;
// let url2: string;
const mode = import.meta.env.MODE;
const metaEnv = import.meta.env;
console.log({ 当前环境变量: metaEnv });
// x-api 后端服务
if (mode === 'production') {
  url = metaEnv.VITE_API_BASE_URL;
} else {
  url = metaEnv.VITE_PREFIX_PATH;
}
export const baseUrl: string = url;
export default config;
