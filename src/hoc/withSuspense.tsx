import React, { ReactElement, Suspense } from 'react';
import LazyLoading from '../routeLoader';

const withSuspense = (
  Component: React.LazyExoticComponent<React.ComponentType<Record<string, never>>>,
): ReactElement => (
  <Suspense fallback={<LazyLoading />}>
    <Component />
  </Suspense>
);

export default withSuspense;
