import React from 'react';
import { Search } from './search';

export const BasicSearch = () => (
  <Search
    options={[
      { label: 'one', value: 'one' },
      { label: 'two', value: 'two' },
      { label: 'three', value: 'three' },
    ]}
  />
);
