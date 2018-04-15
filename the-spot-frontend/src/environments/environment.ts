// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyADNZ1IAS8asFKdYoHD3VxQgB5M2L5D3xk",
    authDomain: "the-spot-philly-codefest.firebaseapp.com",
    databaseURL: "https://the-spot-philly-codefest.firebaseio.com",
    projectId: "the-spot-philly-codefest",
    storageBucket: "the-spot-philly-codefest.appspot.com",
    messagingSenderId: "989646158505"
  }
};
