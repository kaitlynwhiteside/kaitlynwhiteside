import { Post } from "@/lib/rss";

interface WritingProps {
  posts: Post[];
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateStr));
  } catch {
    return dateStr;
  }
}

export default function Writing({ posts }: WritingProps) {
  const substackUrl = "https://kaitlynwhiteside.substack.com/";

  return (
    <section
      id="writing"
      className="px-8 md:px-20 lg:px-32 py-24 md:py-32 border-t border-[#0a0a0a]/10"
    >
      {/* Section label */}
      <p className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[#6b6b6b] mb-12">
        02 — Writing
      </p>

      {posts.length === 0 ? (
        <p className="font-[family-name:var(--font-display)] text-2xl text-[#6b6b6b] italic">
          Writing coming soon.
        </p>
      ) : (
        <ul className="divide-y divide-[#0a0a0a]/10">
          {posts.map((post) => (
            <li key={post.link}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-baseline md:justify-between py-6 gap-2"
              >
                <span className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-[#0a0a0a] group-hover:text-[#b85c3a] transition-colors underline-offset-4 group-hover:underline">
                  {post.title}
                </span>
                <span className="font-[family-name:var(--font-body)] text-xs text-[#6b6b6b] shrink-0">
                  {formatDate(post.isoDate || post.pubDate)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-12">
        <a
          href={substackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.15em] text-[#b85c3a] hover:underline underline-offset-4"
        >
          Read all on Substack →
        </a>
      </div>
    </section>
  );
}
