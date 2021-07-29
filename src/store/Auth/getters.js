export function getAuthChecked(state) {
  return state.authChecked;
}

export function getIsSignIn(state) {
  return state.isSignIn;
}

export function getUser(state) {
  return state.user;
}

export function getIsAdmin(state) {
  return state.isSignIn && state.user && state.user.profile === "admin";
}
