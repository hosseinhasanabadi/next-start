import { IGArticle } from "../../blogs/page";
interface IArticlePArams{
    params: Promise<{id: string}>
    searchParams: Promise<{id: string}>
}
async function page(props: IArticlePArams) {
    const {id} = await props.params
  const res = await fetch(`http://localhost:8000/acticles/${id}`);
  const data = (await res.json()) as IGArticle;
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold my-4">
        {
            data.title
        }
        </h2>
      <p>
        {
            data.description
        }
      </p>
    </div>
  );
}

export default page;
