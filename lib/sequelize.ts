import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'movies',
  username: 'root',
  password: 'kuroko@2018',
  modelPaths: [__dirname + '/models']
});
