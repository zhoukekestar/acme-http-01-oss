# acme-http-01-oss

Deeply inspired by [acme-http-01-s3.js](https://git.coolaj86.com/coolaj86/acme-http-01-s3.js/src/branch/master/lib/index.js)

用于阿里云 oss 的 cdn 加速情景下，通过 Let's Encrypt 申请免费的 SSL 证书。

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

## Tips

You can mannual try it first by this link: https://greenlock.domains/ to make sure that you have the right access.

Some Cases
* [CAA](https://en.wikipedia.org/wiki/DNS_Certification_Authority_Authorization). You can check the CAA record by [this link](https://caatest.co.uk/systemjs.alibaba-inc.com).

## References

* https://git.rootprojects.org/root/greenlock.js
