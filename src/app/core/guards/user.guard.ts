import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { isPlatformBrowser } from '@angular/common';

export const userGuard: CanActivateFn = (route, state) => {
  const _AuthService = inject(AuthService);
  const _Router = inject(Router);
  const _PLATFORM_ID = inject(PLATFORM_ID);

  // if(localStorage != undefined){
  //   if(localStorage.getItem("userData")){
  //   return true;
  // }else{
  //   _Router.navigate(["/auth/login"])
  //   return false;
  // }
  // }
  // else{
  //   return false
  // }

  if (isPlatformBrowser(_PLATFORM_ID)) {
    if (localStorage.getItem('userData')) {
      return true;
    } else {
      _Router.navigate(['/auth/login']);
      return false;
    }
  }else{
    return false
  }
};
