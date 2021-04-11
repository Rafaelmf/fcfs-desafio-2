import { Injectable } from '@nestjs/common';
import { Route } from './entities/Route';


@Injectable()
export class AppService {
  private routes: Route[] = [
    { title: 'Rota 1', startPosition: {lat: 15, lng: 16}, endPosition: {lat: 15, lng: 16} },
    { title: 'Rota 2', startPosition: {lat: 15, lng: 16}, endPosition: {lat: 15, lng: 16} },
    { title: 'Rota 3', startPosition: {lat: 15, lng: 16}, endPosition: {lat: 15, lng: 16} },
    { title: 'Rota 4', startPosition: {lat: 15, lng: 16}, endPosition: {lat: 15, lng: 16} },
    { title: 'Rota 5', startPosition: {lat: 15, lng: 16}, endPosition: {lat: 15, lng: 16} },
  ];

  getRoutes(): Route[] {
    return this.routes;
  }
}
