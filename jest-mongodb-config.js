module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      // MongoDB 5.0 binaries link against libcrypto.so.1.1 (OpenSSL 1.1) which is
      // no longer shipped on ubuntu-latest runners. 6.0+ supports OpenSSL 3.
      version: '6.0.14',
      skipMD5: true,
    },
    autoStart: false,
    instance: {},
  },
};