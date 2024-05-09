// cors.js
import cors from "cors";

const allowedOrigins = ["http://localhost:5173"];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed by CORS ERROR!!"));
    }
  },
  credentials: false, // Allow cookies for authenticated requests (if applicable)
  optionsSuccessStatus: 200, // Optionally set the status code for the preflight OPTIONS request
};
export default cors(corsOptions);
