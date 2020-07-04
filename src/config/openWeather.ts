import envDev from '../env.dev';

export default {
  id: process.env.OPENWEATHER || envDev.openweather_id,
};
