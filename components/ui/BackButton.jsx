import Link from "next/link";

const BackButton = () => {
  return (
    <Link href="/" className="font-bold text-customGreen">
      <span className="mr-1">&lt;</span>
      Back
    </Link>
  );
};

export default BackButton;
