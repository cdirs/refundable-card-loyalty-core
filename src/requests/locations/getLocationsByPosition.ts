import { Location } from '@cll.rest/types';

import { GraphQL } from '../..';
import { Query } from '../axios';

export const GetLocationsByPosition = async (
  apikey: string,
  longitude: number,
  latitude: number,
  staging: boolean = false,
): Promise<Location[]> =>
  Query<'locationsByPosition', Location[]>(GraphQL.getLocationsByPosition(longitude, latitude), apikey).then(
    (res) => res.locationsByPosition,
  );
