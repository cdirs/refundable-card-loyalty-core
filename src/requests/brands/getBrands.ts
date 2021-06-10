import {Brand} from '@cll.rest/types';

import {GraphQL} from '../..';
import {Query} from '../axios';

export const GetBrands = async (staging: boolean = false): Promise<Brand[]> =>
  Query<'brands', Brand[]>(GraphQL.getBrands()).then((res) => res.brands);
