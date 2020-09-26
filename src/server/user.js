const urljoin = require('urljoin');

const KEY_NEXT = '/next';
const forwardUrl = (originalUrl) => {
  const index = originalUrl.indexOf(KEY_NEXT);
  if (index === -1) {
    return originalUrl;
  }

  return originalUrl.substring(index + KEY_NEXT.length + 1, originalUrl.length);
};

const SESSION_COOKIE = 'digiflow.cookie';
const user = (host, req) => {
  const self = {
    parseReqBody: req.method !== 'GET',
    proxyReqPathResolver: (req) => {
      return urljoin(host, `/api/v1/${forwardUrl(req.originalUrl)}`);
    },
    proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
      proxyReqOpts.headers['content-type'] = `application/json`;
      return proxyReqOpts;
    },
    userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
      const data = JSON.parse(proxyResData.toString('utf8'));
      if (!!data && !!data.data && !!data.data.attributes && !!data.data.attributes.access_token) {
        userRes.cookie(SESSION_COOKIE, data.data.attributes.access_token, {
          httpOnly: true,
          maxAge: data.data.attributes.expires_in * 1000,
        });
      }
      return proxyResData;
    },
  };

  if (req.originalUrl.indexOf('passwords/change') > -1) {
    return Object.assign({}, self, {
      parseReqBody: true,
      proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
        proxyReqOpts.headers.Authorization = `Bearer ${srcReq.cookies['digiflow.cookie']}`;
        return proxyReqOpts;
      },
    });
  }

  if (req.originalUrl.indexOf('logout') > -1) {
    return Object.assign({}, self, {
      parseReqBody: false,
      proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
        proxyReqOpts.headers.Authorization = `Bearer ${srcReq.cookies['digiflow.cookie']}`;
        return proxyReqOpts;
      },
      userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
        userRes.clearCookie(SESSION_COOKIE);
        return proxyResData;
      },
    });
  }
  return self;
};

module.exports = user;
