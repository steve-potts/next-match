import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      Hello app!
      <Button
        as={Link}
        href="/members"
        color="primary"
        variant="bordered"
        startContent={<FaRegSmile size={20} />}>
        Click Me!
      </Button>
    </div>
  );
}
