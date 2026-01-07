import { Slide } from "@/app/animation/Slide";
import { RiBriefcase3Fill } from "react-icons/ri";

// Static job data
const jobs = [
  {
    id: "1",
    name: "Freelance",
    jobTitle: "Full-Stack Developer",
    startDate: "2023-01-01",
    endDate: null,
    description: "Building modern web applications and providing web development services for clients worldwide.",
    url: "https://github.com/Prasidhpshetty7",
  },
  {
    id: "2",
    name: "Personal Projects",
    jobTitle: "Web Designer & Developer",
    startDate: "2022-06-01",
    endDate: "2022-12-31",
    description: "Developed multiple personal projects to enhance skills in React, Next.js, and modern web technologies.",
    url: "https://github.com/Prasidhpshetty7",
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export default function Job() {
  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="text-4xl mb-4 font-bold tracking-tight text-zinc-800 dark:text-white">
            Work Experience
          </h2>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
            >
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid place-items-center dark:bg-zinc-900/50 bg-white border dark:border-zinc-800 border-gray-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative hover:border-purple-400 dark:hover:border-zinc-700 transition-all"
              >
                <RiBriefcase3Fill className="text-3xl text-purple-500" />
              </a>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">{job.name}</h3>
                <p className="text-zinc-700 dark:text-zinc-300">{job.jobTitle}</p>
                <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                  {formatDate(job.startDate)} -{" "}
                  {job.endDate ? (
                    formatDate(job.endDate)
                  ) : (
                    <span className="text-purple-500">
                      Present
                    </span>
                  )}
                </time>
                <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
}
