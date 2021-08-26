# acme-http-01-oss

Deeply inspired by [acme-http-01-s3.js](https://git.coolaj86.com/coolaj86/acme-http-01-s3.js/src/branch/master/lib/index.js)

## Quick Start

```js
greenlock.manager
  .defaults({
    agreeToTerms: true,
    subscriberEmail: 'xxxx@xx.com',
    challenges: {
      'http-01': {
        module: 'acme-http-01-oss',
        accessKeyId: 'xxx',
        accessKeySecret: 'xxx',
        region: 'oss-cn-hangzhou',
        bucket: 'xxx',
      },
    },
  })
```
