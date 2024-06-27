import Link from "next/link";

const Breadcrumb = ({ name }) => {
  return (
    <nav className="my-4 capitalize">
      <Link href="/">
        <span className="text-blue-500">Home</span>
      </Link>
      <span className="ml-1">&gt;</span> {name}
    </nav>
  );
};

export default Breadcrumb;
