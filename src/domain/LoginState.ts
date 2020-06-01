/*
 *
 * this is the file that handles the typescript interface for the authorization redux store data structure
 *
 */
export interface LoginState {
  showHelperText: boolean;
  usernameValue: string;
  isValidUsername: boolean;
  passwordValue: string;
  isValidPassword: boolean;
  isRememberMeChecked: boolean;
}
