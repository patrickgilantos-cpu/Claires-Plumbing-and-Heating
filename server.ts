import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Booking
  app.post("/api/book", (req, res) => {
    const { name, phone, issue } = req.body;
    
    if (!name || !phone || !issue) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Mock sending webhook to Twilio or Zapier
    console.log(`[WEBHOOK DISPATCHED] New Lead: ${name}, Phone: ${phone}, Issue: ${issue}`);

    // Respond with success
    res.json({ success: true, message: "Booking received successfully" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
