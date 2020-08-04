import * as https from "https";
import {IncomingMessage} from "http";
import * as querystring from "querystring";
import * as CryptoJS from "crypto-js";
import {appKey, key} from "./private-key";

const translate = (word) => {

  const salt = (new Date).getTime();
  const curtime = Math.round(new Date().getTime() / 1000);
  const [from, to] = /^a-zA-Z/.test(word) ? ["en", "zh-CHS"] : ["zh-CHS", "en"]; //"zh-CHS" "en"

  const query: string = querystring.stringify({
    q: word,
    appKey: appKey,
    salt: salt,
    from: from,
    to: to,
    sign: CryptoJS.SHA256(appKey + truncate(word) + salt + curtime + key).toString(CryptoJS.enc.Hex),
    signType: "v3",
    curtime: curtime,
  });

  const options = {
    hostname: "openapi.youdao.com",
    port: 443,
    path: `/api?${query}`,
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