import * as https from "https";
import {IncomingMessage} from "http";

const translate = (word) => {
  const options = {
    hostname: 'www.zhihu.com',
    port: 443,
    path: '/',
    method: 'GET'
  };

  const request = https.request(options, (response: IncomingMessage) => {
    console.log('statusCode:', response.statusCode);
    console.log('headers:', response.headers);

    response.on('data', (data) => {
      process.stdout.write(data);
    });
  });

  request.on('error', (error) => {
    console.error(error);
  });
  request.end();
};

export default translate;