import React from 'react';
import GoodComponent from './Good';
import BadComponent from './Bad';
import ErrorBoundry from './ErrorBoundry';

export default function App(){
  return (
    <>
    <ErrorBoundry>
      <GoodComponent/>
    </ErrorBoundry>
    <ErrorBoundry>
      <BadComponent/>
    </ErrorBoundry>
    </>
  );
}
