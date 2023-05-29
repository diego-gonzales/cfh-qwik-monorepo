import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const isDark = useSignal(false);

  return (
    <button
      class="btn btn-primary"
      onClick$={() => {
        document.documentElement.classList.toggle('dark');
        isDark.value = !isDark.value;
      }}
    >
      {isDark.value ? '🌞' : '🌛'}
    </button>
  );
});
