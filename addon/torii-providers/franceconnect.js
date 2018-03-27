/* eslint ember/avoid-leaking-state-in-ember-objects: "off" */

import Oauth2 from 'torii/providers/oauth2-code';
import { configurable } from 'torii/configuration';

export default Oauth2.extend({
  name:    'franceconnect',
  baseUrl: 'https://fcp.integ01.dev-franceconnect.fr/api/v1/authorize',
  nonce: configurable('nonce'),
  responseParams: ['code', 'state'],

  init() {
    this.requiredUrlParams = this.requiredUrlParams.concat('nonce');
    this.optionalUrlParams = ['scope'];
  },

  fetch(data) {
    return data;
  }

});
