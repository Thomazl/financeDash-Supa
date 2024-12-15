// controllers/authController.ts
import { RequestHandler } from "express";
import { signInWithEmailPassword } from "../services/authService";
import {
  LoginRequestBody,
  LoginResponseError,
  LoginResponseSuccess,
} from "../models/authModel";

export const loginUser: RequestHandler<
  {},
  LoginResponseSuccess | LoginResponseError,
  LoginRequestBody
> = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "Email and password are required" });
    return;
  }

  try {
    const { user, session } = await signInWithEmailPassword(email, password);
    if (!user || !session) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    res.status(200).json({
      user: user,
      access_token: session.access_token,
      refresh_token: session.refresh_token,
      expires_in: session.expires_in,
      token_type: session.token_type,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
