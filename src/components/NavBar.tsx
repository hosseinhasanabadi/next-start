
import Link from "next/link";

function NavBar() {
  return (
    <div className="flex justify-center items-center gap-4">
      <Link href="/">Home</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/create-blog">Create</Link>
    </div>
  );
}

export default NavBar;
