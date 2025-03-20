import express from 'express';  // Use import instead of require
import cors from 'cors';        // Use import instead of require

const app = express();

// Enable CORS
app.use(cors({ origin: 'http://localhost:5179' }));

// Allow all origins during development
app.use(cors({
  origin: '*' // Allow any origin
}));

// ================= ADD ROOT ENDPOINT =================
app.get('/', (req, res) => {
  res.json({
    message: 'Mock API is running!',
    endpoints: {
      getAllBoats: 'GET /api/vessels',
      getBoatPosition: 'GET /api/vessels/position/:boat'
    }
  });
});

// Existing boat endpoints
const boatPositions = {
  Magic: { lat: 60.397076, lng: 5.324383 },
  Fantasy: { lat: 59.913868, lng: 10.752245 }
};

app.get('/api/vessels/position/:boat', (req, res) => {
  const boat = req.params.boat;
  const position = boatPositions[boat];
  
  if (!position) {
    return res.status(404).json({ error: 'Boat not found' });
  }
  
  res.json({
    boat,
    position,
    lastUpdated: new Date().toISOString()
  });
});

app.get('/api/vessels', (req, res) => {
  res.json({
    boats: Object.keys(boatPositions)
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Mock API running on http://localhost:${PORT}`);
});
