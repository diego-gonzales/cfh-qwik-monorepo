import { component$, useSignal, $, useVisibleTask$ } from '@builder.io/qwik';

export default component$(() => {
  const isDark = useSignal(false);

  const handleToggleTheme = $(() => {
    document.documentElement.classList.toggle('dark');
    isDark.value = !isDark.value;
    localStorage.setItem('themeDark', JSON.stringify(isDark.value));
  });

  useVisibleTask$(() => {
    const themeDark = JSON.parse(window.localStorage.getItem('themeDark')!);
    if (themeDark) {
      isDark.value = themeDark;
      document.documentElement.classList.toggle('dark');
    }
  });

  return (
    <button class="btn btn-primary" onClick$={() => handleToggleTheme()}>
      {isDark.value ? '🌞' : '🌛'}
    </button>
  );
});
