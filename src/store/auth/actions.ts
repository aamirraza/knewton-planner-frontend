/*
 *
 * this files handles all the redux actions for authorization
 *
 */
// import {Auth} from 'aws-amplify';

import {FirebaseAuth} from '../../firebase';
import { ActionFactory } from '../types';
import { ActionType, UpdateClearCredentialsAction} from './types';
import { LoginState } from 'domain/LoginState';

export const clearCredentials: ActionFactory<LoginState, UpdateClearCredentialsAction> = newLoginState => ({
  type: ActionType.CLEAR_CREDENTIALS,
  loginState: newLoginState,
});
