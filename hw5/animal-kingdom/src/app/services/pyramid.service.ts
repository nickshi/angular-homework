import { Injectable } from '@angular/core';
import { PYRAMID } from '../mock-pyramids';
import { Pyramid } from '../models/pyramid.model'
@Injectable()
export class PyramidService {
  getPyramid(): Pyramid {
    return PYRAMID;
  }
}