import './App.css';
import routes from './routes/routes';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3000000, 
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
