import NavLinks from "./NavLinks";

const NavBar: React.FC = () => {
  return (
    <header className="border-b border-palette-3 bg-palette-2">
      <div className="mx-6 max-w-7xl 2xl:mx-auto">
        <div className="flex h-16 items-center">
          {/* Logo */}
          <div className="w-16 font-bold">Logo</div>

          {/* Nav Links */}
          <NavLinks />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
