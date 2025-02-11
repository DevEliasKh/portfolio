import NavBar from "@/components/NavBar";



import NAV_BAR_LINK from "@/constants/NavBar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar links={NAV_BAR_LINK} />
    </div>
  );
}
