'use strict';

/**
 * dynamic-table service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dynamic-table.dynamic-table');
