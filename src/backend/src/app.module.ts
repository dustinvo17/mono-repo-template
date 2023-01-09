import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { AppController } from "./app.controller";
import { MongoModule } from "mongo/mongo.module";
import { ConfigModule } from "@nestjs/config";
import { join } from "path";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongoModule,
    ServeStaticModule.forRoot({
      exclude: ['/api*'],
    })
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
