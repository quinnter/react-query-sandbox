import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import Dashboard from './Dashboard';

const queryClient = new QueryClient();

function App() {

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Dashboard/>
        <ReactQueryDevtools initialIsOpen={true}/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
