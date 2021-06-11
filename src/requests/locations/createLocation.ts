import {Location} from '@cll.rest/types';

import {GraphQL} from '../..';
import {Query} from '../axios';

export const CreateLocation = async (apikey: string, location: Location, staging: boolean = false): Promise<Location> =>
  Query<'addLocation', Location>(GraphQL.createLocation(location), apikey).then((res) => res.addLocation);
