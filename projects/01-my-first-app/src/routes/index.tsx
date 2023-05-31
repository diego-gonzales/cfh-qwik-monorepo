import { component$, useSignal, $, useTask$ } from '@builder.io/qwik';
import { type DocumentHead, useNavigate } from '@builder.io/qwik-city';
import { PokemonPicture } from '~/components/pokemon/pokemon-picture';

export default component$(() => {
  const pokemonID = useSignal(1);
  const isFrontPicture = useSignal(true);
  const isVisible = useSignal(false);
  const nav = useNavigate();

  const changePokemonID = $((numberValue: number) => {
    const newValue = pokemonID.value + numberValue;
    if (newValue === 0 || newValue === 495) return;
    pokemonID.value = newValue;
  });

  useTask$(({ track }) => {
    track(() => pokemonID.value);
    isVisible.value = false;
  });

  return (
    <>
      <div
        class="cursor-pointer"
        onClick$={() => nav(`/pokemon/${pokemonID.value}`)}
      >
        <PokemonPicture
          pokemonID={pokemonID.value}
          isFrontPicture={isFrontPicture.value}
          isVisible={isVisible.value}
        />
      </div>
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
            isVisible.value = !isVisible.value;
          }}
        >
          {isVisible.value ? 'Hidde pokemon' : 'Show pokemon'}
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
