import { Injectable, Options } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class ClientProxySmartRanking {
  getClientProxyAdminBackendInstance(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://user:Mu0nbcVAxv8C@54.166.167.90:5672/smartranking'],
        queue: 'admin-backend',
      },
    });
  }
}
