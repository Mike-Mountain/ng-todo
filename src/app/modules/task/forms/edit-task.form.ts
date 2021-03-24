import {FormlyFieldConfig} from '@ngx-formly/core';

export const editTaskFields: FormlyFieldConfig[] = [
  {
    key: 'title',
    type: 'input',
    templateOptions: {
      label: 'Title',
      required: true
    }
  },
  {
    key: 'description',
    type: 'textarea',
    templateOptions: {
      label: 'Description',
      required: true,
      rows: 4
    }
  },
  {
    key: 'priority',
    type: 'radio',
    templateOptions: {
      label: 'Priority',
      required: true,
      options: [
        {value: 'low', label: 'Low'},
        {value: 'medium', label: 'Medium'},
        {value: 'high', label: 'High'},
      ]
    }
  },
  {
    key: 'status',
    type: 'radio',
    templateOptions: {
      label: 'Status',
      required: true,
      options: [
        {value: 'todo', label: 'Open'},
        {value: 'complete', label: 'Complete'}
      ]
    }
  },
];
