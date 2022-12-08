import React from 'react';
import { Search } from './search';

export const BasicSearch = () => (
  <Search
    data-testid="test-search"
    options={[
      { label: 'one', value: 'one' },
      { label: 'two', value: 'two' },
      { label: 'three', value: 'three' },
    ]}
    onChange={(value) => console.log(value)}
  />
);
