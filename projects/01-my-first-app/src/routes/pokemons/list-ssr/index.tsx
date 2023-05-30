import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h2>List SSR</h2>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Pokemon List - SSR',
};
