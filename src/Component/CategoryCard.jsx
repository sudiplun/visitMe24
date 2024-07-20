import { BookmarkRow } from "./BookmarkRow";

//CategoryCard component
export function CategoryCard({ category }) {
  const CtgCard = category.member.map((bookmark) => (
    // reused bookmarkRow component
    <BookmarkRow key={crypto.randomUUID()} bookmark={bookmark} />
  ));
  return (
    // CATEGORY CARD VIEW
    // {/* <div className="border-current border-8 border-solid p-4"> */}
    <div className="p-4">
      <h2 className="text-xl font-semibold dark:text-white pb-4">
        {category.categories}
      </h2>
      <ul>{CtgCard}</ul>
    </div>
  );
}
