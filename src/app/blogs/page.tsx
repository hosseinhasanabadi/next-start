import { log } from "console";
import Article from "../../components/Article";
import Link from "next/link";

export interface IGArticle {
  id?: string;
  title?: string;
  description?: string;
}
async function Blogs() {
  const res = await fetch("http://localhost:8000/acticles");
  const data = (await res.json()) as IGArticle[];
  console.log(data);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4  py-16">
        {data.map((item) => (
          <Link key={item.id} href={`/blogs/${item.id}`}>
            <Article title={item.title} description={item.description} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
