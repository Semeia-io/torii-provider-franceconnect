# Ember CLI Torii Provider for FranceConnect

Torii Provider for franceconnect.gouv.fr wrapped as an Ember-CLI Addon

## Installtion

* `ember install torii`
* `ember install torii-provider-franceconnect`

## Configuration

Edit /config/environment.js to add your Torii provider configuration.

You can use [ember-cli-dotenv](https://github.com/fivetanley/ember-cli-dotenv)
to avoid commiting credentials to git.


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
