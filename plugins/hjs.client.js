import { defineNuxtPlugin } from "nuxt/app";
import hljs from 'highlight.js/lib/core';
import 'highlight.js/lib/common';
import bash from 'highlight.js/lib/languages/bash';
import javascript from 'highlight.js/lib/languages/javascript';
import markdown from 'highlight.js/lib/languages/markdown';
import hljsVuePlugin from "@highlightjs/vue-plugin";

const diia = () => {
    function recurRegex(re, substitution, depth) {
        if (depth === -1) return "";

        return re.replace(substitution, _ => {
            return recurRegex(re, substitution, depth - 1);
        });
    }

    return ({
        name: 'Diia',
        aliases: ['diia'],
        keywords: {
            $pattern: /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ]+/,
            keyword: 'дія рівно більше менше макет пак спробувати містить не я впасти тривала зловити є перебрати кінець структура чекати взяти якщо або і інакше вернути поки як дати модуль пропустити зупинити',
            literal: 'так ні пусто текст логічне число список словник обʼєкт'
        },
        unicodeRegex: true,
        contains: [
            {
                begin: [
                    "дія",
                    /\(/
                ],
                className: { 0: "keyword" },
            },
            {
                begin: [
                    /[a-zа-яіїє_]/,
                    /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ]*/,
                    /\(/
                ],
                className: { 1: "title.function", 2: "title.function" },
            },
            {
                begin: [
                    /[A-ZА-ЯІЇЄ]/,
                    /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ]*/,
                    /\(/
                ],
                className: { 1: "title.class", 2: "title.class" },
            },
            {
                begin: [
                    ' ',
                    /[A-ZА-ЯІЇЄ]/,
                    /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ]*/,
                ],
                className: { 2: "title.class", 3: "title.class" },
            },
            {
                begin: [
                    "структура ",
                    /[A-ZА-ЯІЇЄ]/,
                    /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ]*/
                ],
                className: { 2: "title.class", 3: "title.class" },
            },
            {
                begin: [
                    /[A-ZА-ЯІЇЄ]/,
                    /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ]*/,
                    "."
                ],
                className: { 1: "title.class", 2: "title.class" },
            },
            {
                begin: [
                    "дати ",
                    /[A-ZА-ЯІЇЄ]/,
                    /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ]*/
                ],
                className: { 2: "title.class", 3: "title.class" },
            },
            {
                begin: [
                    "дати ",
                    /[a-zа-яіїє_]/,
                    /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ]*/
                ],
                className: { 2: "title.function", 3: "title.function" },
            },
            {
                begin: [
                    "взяти ",
                    /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ]+\./,
                    /[a-zа-яіїє_]/,
                    /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ]*/
                ],
                className: { 3: "title.function", 4: "title.function" },
            },
            {
                begin: [
                    "взяти ",
                    /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ]+\./,
                    /[A-ZА-ЯІЇЄ]/,
                    /[a-zA-Zа-яА-ЯіІїЇєЄ_ʼ]*/
                ],
                className: { 3: "title.class", 4: "title.class" },
            },
            {
                className: 'string',
                begin: /"/,
                end: /"/,
                contains: [
                    {
                        begin: /%\(/,
                        end: /\)/,
                        scope: 'subst',
                    },
                ],
            },
            hljs.COMMENT(';;', '$'),
            hljs.COMMENT(';--', '--;'),
            {
                scope: 'number',
                begin: /(-?)0ш([АБВГҐДабвгґд0-9])+/,
            },
            {
                scope: 'number',
                begin: /0д([01])+/,
            },
            hljs.C_NUMBER_MODE,
        ]
    });
};

hljs.registerLanguage('diia', diia);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('markdown', markdown);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(hljsVuePlugin);
});
