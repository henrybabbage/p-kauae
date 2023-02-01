'use strict';

/**
 * ta service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ta.ta');
