import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    login() {
      this.get('torii').open('franceconnect').then((sdf) => {
        console.log(sdf);
      })
    }
  }
});
