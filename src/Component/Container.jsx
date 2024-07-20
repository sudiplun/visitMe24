import { CategoryCard } from "./CategoryCard";
import { BOOKMARKS } from "./data";
export default function Container() {
  const book = BOOKMARKS.map((category) => {
    return (
      <div key={category.categories}>
        <CategoryCard category={category} />
      </div>
    );
  });
  return (
    <div className=" container mx-auto ">
      <div className="max-w-screen-xl md:grid grid-cols-3 gap-8 md:gap-8 m-8 ">
        {book}
      </div>
    </div>
  );
}
