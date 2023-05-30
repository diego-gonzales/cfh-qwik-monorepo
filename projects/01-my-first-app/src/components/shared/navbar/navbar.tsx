import { component$ } from '@builder.io/qwik';
import ThemeButton from '../theme-button/theme-button';
import { QwikLogo } from '../../icons/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <header class="my-1 flex justify-between items-center">
      <section class="flex gap-2">
        <Link href="/">
          <QwikLogo />
        </Link>
        <h1 class="text-2xl">My first app in Qwik</h1>
      </section>
      <nav>
        <ul class="flex justify-center items-center gap-4">
          <li>
            <Link href="/pokemons/list-ssr">SSR List</Link>
          </li>
          <li>
            <Link href="/pokemons/list-client">Client List</Link>
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
});
