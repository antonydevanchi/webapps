/*
Copyright 2019 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { AppList } from './AppList';
import { StatusEnum } from 'gravity/services/releases';

storiesOf('Gravity/Dashboard', module)
  .add('AppList', () => {
    // create apps with different states
    const apps = Object.getOwnPropertyNames(StatusEnum).map(name =>
      makeApp(StatusEnum[name])
    );

    return (
      <AppList apps={apps} pageSize="15"/>
    );
  });

const sample = {
  chartName: 'slack',
  chartVersion: '1.2.3.4',
  name: 'slack',
  namespace: 'default',
  description: 'Collaboration tools and services',
  endpoints: [{
    name: 'Endpoint name',
    description: 'Endpoint description',
    addresses: ['https://localhohst/sample/endpoint/Lorem/Ipsum_is_si']
  },
  {
    name: 'Endpoint name',
    description: 'Endpoint description2',
    addresses: ['https://localhohst/sample/endpoint', 'https://localhohst1']
  }],
  version: '3.1.8',
  status: StatusEnum.UNKNOWN,
  updated: new Date('2019-03-11T23:18:16Z'),
  updatedText: '2019-03-11T23:18:16Z',
  icon: 'data:image/png;base64,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',
}

function makeApp(status){
  return {
    ...sample,
    status
  }
}