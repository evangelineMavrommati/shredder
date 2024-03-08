import { BlizzAPI } from 'blizzapi';

export

const api = new BlizzAPI({
  region: 'us',
  clientId: process.env.BLIZZARD_CLIENT_ID,
  clientSecret: process.env.BLIZZARD_CLIENT_SECRET,
});

const accessToken = await api.getAccessToken();


console.log(`Access token: ${accessToken}`);

export { accessToken };
