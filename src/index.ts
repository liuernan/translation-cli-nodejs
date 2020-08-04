import * as https from "https";
import {IncomingMessage} from "http";
import * as querystring from "querystring";
import * as CryptoJS from "crypto-js";
import {appKey, key} from "./private-key";

const translate = (word) => {
  const salt = (new Date).getTime();
  const curtime = Math.round(new Date().getTime() / 1000);
  const query = word; // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
  const from = "en"; //"zh-CHS";
  const to = "zh-CHS"; //"en";
  const str1 = appKey + truncate(query) + salt + curtime + key;
  const sign = CryptoJS.SHA256(str1).toString(CryptoJS.enc.Hex);

  const requestQuery: string = querystring.stringify({
    q: query,
    appKey: appKey,
    salt: salt,
    from: from,
    to: to,
    sign: sign,
    signType: "v3",
    curtime: curtime,
  });

  const options = {
    hostname: "openapi.youdao.com",
    port: 443,
    path: `/api?${requestQuery}`,
    method: "GET"
  };

  const request = https.request(options, (response: IncomingMessage) => {
    response.on("data", (data) => {
      console.log("chenggongle");
      process.stdout.write(data);
    });
  });

  request.on("error", (error) => {
    console.error(error);
  });

  request.end();
};

export default translate;


// helpers
const truncate = (q) => {
  const len = q.length;
  if (len <= 20) return q;
  return q.substring(0, 10) + len + q.substring(len - 10, len);
};