import { Module } from '@nestjs/common';
import { TaskModule } from './module/task/task.module';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [TaskModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
