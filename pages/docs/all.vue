<script setup>
const number_int = `
1
`.trim();
const number_float = `
3.14
`.trim();
const number_bin = `
0д01001011
`.trim();
const number_hex = `
0шА1Б2ВГ
`.trim();
const number_negative = `
-2
`.trim();
const string_basic = `
"лорем іпсум долор сіт амет"
`.trim();
const bool_true = `
так
`.trim();
const bool_false = `
ні
`.trim();
const undefined_basic = `
пусто
`.trim();
const diia_basic = `
дія Багатокутник.щось_зробити(а число = М.випадкове(), б текст = "А Б В Г ...", в )
  друк("щось зроблено!")
кінець
`.trim();
const structure_basic = `
структура Багатокутник
  назва текст = "трикутник"
  кутів число = 3
  згладжування
кінець
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Все
    </h1>

    <p>
      Список всіх можливих конструкцій <span class="diia-word">Мавки</span>.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="number_int"
        />
      </ClientOnly>
    </div>
    <br>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="number_float"
        />
      </ClientOnly>
    </div>
    <br>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="number_bin"
        />
      </ClientOnly>
    </div>
    <br>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="number_hex"
        />
      </ClientOnly>
    </div>
    <br>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="number_negative"
        />
      </ClientOnly>
    </div>
    <br>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="string_basic"
        />
      </ClientOnly>
    </div>
    <br>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="bool_true"
        />
      </ClientOnly>
    </div>
    <br>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="bool_false"
        />
      </ClientOnly>
    </div>
    <br>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="undefined_basic"
        />
      </ClientOnly>
    </div>
    <br>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="diia_basic"
        />
      </ClientOnly>
    </div>
    <br>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="structure_basic"
        />
      </ClientOnly>
    </div>
    <p>
      буде продовжено...
    </p>
  </DocsWrapper>
</template>
