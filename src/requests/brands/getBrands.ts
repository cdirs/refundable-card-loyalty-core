import {Brand} from '@cll.rest/types';

import {GraphQL} from '../..';
import {Query} from '../axios';

export const GetBrands = async (apikey: string, staging: boolean = false): Promise<Brand[]> =>
  Query<'brands', Brand[]>(GraphQL.getBrands(), apikey).then((res) => res.brands);
