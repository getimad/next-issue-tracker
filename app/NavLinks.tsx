"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks: React.FC = () => {
  const pathname = usePathname();

  const links: { id: number; title: string; href: string }[] = [
    { id: 0, title: "Dashboard", href: "/" },
    { id: 1, title: "Issues", href: "/issues" },
  ];

  return (
    <nav>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li className="relative" key={link.id}>
            {/* Link */}
            <Link className="text-palette-4" href={link.href}>
              {link.title}
            </Link>

            {/* Active Link Indicator */}
            {pathname === link.href && (
              <span className="absolute bottom-0 left-0 h-[1px] w-full rounded-full bg-palette-4"></span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
