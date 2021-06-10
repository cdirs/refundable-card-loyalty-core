import axios from 'axios';

import Settings from '../settings';

export const Query = <QueryKey extends string, T = any>(
  query: string,
  staging: boolean = false,
): Promise<{ [key in QueryKey]: T }> =>
  axios
    .post<{ data: { [key in QueryKey]: T } }>(`${!staging ? Settings.url : Settings.stagingUrl}`, {
      query,
    })
    .then((res) => res.data)
    .then((res) => res.data);
