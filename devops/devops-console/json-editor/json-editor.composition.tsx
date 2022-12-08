import React from 'react';
import { JsonEditor } from './json-editor';

const validJson = `{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumber": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "fax",
      "number": "646 555-4567"
    }
  ]
}`;

const invalidJson = `{
  "firstName": "John",
  "lastName": "Smith",
  invalid,
  "age": 25,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumber": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "fax",
      "number": "646 555-4567"
    }
  ]
}`;

const unformattedFlatJson = `{"firstName":"John","lastName":"Smith","age":25,"address":{"streetAddress":"21 2nd Street","city":"New York","state":"NY","postalCode":"10021-3100"},"phoneNumber":[{"type":"home","number":"212 555-1234"},{"type":"fax","number":"646 555-4567"}]}`;

export const JsonReadOnly = () => {
  return (
    <div style={{ minWidth: '50ch', height: 500 }}>
      <JsonEditor data-testid="json-editor" value={validJson} readOnly />
    </div>
  );
};

export const JsonInvalid = () => {
  return (
    <div style={{ minWidth: '50ch', height: 500 }}>
      <JsonEditor data-testid="json-editor" value={invalidJson} />
    </div>
  );
};

export const JsonEditable = () => {
  return (
    <div style={{ minWidth: '50ch', height: 500 }}>
      <JsonEditor data-testid="json-editor" value={validJson} />
    </div>
  );
};

export const JsonUnformatted = () => {
  return (
    <div style={{ minWidth: '50ch', height: 500 }}>
      <JsonEditor data-testid="json-editor" value={unformattedFlatJson} />
    </div>
  );
};
