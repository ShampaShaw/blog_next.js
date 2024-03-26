"use client"
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const q = searchParams.get("q")
    console.log(q)

    const handleClick = () => {
        console.log("Clicked")
        router.forward()
    }

    //prefetch is set to false to disable prefetching it might cause performance issues  //performance issues is caused by the fact that the browser is downloading the page before the user even clicks on the link
  return (
    <div>
      <Link href="/" prefetch={false}>CLick here</Link>     
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
}

export default NavigationTestPage;