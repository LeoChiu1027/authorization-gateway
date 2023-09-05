import { Injectable } from '@nestjs/common';
import { Enforcer, newEnforcer } from 'casbin';
import { SequelizeAdapter } from 'casbin-sequelize-adapter';

@Injectable()
export class CasbinService {
  private enforcer: Enforcer;

  async initialize() {
    const adapter = await SequelizeAdapter.newAdapter(
      {
        database: 'cabsin',
        username: 'root',
        password: 'root',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
      },
      true,
    );
    this.enforcer = await newEnforcer('src/auth/model.conf', adapter);
  }

  // Add additional methods for enforcing authorization rules

  public async addPolicy(
    sub: string,
    obj: string,
    act: string,
  ): Promise<boolean> {
    return this.enforcer.addPolicy(sub, obj, act);
  }

  public async checkPolicy(
    sub: string,
    obj: string,
    act: string,
  ): Promise<boolean> {
    return this.enforcer.enforce(sub, obj, act);
  }
}
