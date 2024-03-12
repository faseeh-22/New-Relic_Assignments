'use strict';

exports.config = {
  app_name: ['Dump-node'], // Set your application name
  license_key: 'eu01xx6705864f2c66b27e3e664156c5FFFFNRAL', // Set your New Relic license key
  logging: {
    level: 'info', // Set the logging level
    filepath: 'stdout' // Set the log file path
  },
  distributed_tracing: {
    enabled: true
  },
  // Add additional configuration options as needed
};

