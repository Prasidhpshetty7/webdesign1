import { Slide } from "@/app/animation/Slide";
import RefLink from "../shared/RefLink";

// Static heroes data
const heroes = [
  { id: "1", name: "Dan Abramov", url: "https://twitter.com/dan_abramov", met: false },
  { id: "2", name: "Kent C. Dodds", url: "https://kentcdodds.com", met: false },
  { id: "3", name: "Theo Browne", url: "https://twitter.com/t3dotgg", met: false },
  { id: "4", name: "Fireship", url: "https://fireship.io", met: false },
  { id: "5", name: "Traversy Media", url: "https://traversymedia.com", met: false },
  { id: "6", name: "The Primeagen", url: "https://twitter.com/ThePrimeagen", met: false },
  { id: "7", name: "Wes Bos", url: "https://wesbos.com", met: false },
  { id: "8", name: "Josh Comeau", url: "https://joshwcomeau.com", met: false },
];

export default function Heroes() {
  if (!heroes || heroes.length === 0) {
    return null;
  }

  return (
    <section className="mt-32 max-w-5xl">
      <Slide delay={0.17}>
        <h2 className="text-4xl mb-4 font-bold tracking-tight text-zinc-800 dark:text-white">Heroes</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
          Here&apos;s my curated lineup of code conjurers and digital dynamos that inspire me every day.{" "}
          <strong className="font-semibold">
            &quot;In no particular order&quot;
          </strong>
        </p>
      </Slide>

      <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12 tracking-tight">
        {heroes.map((heroe) => (
          <li
            key={heroe.id}
            className="flex items-center gap-x-2 dark:bg-zinc-900/50 bg-white border dark:border-zinc-800 border-gray-200 rounded-md px-4 py-3 hover:border-purple-400 dark:hover:border-zinc-700 transition-all"
          >
            <RefLink
              href={heroe.url}
              className="font-medium tracking-wide hover:text-purple-500 text-zinc-800 dark:text-white transition-colors"
            >
              {heroe.name}
            </RefLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
