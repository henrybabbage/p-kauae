'use strict';

/**
 * wahine service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wahine.wahine');
