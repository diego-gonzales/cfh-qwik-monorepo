import { component$ } from '@builder.io/qwik';
import { type DocumentHead, routeLoader$ } from '@builder.io/qwik-city';
import { PokemonPicture } from '~/components/pokemon/pokemon-picture';

export const usePokemonId = routeLoader$<number>(({ params, redirect }) => {
  const id = Number(params.id);

  if (isNaN(id)) redirect(301, '/');
  if (id <= 0) redirect(301, '/');
  if (id > 500) redirect(301, '/');

  return id;
});

export default component$(() => {
  const pokemonId = usePokemonId();
  // const location = useLocation();

  return (
    <>
      <h2>Pokemon number {pokemonId.value}</h2>
      <PokemonPicture pokemonID={Number(pokemonId.value)} />
      {/* <h2>Pokemon number {location.params.id}</h2> */}
      {/* <PokemonPicture pokemonID={Number(location.params.id)} /> */}
    </>
  );
});

export const head: DocumentHead = {
  title: 'Pokemon detail',
};
