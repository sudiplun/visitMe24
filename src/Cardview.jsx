import "./Cardview.css";
import { BOOKMARKS } from "./data";
// BookmarkRow component
function BookmarkRow({ bookmark }) {
  return (
    <li className="bookmarkList">
      {/* <img src={bookmark.icon} alt={bookmark.title} /> */}
      <a href={bookmark.url}> {bookmark.title}</a>
    </li>
  );
}
//CategoryCard component
function CategoryCard({ category }) {
  const CtgCard = category.member.map((bookmark) => (
    // reused bookmarkRow component
    <BookmarkRow key={crypto.randomUUID()} bookmark={bookmark} />
  ));
  return (
    <div className="categoryCard">
      <h2 className="titleCategory">{category.categories}</h2>
      <ul className="totalList">{CtgCard}</ul>
    </div>
  );
}
// CardView component with return
export default function Cardview() {
  // const fltCtg = BOOKMARKS.filter(
  //   (bookmark) => bookmark.categories === "TOOLS",
  // );
  const book = BOOKMARKS.map((category) => (
    <div key={category.categories}>
      <CategoryCard category={category} />
    </div>
  ));
  return <div className="cardView">{book}</div>;
}
