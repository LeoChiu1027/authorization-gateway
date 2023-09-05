import { Module } from '@nestjs/common';
import { CasbinService } from './casbin.service';
import { AuthService } from './auth.service';

@Module({
  imports: [],
  providers: [CasbinService, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
