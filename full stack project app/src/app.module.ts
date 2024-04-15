// NestJS integration - integrate Prisma with NestJS

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// Register controllers, services, guards, filters, interceptors, and middleware in src/app.module.ts

import { Module } from "@nestjs/common";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";
import { AuthModule } from "./auth/auth.module";
import { InvoicesModule } from "./invoices/invoices.module";
import { HttpExceptionFilter } from "./misc/exceptions/http-exception.filter";
import { LoggingInterceptor } from "./misc/interceptors/logging.interceptor";
import { PaginationMiddleware } from "./misc/middleware/pagination.middleware";

@Module({
  imports: [AuthModule, InvoicesModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
