const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

// Enable CORS
app.use(cors({ origin: '*' }));

// External API base URL (change this to your real API)
const API_BASE_URL = 'http://localhost:8000/items';

// Your Bearer Token (replace this with the actual token)
// const BEARER_TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjM0QjdCRENCNDcwMkJBQjAxMDExNjRCRTZGNDM1RkU3IiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkLmJhcmVudHN3YXRjaC5ubyIsIm5iZiI6MTc0MTk0ODE0OCwiaWF0IjoxNzQxOTQ4MTQ4LCJleHAiOjE3NDE5NTE3NDgsImF1ZCI6ImFpcyIsInNjb3BlIjpbImFpcyJdLCJjbGllbnRfaWQiOiJhZnMwMDE2Mzc2QGFnZGVyc2tvbGVuLm5vOkxpYW0ifQ.nRvyYjTtFEGoHlzO2f8sA-k29flqt8L2kWEmTVQP-hNKT0kEfZ13cnJuEKQJonMBDgPt2_9IkUXYBKVrrEbDN6vvDKmU9gDIZRA2HR-xxou6H12k55H2HMhZ3pWER4Mv_cF7pw1ggUZe-BuwKXkyM-gsKjk3lg8wvzk-I6V9nHvQGQL9uMDiJ-HSPS5qbjaQr0_HxTsRjy6_gmcMmVA0mNMLSk9UOJUKkweqSIlUmR1OjvLFwtwyw4EbOYK1mEJBODF2X8Jrvi0ArPJtc2hT_UaeAbBuGU2620S56-rb2b1N77-NBbtcOsEyF2ZXYRyLnQasrwEz_lC5f4oyO_26qg';

// // Function to create the auth headers
// const getAuthHeaders = () => ({
//   headers: {
//     Authorization: `Bearer ${BEARER_TOKEN}`
//   }
// });

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Live API proxy is running!',
    endpoints: {
      getAllBoats: 'GET /api/vessels',
      getBoatPosition: 'GET /api/vessels/position/:boat'
    }
  });
});

// Fetch all vessels
app.get('/api/vessels', async (req, res) => {
  try {
    const response = await axios.get(API_BASE_URL, getAuthHeaders());
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch vessels', details: error.message });
  }
});

// Fetch specific vessel position
app.get('/api/vessels/position/:boat', async (req, res) => {
  const boat = req.params.boat;
  try {
    const response = await axios.get(`${API_BASE_URL}/position/${boat}`, getAuthHeaders());
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ error: 'Boat not found or API error', details: error.message });
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Live API proxy running on http://localhost:${PORT}`);
});
