'use strict';

/**
 * homescreen service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::homescreen.homescreen');
