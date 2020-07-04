import envDev from '../env.dev';

export default {
  id: process.env.SPOTIFY_ID || envDev.spotify_id,
  secret: process.env.SPOTIFY_SECRET || envDev.spotify_secret,
};
