const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));


app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: 'API key not configured. Please add GEMINI_API_KEY to .env file'
      });
    }

    
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: message }]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048
          }
        })
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error('Gemini API error:', error);
      return res.status(response.status).json({
        error: error.error?.message || 'API request failed'
      });
    }

    const data = await response.json();
    console.log('=== FULL GEMINI RESPONSE ===');
    console.log(JSON.stringify(data, null, 2));
    console.log('=== END RESPONSE ===');
    
  
    if (!data.candidates || data.candidates.length === 0) {
      console.error('No candidates in response');
      return res.status(500).json({ error: 'No response from Gemini' });
    }
    
    const candidate = data.candidates[0];
    
   
    if (candidate.finishReason === 'MAX_TOKENS') {
      console.warn('Response was truncated due to MAX_TOKENS');
    }
    
  
    const reply = candidate.content?.parts?.[0]?.text;
    
    if (!reply) {
      console.error('=== FAILED TO EXTRACT TEXT ===');
      console.error('Finish reason:', candidate.finishReason);
      console.error('Content:', candidate.content);
      return res.status(500).json({ 
        error: `Response incomplete. Reason: ${candidate.finishReason || 'unknown'}` 
      });
    }
    
    res.json({ reply });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/api/models', async (req, res) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'GEMINI_API_KEY not set' });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
