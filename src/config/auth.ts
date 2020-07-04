export default {
  jwt: {
    secret: process.env.JWT_SECRET || '32f90f32a354b6fe31fdedb236cf7e67',
    expiresIn: '1h',
  },
};
