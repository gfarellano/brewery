import { Injectable } from '@nestjs/common';

@Injectable()
export class BeersService {
    getHello(): string {
      return 'Hola mundis!';
    }
}
