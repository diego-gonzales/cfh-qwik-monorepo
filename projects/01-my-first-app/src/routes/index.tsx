import { component$, useSignal, $, useTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonPicture } from '~/components/pokemon/pokemon-picture';

export default component$(() => {
  const pokemonID = useSignal(1);
  const isFrontPicture = useSignal(true);
  const showPokemon = useSignal(false);

  const changePokemonID = $((numberValue: number) => {
    const newValue = pokemonID.value + numberValue;
    if (newValue === 0 || newValue === 495) return;
    pokemonID.value = newValue;
  });

  useTask$(({ track }) => {
    track(() => pokemonID.value);
    showPokemon.value = false;
  });

  return (
    <>
      <PokemonPicture
        pokemonID={pokemonID.value}
        isFrontPicture={isFrontPicture.value}
        showPokemon={showPokemon.value}
      />
      <div class="my-2">
        <button
          class="btn btn-primary mx-1"
          onClick$={() => changePokemonID(-1)}
          disabled={pokemonID.value === 1}
        >
          Previous
        </button>
        <button
          class="btn btn-primary mx-1"
          onClick$={() => changePokemonID(1)}
          disabled={pokemonID.value === 494}
        >
          Next
        </button>
        <button
          class="btn btn-primary mx-1"
          onClick$={() => {
            isFrontPicture.value = !isFrontPicture.value;
          }}
        >
          {isFrontPicture.value ? 'Back picture' : 'Front picture'}
        </button>
        <button
          class="btn btn-primary mx-1"
          onClick$={() => {
            showPokemon.value = !showPokemon.value;
          }}
        >
          {showPokemon.value ? 'Hidde pokemon' : 'Show pokemon'}
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'My first Qwik app',
  meta: [
    {
      name: 'description',
      content: 'This is my first app with Qwik',
    },
  ],
};
