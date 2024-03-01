import './App.css';
import routes from './routes/routes';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Creating a new instance of QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3000000, // setting a default stale time for queries (5 minutes)
    },
  },
});

function App() {
  return (
    <div className="App">
     <QueryClientProvider client={queryClient}>
      <RouterProvider router={createBrowserRouter(routes)} />
     </QueryClientProvider>
    </div>
  );
}

export default App;
