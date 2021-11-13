import {TypeOrmModuleOptions} from '@nestjs/typeorm'
import { join } from 'path'

export const typeormConfig : TypeOrmModuleOptions = 
{
    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: "mangal_oriental",
    //entities: [join(__dirname + '/../**/*.entity{.ts,.js}')],
    entities: [join(__dirname + 'dist/**/*.entity{.ts,.js}')],
    autoLoadEntities: true,
    retryAttempts: 3,
    dateStrings: true,
    synchronize: true,
    keepConnectionAlive: true
}