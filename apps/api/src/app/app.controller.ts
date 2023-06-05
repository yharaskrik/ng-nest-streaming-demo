import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

const pause = () => new Promise((resolve) => setTimeout(resolve, 1000));

@Controller()
export class AppController {
  @Get()
  async getData(@Res() res: Response) {
    let count = 0;

    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Transfer-Encoding': 'chunked',
    });

    while (count < 10) {
      res.write(JSON.stringify({ value: count }) + '\n');

      count += 1;

      await pause();
    }

    res.end();
  }
}
