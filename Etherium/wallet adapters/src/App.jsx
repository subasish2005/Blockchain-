import { useQuery, useQueryClient } from '@tanstack/react-query';
import './App.css'

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
}
function App() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['todo', 1],
    queryFn: getData,
  });

  function refreshQuery() {
    queryClient.invalidateQueries({ queryKey: ['todo', 1] });
  }

  return (
    <div className="App">
      <h1>Wallet Adapters</h1>
      <button type="button" onClick={refreshQuery}>
        Refetch todo
      </button>

      {isLoading ? <p>Loading...</p> : null}
      {isError ? <p>{error.message}</p> : null}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : null}
      <p>
        Cached title: {queryClient.getQueryData(['todo', 1])?.title ?? 'none yet'}
      </p>
    </div>
  )
}

export default App
