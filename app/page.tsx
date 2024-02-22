import Image from "next/image";
import {fetchChampionsData, fetchChampionsDataExtended} from "@/lib/api";

export default async function Home() {
  fetchChampionsDataExtended();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
