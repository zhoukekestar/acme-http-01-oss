'use strict';
const Greenlock = require('greenlock');
const email = 'abc@abc.com';

// domain: abc.abc.com
// ossConfig: { accessKeyId, accessKeySecret, region, bucket }
// workdir: /tmp/xxx/
module.exports = (domain, ossConfig, workdir) =>
  new Promise((resolve, reject) => {

    const greenlock = Greenlock.create({
      configDir: './config',
      packageRoot: workdir,
      packageAgent: 'Greenlock/v1.0',
      maintainerEmail: email,
      notify: function (event, details) {
        console.log(event, details);
        if ('error' === event) {
          reject(details)
        }

        if ('cert_issue' === event) {
          resolve();
        }
      },
    });

    greenlock.manager.defaults({
      agreeToTerms: true,
      subscriberEmail: email,
      challenges: {
        'http-01': {
          module: 'acme-http-01-oss',
          ...ossConfig
        },
      },
    });

    greenlock
      .add({
        subject: domain,
        altnames: [domain],
      })
      .then(function (data) {
        console.log('data, ', data);
      })
      .catch(function (e) {
        reject(e);
      });
  });
