import Parser from "rss-parser";

export interface Post {
  title: string;
  link: string;
  pubDate: string;
  isoDate?: string;
}

const parser = new Parser();

export async function fetchSubstackPosts(): Promise<Post[]> {
  const rssUrl =
    process.env.SUBSTACK_RSS_URL ||
    "https://placeholder.substack.com/feed";

  try {
    const feed = await parser.parseURL(rssUrl);
    return (feed.items || []).slice(0, 5).map((item) => ({
      title: item.title || "Untitled",
      link: item.link || "#",
      pubDate: item.pubDate || "",
      isoDate: item.isoDate,
    }));
  } catch {
    return [];
  }
}
