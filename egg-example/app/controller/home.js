'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = yield this.service.home.find();// because * function ,so invoke must add yeild.
    }
    * index1() {
      this.ctx.body = 'new world';
    }
    * sina() {
      const result = yield this.service.home.sina();
      this.ctx.body = result;
    }
    * sohu() {
      const result = yield this.service.home.sohu();
      this.ctx.body = result;
    }
    * test() {
      const result = yield this.service.home.test(); // yield this. behind  turn  dictory(service), file(home), last(invoked method)
      const result1 = yield this.service.test.test1();
      this.ctx.body = result + ' ' + result1;
    }
    * dog() {
      const result = yield this.service.dog.pig();
      const result1 = yield this.service.dog.find();
      this.ctx.body = result + ' ' + result1;
    }
  }
  return HomeController;
};