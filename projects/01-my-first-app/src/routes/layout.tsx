import { component$, Slot } from '@builder.io/qwik';
import Navbar from '~/components/shared/navbar/navbar';

export default component$(() => {
  return (
    <>
      <Navbar />
      <main class="my-4 flex flex-col justify-center items-center">
        <Slot />
      </main>
    </>
  );
});
