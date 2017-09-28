'use strict';

module.exports = app => {
  app.post('/user', 'user.insert');
  app.post('/user1', 'user.delete');
  app.post('/user2', 'user.get');
  app.post('/user3', 'user.select');
  app.post('/user4', 'user.update');
  app.post('/photo', 'photo.insert');
  app.post('/photo1', 'photo.delete');
  app.post('/photo2', 'photo.get');
  app.post('/photo3', 'photo.select');
  app.post('/photo4', 'photo.update');
};
