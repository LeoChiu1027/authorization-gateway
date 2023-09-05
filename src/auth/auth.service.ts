import { Injectable, OnModuleInit } from '@nestjs/common';
import { CasbinService } from './casbin.service';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(private readonly casbinService: CasbinService) {}

  async onModuleInit() {
    await this.casbinService.initialize();
    // Casbin instance is now initialized and ready to be used
  }

  // Use the Casbin instance in your methods

  public async addPolicy(
    subject: string,
    object: string,
    action: string,
  ): Promise<boolean> {
    return await this.casbinService.addPolicy(subject, object, action);
  }

  public async checkPolicy(){
    
  }
}
