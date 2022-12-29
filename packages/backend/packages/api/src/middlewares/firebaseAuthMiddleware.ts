import { Injectable, NestMiddleware, } from "@nestjs/common";
import * as firebaseAdmin from "firebase-admin";
import { a } from "models";

@Injectable()
export class FirebaseAuthMiddleware implements NestMiddleware {
  async use(req: any, res: any, next: () => void) {
    // Get the token from the request header
    const token = req.headers.authorization;

    try {
      const firebaseAuth = firebaseAdmin.auth();

      // Verify the token using the firebase-admin library
      const decodedToken = await firebaseAuth.verifyIdToken(token);

      // Add the decoded token to the request object so that it can be accessed by the route handler
      req.decodedToken = decodedToken;

      // Get the user information from the firebase-admin library
      const user = await firebaseAuth.getUser(decodedToken.uid);

      // Add the user information to the request header
      req.user = user;

      // Call the next middleware or route handler
      next();
    } catch (error) {
      // If the token is invalid, return an error response
      res.status(401).send({ message: a });
    }
  }
}