import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';

const queryClient = new QueryClient();

function App() {

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <div className='content'>
          <ComponentOne/>
          <ComponentTwo/>
          <ComponentThree/>
        </div>
        <ReactQueryDevtools initialIsOpen={true}/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
