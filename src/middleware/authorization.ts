import { Request , Response , NextFunction } from 'express';
import * as userService from '../services/user-service';
import ApiError from '../util/api-error';

export const authorizeByRole = (allowedRoles: any) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const role = await userService.getRole(req.authenticatedUser.id);
    const isAuthorized = allowedRoles.includes(role);

    if (!isAuthorized) {
      throw ApiError.forbidden(
        'Unauthorized: your role is not authorized to interact with this resource'
      );
    }

    next();
  } catch (error) {
    return next(error);
  }
};
