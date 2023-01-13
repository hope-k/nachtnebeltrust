import React from 'react'
import { Admin, Resource, ListGuesser, useDataProvider } from 'react-admin';
import restDataProvider from 'ra-data-rest-client';
import customDataProvider from './customDataProvider';
import { TransactionList } from './TransactionList';


const ReactAdmin = () => {
  

  return (
    <Admin dataProvider={customDataProvider}>
      <Resource
        name='all-transactions'
        list={TransactionList }

      />
    </Admin>)
}

export default ReactAdmin