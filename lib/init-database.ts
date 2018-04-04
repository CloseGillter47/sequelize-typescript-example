import { sequelize } from './sequelize';

sequelize.sync({ force: false }).then(() => {
    console.log('init database finshed.');
});