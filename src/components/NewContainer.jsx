import { NewArticle } from "./NewArticle";

export const NewContainer = () => {
  return (
    <aside className="bg-very-dark-blue text-off-white py[28px] px-[20px]">
      <h1 className="text-soft-orange text-4xl font-bold">New</h1>
        <NewArticle/>
        <NewArticle/>
        <NewArticle/>
    </aside>
  )
}
