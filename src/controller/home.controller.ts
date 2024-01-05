import { Controller, Get, Post, Inject, Query, Body } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { IUserOptions } from '../interface';
@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Get('/')
  async home(): Promise<string | void> {
    // return 'Hello Midwayjs!';
    return this.ctx.forward('/test');
  }
  @Get('/test')
  async test(): Promise<string> {
    return 'Hello Midwayjs Test!';
  }
  @Get('/query')
  async getUser(@Query() id: string): Promise<any> {
    return this.ctx.query;
  }
  @Post('/body')
  async getBody(): Promise<IUserOptions> {
    const body = this.ctx.request.body;
    return body as IUserOptions;
  }
  async getBody2(@Body() user: IUserOptions): Promise<any> {
    console.info(user);
    return this.ctx.request.body;
  }
  @Post('/update')
  async update(): Promise<string> {
    return 'Hello Midwayjs Update!';
  }
}
