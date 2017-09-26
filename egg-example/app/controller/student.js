'use strict';


module.exports = app => {
  class StudentController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.student.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.student.delete(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.student.select(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.student.update(this.ctx.request.body);
    }
  }
  return StudentController;
};