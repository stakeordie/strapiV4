'use strict';

/**
 * service-bridge service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-bridge.service-bridge');