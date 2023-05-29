import { component$ } from '@builder.io/qwik';
import ThemeButton from '../theme-button/theme-button';
import { QwikLogo } from '../../icons/qwik';

export default component$(() => {
  return (
    <header class="flex justify-between items-center">
      <section class="flex gap-2">
        <QwikLogo />
        <h1 class="text-2xl">My first app in Qwik</h1>
      </section>
      <ThemeButton />
    </header>
  );
});
