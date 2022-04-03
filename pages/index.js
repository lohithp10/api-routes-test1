import useSWR from 'swr';
import Person from '../components/Person';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  // const { data, error } = useSWR('/api/people', fetcher)
  const { data, error } = useSWR('/api/flight/schedule', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return <ul>{JSON.stringify(data)}</ul>;
}
