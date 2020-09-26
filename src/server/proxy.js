const urljoin = require('urljoin');

const handleProxyRequest = (host, req) => {
  return {
    parseReqBody: req.method !== 'GET',
    proxyReqPathResolver: (req) => {
      return urljoin(host, `/api/v1${req.url}`);
    },
    proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
      proxyReqOpts.headers.Authorization = `Bearer ${srcReq.cookies['digiflow.cookie']}`;
      proxyReqOpts.headers['Access-Control-Allow-Origin'] = '*';
      return proxyReqOpts;
    },
  };
};

module.exports = handleProxyRequest;
