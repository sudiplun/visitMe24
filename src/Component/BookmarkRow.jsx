// BookmarkRow component
export function BookmarkRow({ bookmark }) {
  return (
    // INDIVUSAL LIST OF BOOKMARKS
    <li className="dark:text-slate-200">
      {/* <img src={bookmark.icon} alt={bookmark.title} /> */}
      <a href={bookmark.url}> {bookmark.title}</a>
    </li>
  );
}
