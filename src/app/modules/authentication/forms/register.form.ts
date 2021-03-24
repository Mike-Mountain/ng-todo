import {FormlyFieldConfig} from '@ngx-formly/core';

export const registerFields: FormlyFieldConfig[] = [
  {
    key: 'username',
    type: 'input',
    templateOptions: {
      label: 'Username',
      required: true
    }
  },
  {
    key: 'email',
    type: 'input',
    templateOptions: {
      type: 'email',
      label: 'Email Address',
      required: true
    }
  },
  {
    key: 'password',
    type: 'input',
    templateOptions: {
      type: 'password',
      label: 'Password',
      required: true
    }
  }
];
