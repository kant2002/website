<script setup>
const number = `
1

3.14

0шААББВВ

0д0110101

-2
`.trim();

const string = `
"є"

"їхав козак за дунай..."
`.trim();

const logical = `
так

ні
`.trim();

const list = `
[1, 3.14, -2, Людина(), так, "ого!"]
`.trim();

const map = `
(лайк="вподобайка", баг="вада")
`.trim();

const voidity = `
пусто
`.trim();

const obj = `
Ракета(назва="Нептун")

Паспорт(прізвище="Когут",
        імʼя="Давид",
        по_батькові="Богданович")
`.trim();

const diia = `
дія привіт()
  друк("привіт!")
кінець

ще_привіт = дія()
  друк("ще привіт!")
кінець

і_ще_привіт = (): друк("і ще привіт!")
`.trim();

const is = `
а = 2

друк(а є число) ;; так
друк(а є текст) ;; ні
друк(а є логічне) ;; ні
друк(а є список) ;; ні
друк(а є словник) ;; ні
друк(а є пусто) ;; ні
друк(а є обʼєкт) ;; ні
друк(а є Дія) ;; ні
`.trim();
</script>

<template>
  <DocsWrapper prev="/docs/vars" next="/docs/types">
    <h1 class="docs-content-title">
      Типи даних
    </h1>

    <p>
      Існують такі типи даних:
    </p>
    <ul>
      <li><code>число</code></li>
      <li><code>текст</code></li>
      <li><code>логічне</code></li>
      <li><code>список</code></li>
      <li><code>словник</code></li>
      <li><code>пусто</code></li>
      <li><code>обʼєкт</code></li>
      <li><code>Дія</code></li>
    </ul>
    <p>
      <b>число:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="number"
        />
      </ClientOnly>
    </div>
    <p>
      <b>текст:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="string"
        />
      </ClientOnly>
    </div>
    <p>
      <b>логічне:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="logical"
        />
      </ClientOnly>
    </div>
    <p>
      <b>список:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="list"
        />
      </ClientOnly>
    </div>
    <p>
      <b>словник:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="map"
        />
      </ClientOnly>
    </div>
    <p>
      <b>пусто:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="voidity"
        />
      </ClientOnly>
    </div>
    <p>
      <b>обʼєкт:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="obj"
        />
      </ClientOnly>
    </div>
    <p>
      <b>Дія:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="diia"
        />
      </ClientOnly>
    </div>
    <hr>
    <p>
      Щоб перевірити чи значення є певного типу, використовуйте ключове слово <code>є</code>:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="is"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>

<style lang="scss">
code {
  padding: .2rem .5rem;
  background-color: black;
  color: white;
  border-radius: 1rem;
}

ul {
  li {
    margin-bottom: .5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
