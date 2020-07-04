import envDev from '../env.dev';

export default {
  id: process.env.OPENWEATHER_ID || envDev.openweather_id,
};
