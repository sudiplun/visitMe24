// CategoryRow component
function CategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category.categories}</th>
    </tr>
  );
}
// BookmarkRow component
function BookmarkRow({ bookmark }) {
  return (
    <ul>
      <img src={bookmark.icon} alt={bookmark.title} />
      <a href={bookmark.url}> {bookmark.title}</a>
    </ul>
  );
}
// CardView component with return
export default function Cardview() {
  return (
    <div>
      {BOOKMARKS.map((category) => (
        <div key={category.categories}>
          <CategoryRow category={category} />
          {category.member.map((bookmark) => (
            <BookmarkRow key={bookmark.url} bookmark={bookmark} />
          ))}
        </div>
      ))}
    </div>
  );
}

//json
const BOOKMARKS = [
  // Tools
  {
    categories: "TOOLS",
    member: [
      {
        "sub-category": "Network",
        icon: "https://api.iconify.design/fluent-emoji-flat/alarm-clock.svg",
        title: "Toffeeshare-Local",
        url: "https://toffeeshare.com/",
      },
      {
        "sub-category": "Converter",
        icon: "icon",
        title: "Passport Photo maker",
        url: "https://www.cutout.pro/passport-photo-maker",
      },
    ],
  },
  // IELTS
  {
    categories: "IELTS",
    member: [
      {
        icon: "icon",
        title: "cambrige dictionary",
        url: "https://dictionary.cambridge.org/",
      },
    ],
  },
  // sport
  {
    categories: "sport",
    member: [
      {
        "sub-category": "live",
        icon: "icon",
        title: "crichd",
        url: "http://www.crichd.tv",
      },
      {
        "sub-category": "live",
        icon: "icon",
        title: "totalsportk",
        url: "https://totalsportk.org/",
      },
    ],
  },
  // Ai
  {
    categories: "AI",
    member: [
      {
        "sub-category": "Core",
        icon: "icon",
        title: "Chatgpt",
        url: "https://chatgpt.com/",
      },
    ],
  },
];
