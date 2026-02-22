import { fetchSubstackPosts } from "@/lib/rss";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";

export const revalidate = 3600;

export default async function Home() {
  const posts = await fetchSubstackPosts();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Writing posts={posts} />
        <Contact />
      </main>
    </>
  );
}
