import {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const typeormConfig : TypeOrmModuleOptions = 
{
    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: "mangal_oriental",
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    retryAttempts: 3,
    dateStrings: true,
    synchronize: true
}