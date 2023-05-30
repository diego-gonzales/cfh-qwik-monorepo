import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const location = useLocation();

  return (
    <>
      <h2>Pokemon number {location.params['id']}</h2>
    </>
  );
});
