import DetailsButton from "@/components/DetailsButton";
import Link from "next/link";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center gap-3">
        {posts.map((post) => (
          <li
            key={post.id}
            className="grid gap-3 mb-2 p-5 rounded-lg border shadow-lg"
          >
            <Link
              href={`/blog/${post.id}`}
              className="font-bold text-blue-500 hover:underline"
            >
              {post.title.slice(0, 20)}
            </Link>
            <p>{post.body.slice(0, 50)}...</p>
            <div className="flex justify-start">
            <Link
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              href={`/blog/${post.id}`}
            >
              <DetailsButton />
            </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
