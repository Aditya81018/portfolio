import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div id="navbar" className="flex justify-between items-center">
      <Link
        to={"/"}
        id="brand"
        className="font-[italianno] text-5xl text-glow-50 hover:scale-110 transition-all"
      >
        AJ
      </Link>

      <div id="links" className="flex gap-4">
        <Button variant={"link"} className="group">
          <Link to="/projects" className="group-hover:text-glow-50">
            Projects
          </Link>
        </Button>
        <Button variant={"link"} className="group">
          <Link to="/blogs" className="group-hover:text-glow-50">
            Blogs
          </Link>
        </Button>
        <Button variant={"link"} className="group">
          <a href="#contacts" className="group-hover:text-glow-50">
            Contacts
          </a>
        </Button>
      </div>
    </div>
  );
}
