// Markedライブラリを使ってMarkdownをHTMLに変換する

import { Marked } from "marked";
import aozoraRuby from "marked-aozora";

const marked = new Marked({
    async: true,
    breaks: true,
    gfm: true,
    extensions: [aozoraRuby()], // Use default option
});

export const inlineMarked = async (text: string) => {
    return marked.parseInline(text);
};
