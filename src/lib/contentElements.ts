// ブログの本文を構成する要素の型定義

// パラグラフ単品
export type ContentParagraphElement = {
    // フィールドID
    readonly fieldId: "paragraph";

    // パラグラフの中身
    body: string;
};

// 見出し＋パラグラフ
export type ContentHeadlineParagraphElement = {
    // フィールドID
    readonly fieldId: "headPara";

    // 見出しの中身
    head: string;

    // パラグラフの中身
    body: string;
};

// コンテンツ要素
export type ContentElement =
    | ContentParagraphElement
    | ContentHeadlineParagraphElement;
