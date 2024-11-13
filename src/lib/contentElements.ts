// ブログの本文を構成する要素の型定義

// 見出し
export type ContentHeadlineElement = {
    // フィールドID
    readonly fieldId: "headline";

    // 見出しの中身
    line: string;

    // 見出しのレベル
    readonly level: "中" | "小" | "超小";
};

// パラグラフ
export type ContentParagraphElement = {
    // フィールドID
    readonly fieldId: "paragraph";

    // テキストの中身
    text: string;
};

// コンテンツ要素
export type ContentElement = ContentHeadlineElement | ContentParagraphElement;
