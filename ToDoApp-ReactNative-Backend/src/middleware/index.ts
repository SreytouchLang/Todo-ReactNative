import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import User from "../models/user-model";

// Extend the Request interface to include a `user` field
export interface AuthRequest extends Request {
  user?: string; // Optional to prevent errors before assignment
}

// Define a custom payload type to include `_id`
interface CustomJwtPayload extends JwtPayload {
  _id: string;
}

export const authenticationMiddleware = async (
  request: AuthRequest,
  response: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = request.headers;
    if (!authorization) {
      return response.status(401).json({
        error: "Authorization is required",
      });
    }

    const token = authorization;

    // Cast the result of jwt.verify to the custom payload type
    const decodedToken = jwt.verify(token, "express") as CustomJwtPayload;
    const { _id } = decodedToken;

    // Check if the user exists in the database
    const existingUser = await User.findOne({ _id });
    if (existingUser) {
      request.user = existingUser.id;
    }

    next();
  } catch (error) {
    console.error("Error in authenticationMiddleware:", error);
    return response.status(401).json({
      error: "Unauthorized",
    });
  }
};
