import { JwtPayload } from "../src/jwt-payload";

// Extend Express's Request type to include `user`
declare global {
  namespace Express {
    export interface Request {
      user?: JwtPayload; // Add optional user property
    }
  }
}