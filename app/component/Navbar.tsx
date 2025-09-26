import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between pb-4 border-b border-gray-200 ">
      {/*LEFT SIDE - LOGO*/}
      <Link href={"/"} className="flex  items-center">
        <Image
          src="/logo.png"
          alt="TrenLama"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider ml-2">
          TRENDLAMA.
        </p>
        {/* we can use hiddent the text from other screens using hidden md:blcok */}
      </Link>

      {/*RIGHT SIDE - MENU*/}
      <div className="div">
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
