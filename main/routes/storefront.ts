import app from '..';
import axios from 'axios';


export default function () {
  app.get('/fortnite/api/storefront/v2/keychain', async (c) => {
    try {
      const response = await axios.get('https://api.nitestats.com/v1/epic/keychain');
      
      if (response.status === 200) {
        return c.json(response.data);
      } 
    } catch (error) {
      
      return c.json({ error: 'Failed to fetch keychain data' }, { status: 502 });
    }
  });

  app.get("/fortnite/api/receipts/v1/account/*/receipts", async (c) => {
    return c.json([]);
});
}
