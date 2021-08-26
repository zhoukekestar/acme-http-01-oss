'use strict';
const OSS = require('ali-oss');

module.exports.create = function (config) {
  let client = new OSS(config);

  return {
    init: function (opts) {
      return Promise.resolve();
    },

    set: function (data) {
      const ch = data.challenge;

      return client.put(
        '/.well-known/acme-challenge/' + ch.token,
        Buffer.from(ch.keyAuthorization)
      )
    },
    get: function (data) {
      return Promise.resolve();
    },

    remove: function (data) {
      const ch = data.challenge;
      return client.delete(
        '/.well-known/acme-challenge/' + ch.token
      )
    },
  };
};
