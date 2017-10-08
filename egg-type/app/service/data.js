'use strict';

module.exports = app => {
  class Data extends app.Service {
    * insert(param) {
      try {
        yield app.mysql.insert('data', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * get() {
      const conn = yield app.mysql.beginTransaction();
      try {
        // yield conn.update('fruit', { id: 2, a: 'baizhang' });
        yield conn.update('data', { id: 2, hundred: 'alsomany' });
        yield conn.commit();
      } catch (e) {
        yield conn.rollback();
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select() {
      let res;
      try {
        res = yield app.mysql.select('data');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    * delete(param) {
      try {
        yield app.mysql.delete('data', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(param) {
      try {
        yield app.mysql.update('data', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Data;
};