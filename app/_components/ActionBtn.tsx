import Link from "next/link";

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const ActionBtn: React.FC<Props> = ({ href, className = "", children }) => {
  const style = `cursor-pointer rounded-md border border-transparent px-3 py-2 font-medium bg-palette-4 transition-all duration-300 hover:border-palette-1 ${className}`;

  return (
    <Link className={style} href={href}>
      {children}
    </Link>
  );
};

export default ActionBtn;
