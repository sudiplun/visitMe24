import ToggleButton from "./ToggleButton";
function Navbar() {
  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between px-4 py-2">
      Your fav sites
      <ToggleButton />
    </nav>
  );
}
export default Navbar;
