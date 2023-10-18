import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { dataSourceApp } from './typeorm.config';

const dataApp = dataSourceApp.options;
export default () => dataApp as TypeOrmModuleOptions;
