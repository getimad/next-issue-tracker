"use client";

interface Props {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}

const ClientBtn: React.FC<Props> = ({ children, className = "", onClick }) => {
  const style = `cursor-pointer rounded-md border border-transparent px-3 py-2 font-medium transition-all duration-300 hover:border-palette-1 ${className}`;

  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default ClientBtn;
