
export const backendLocator = import.meta.env.VITE_BACKEND_URL
console.log(backendLocator, 'locator is here');

export const backendPort = import.meta.env.VITE_BACKEND_PORT
console.log(backendPort);

// Entrypoint for backend
export const backendSigninEntrypoint = '/signin'
export const backendSignupEntrypoint = '/signup'
export const backendHomeEntrypoint = '/home'
