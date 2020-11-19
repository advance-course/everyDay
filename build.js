const fs = require('fs');
const os = require('os');

const encoding = 'UTF-8';
const envs = ['dev', 'test', 'prod'];
const env = process.argv.splice(2)[0] || 'dev';

if (!envs.includes(env)) {
  console.error(`不可用的环境：${env}`);
  return;
}

// 复制项目配置文件
const envFilePath = './config.json';
const sourceConfigData = fs.readFileSync(
  `./config/config.${env}.json`,
  encoding,
);
const targetConfigData = {
  ...JSON.parse(sourceConfigData.toString()),
  ip: getIPAddress(),
};
try {
  fs.writeFileSync(envFilePath, JSON.stringify(targetConfigData, null, 2));
} catch (e) {
  console.error('配置文件写入失败', e);
}

/**
 * 获取本机ip地址
 * @returns {string}
 */
function getIPAddress() {
  const interfaces = os.networkInterfaces();
  for (let name in interfaces) {
    if (name) {
      const items = interfaces[name];
      for (let i = 0, len = items.length; i < len; i++) {
        const alias = items[i];
        if (
          alias.family === 'IPv4' &&
          alias.address !== '127.0.0.1' &&
          !alias.internal
        ) {
          return alias.address;
        }
      }
    }
  }
}
