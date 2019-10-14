import * as Koa from 'koa';
import server from './index';
import { expect } from 'chai';

describe('index', () => {
  it('should create an instance of a Koa server', () => {
    const instance = server();
    expect(instance).to.be.instanceof(Koa);
  });

  it('should handle errors', () => {
    // TODO, throw error
  });

  it('should send back health check', () => {
    // TODO get /healthcheck
  });

  it('should retrieve all usage', () => {
    // TODO get /usage
  });
});
