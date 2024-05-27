
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Layout from './shared/Layout';
import React, { lazy, Suspense } from 'react';
const ExpenseLayout = lazy(() => import('./expense/shared/ExpenseLayout'));

function App() {
  return (
    <Routes>
      <Route path="/expense/*" element={
        <Suspense fallback={<>Loading...</>}>
          <ExpenseLayout />
        </Suspense>
      }></Route>
      <Route path="/*" element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
