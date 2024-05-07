import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <h1 className="text-5xl mb-10">Login page!</h1>
      <Button color="secondary" >
        <Link href={"/home"}>
          <div>
            <h1>Home Page</h1>
          </div>
        </Link>
      </Button>
    </main>
  );
}
