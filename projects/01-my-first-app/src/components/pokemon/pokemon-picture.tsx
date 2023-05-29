import { component$, useSignal, useTask$ } from '@builder.io/qwik';

interface Props {
  pokemonID: number;
  width?: number;
  height?: number;
  isFrontPicture?: boolean;
  showPokemon?: boolean;
}

export const PokemonPicture = component$(
  ({
    pokemonID,
    width = 200,
    height = 200,
    isFrontPicture = true,
    showPokemon = false,
  }: Props) => {
    const imgIsLoaded = useSignal(false);

    useTask$(({ track }) => {
      track(() => pokemonID);
      track(() => isFrontPicture);
      imgIsLoaded.value = false;
    });

    const srcImg = isFrontPicture
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`
      : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonID}.png`;

    return (
      <>
        {!imgIsLoaded.value && (
          <div
            style={{ width: `${width}px`, height: `${height}px` }}
            class="flex justify-center items-center text-center"
          >
            Loading...
          </div>
        )}

        <picture>
          <img
            class={[
              {
                hidden: !imgIsLoaded.value,
                'brightness-0': !showPokemon,
              },
              'transition-all',
              'duration-500',
            ]}
            src={srcImg}
            alt="Pokemon sprite"
            width={width}
            height={height}
            onLoad$={() => {
              imgIsLoaded.value = true;
            }}
          />
        </picture>
      </>
    );
  }
);
