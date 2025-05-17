import { IGArticle } from "../app/blogs/page"

function Article({title, description,id}:IGArticle) {
  return (
    <div>
       <div className="shadow p-4">
          <h2>{title}</h2>
          <p>
           {description}
          </p>
        </div>
    </div>
  )
}

export default Article
