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
import { Cell } from 'design/DataTable';
import { displayDateTime } from 'gravity/lib/dateUtils';

export default function CreatedCell({ rowIndex, data }) {
  const { isSession, session, operation } = data[rowIndex];
  const created = isSession ? session.created : operation.created;
  return (
    <Cell>
      {displayDateTime(created)}
    </Cell>
  )
}