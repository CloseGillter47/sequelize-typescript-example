import { sequelize } from './sequelize';

sequelize.sync({ force: true }).then(() => {
    console.log('init database finshed');
});