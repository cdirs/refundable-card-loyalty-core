import axios from 'axios';

import Settings from '../settings';

export const Query = async <QueryKey extends string, T = any>(
  query: string,
  apikey?: string,
  staging: boolean = false,
): Promise<{ [key in QueryKey]: T }> => {
  try {
    return await axios
      .post<{ data: { [key in QueryKey]: T }; errors?: [{ message: string }] }>(
        `${!staging ? Settings.url : Settings.stagingUrl}`,
        {
          query,
        },
        {
          headers: {
            apikey,
          },
        },
      )
      .then((res) => {
        // console.log(res);
        return res.data;
      })
      .then((res) => {
        if (res.errors) {
          throw new Error(res.errors.map((e) => e.message).join(', '));
        }

        return res.data;
      });
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};
