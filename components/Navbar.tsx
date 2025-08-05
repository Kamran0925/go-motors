import Link from "next/link";
import Image from "next/image";

const NavBar = () => (
  <header className="w-full absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link
        href="/"
        className="flex items-center gap-3 hover:opacity-90 transition-opacity"
      >
        <Image
          src="/logo.png"
          alt="Go Motors Logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <h4 className="text-2xl font-semibold tracking-tight text-primary-blue">
          Go Motors
        </h4>
      </Link>
    </nav>
  </header>
);

export default NavBar;
