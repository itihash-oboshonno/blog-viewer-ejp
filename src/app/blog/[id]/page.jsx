async function fetchPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
  }
  
  export default async function BlogDetails({ params }) {
    const { id } = params;
    const post = await fetchPost(id);
  
    return (
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p>{post.body}</p>
      </main>
    );
  }
  