import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ")

  try {
    const { sub } = verify(token, "b3424842a65e372c4dbe95b8d5887259") as IPayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}

export {
  ensureAuthenticated
}
