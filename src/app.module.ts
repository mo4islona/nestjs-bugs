import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      useFactory: async () => {
        return {
          type: 'postgres',
          host: 'localhost',
          database: 'postgres',
          username: 'postgres',
          password: 'postgres',
          port: 5432,
        };
      },
      dataSourceFactory: async (options) => {
        const source = await new DataSource(options).initialize();

        return source;
      },
    })
  ],
})
export class AppModule {
}
