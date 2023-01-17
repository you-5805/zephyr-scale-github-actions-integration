import api from '../api/$api';
import aspida from '@aspida/fetch';
import fetch from 'isomorphic-unfetch';

export const zephyr = api(
  aspida(fetch, {
    headers: {
      Authorization: `Bearer ${process.env.ZEPHYR_TOKEN}`,
    },
  }),
);
