import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';

const queryClient = new QueryClient();

function App() {

  // To continue to research: Best stale time + cache time combo. 
  // Whats the best way of combining with other hooks? 

  // If a component is stale, it only refetches data if you re-focus on the window, 
  // is there a way to get it to refresh automatically when the page is in focus?

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
