import React, { Suspense, lazy } from 'react';

const LazyComponent1 = lazy(() => import('./LazyLoadingComponent1'))
const LazyComponent2 = lazy(() => import('./LazyLoadingComponent2'))

function LazyLoading() {
  return (
    <div>
      <strong class="heading"> Lazy Loading </strong>
      <Suspense fallback={<div> Please Wait ... for Lazy Loading Component 1</div>}>
        <LazyComponent1/>
      </Suspense>
      <Suspense fallback={<div> Please Wait ... for Lazy Loading Component 2</div>}>
        <LazyComponent2/>
      </Suspense>
    </div>
  )
}

export default LazyLoading;