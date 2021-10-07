import {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const typeormConfig : TypeOrmModuleOptions = 
{
    type: "mysql",
    host: 'd3y0lbg7abxmbuoi.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    port: 3306,
    username: 'ac2cgjx4ienev16t',
    password: 'q41uyhor36o4dh3r',
    database: "wykr0dkczmu3lmmc",
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    retryAttempts: 3,
    dateStrings: true,
    synchronize: true
}