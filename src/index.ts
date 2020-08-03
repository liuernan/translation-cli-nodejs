import * as https from "https";
import {IncomingMessage} from "http";
import * as querystring from "querystring";

const translate = (word) => {

  const query: string = querystring.stringify({
    from: "eb",
    to: "zh",
    src: word
  });
  console.log(query);

  const options = {
    hostname: "www.zhihu.com",
    port: 443,
    path: "/",
    method: "GET"
  };

  const request = https.request(options, (response: IncomingMessage) => {
    response.on("data", (data) => {
      process.stdout.write(data);
    });
  });

  request.on("error", (error) => {
    console.error(error);
  });

  request.end();
};

export default translate;