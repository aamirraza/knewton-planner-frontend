/*
 * Copyright 2019 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  createIdMapFromList, mapWithElement, mapWithoutElement,
  mapWithUpdatedElement,
} from 'util/ImmutableCollectionOperations';
import DomainObjectView from 'domain/DomainObjectView';
import { LoginState } from 'domain/LoginState';
import { ActionType, CurrentLoginState, LoginStateAction } from './types';

export const initialState: CurrentLoginState = {
  loginState: {
    showHelperText: false,
    usernameValue: 'test raza',
    isValidUsername: true,
    passwordValue: '',
    isValidPassword: true,
    isRememberMeChecked: false
  }
};

const loginStateReducer = (state = initialState, action: LoginStateAction): CurrentLoginState => {
  switch (action.type) {
    case ActionType.CLEAR_CREDENTIALS:
      return { ...state, loginState: action.loginState };
    default:
      return state;
  }
};

export default loginStateReducer;
