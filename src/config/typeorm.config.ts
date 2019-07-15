import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgrs',
  database: 'taskmanagement',
  // entities: [path.join(__dirname,'/../**/*.entity.ts')],
  entities: [
    __dirname + '/../**/*.entity.ts',
    __dirname + '/../**/*.entity.js',
  ],
  // synchronize: true, // In production not recommended
};
