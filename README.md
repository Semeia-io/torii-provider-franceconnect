# Ember CLI Torii Provider for FranceConnect

Torii Provider for franceconnect.gouv.fr wrapped as an Ember-CLI Addon

## Usage

* `ember install torii`
* `ember install torii-provider-franceconnect`

Edit /config/environment.js to add your Torii provider configuration


```
module.exports = function(environment) {
  var ENV = {

   // ... other ENV config stuff here

   torii:{
      providers: {
        'franceconnect-oauth2': {
          clientId: process.env.FRANCECONNECT_CLIENT_ID,
          scope: 'openid identite_pivot',
          nonce: 'test'
        }
      }
    }
  };

  return ENV;
};
```
