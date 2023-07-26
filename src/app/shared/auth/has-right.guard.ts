import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { CurrentUserService } from './current-user.service';

export const hasRightGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userService = inject(CurrentUserService);
  const right = route.data['right'];
  return right && userService.hasRight(right);
};
