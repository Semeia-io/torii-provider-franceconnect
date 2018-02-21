import Oauth2 from 'torii/providers/oauth2-code';
import { configurable } from 'torii/configuration';

export default Oauth2.extend({
  name:    'franceconnect',
  baseUrl: 'https://fcp.integ01.dev-franceconnect.fr/api/v1/authorize',
  nonce: configurable('nonce'),

  init() {
    this.requiredUrlParams = this.requiredUrlParams.concat('nonce');
    this.optionalUrlParams = ['scope'];
    this.responseParams = ['code', 'state'];
  },

  fetch(data) {
    return data;
  }

});
