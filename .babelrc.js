//바벨 내보내기 옵션
module.exports = {
  preset: ['@babel/preset-env'],
  //2차원 배열
  plugins: [
    ['@babel/plugin-transform-runtime']
  ]
}