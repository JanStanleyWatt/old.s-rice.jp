// Usage: import { getArticles, getArticleDetail } from "~/lib/microcms";
import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

// MicroCMSのクライアントを初期化
const client = createClient({
    serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.MICROCMS_API_KEY,
});

// 記事の型定義
export type Article = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;
};

// レスポンスの型定義
export type ArticleResponse = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Article[];
};

// APIの呼び出し
export const getArticles = async (queries: MicroCMSQueries) => {
    return await client.get<ArticleResponse>({
        endpoint: import.meta.env.ARTICLE_ENDPOINT,
        queries: queries,
    });
};

// 記事詳細の取得
export const getArticleDetail = async (
    contentId: string,
    queries: MicroCMSQueries,
) => {
    return await client.getListDetail<Article>({
        endpoint: import.meta.env.ARTICLE_ENDPOINT,
        contentId,
        queries,
    });
};
