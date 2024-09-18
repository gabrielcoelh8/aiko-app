import { LuAlignJustify, LuMoon } from "react-icons/lu";

function Navbar() {
    return (
        <div>
          <section className="w-screen flex justify-between">
            <div><LuAlignJustify /></div>
            <div>Content</div>
            <div><LuMoon /></div>
          </section>
        </div>
      );
}

export default Navbar