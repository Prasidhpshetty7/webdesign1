// Static usage data
const usageItems = [
  {
    category: "Development",
    items: [
      { name: "VS Code", description: "Primary code editor" },
      { name: "Git & GitHub", description: "Version control" },
      { name: "Node.js", description: "JavaScript runtime" },
      { name: "npm/yarn", description: "Package managers" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", description: "UI library" },
      { name: "Next.js", description: "React framework" },
      { name: "TailwindCSS", description: "CSS framework" },
      { name: "TypeScript", description: "Type-safe JavaScript" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", description: "Server runtime" },
      { name: "Express", description: "Web framework" },
      { name: "MongoDB", description: "NoSQL database" },
      { name: "PostgreSQL", description: "SQL database" },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma", description: "UI/UX design" },
      { name: "Adobe XD", description: "Prototyping" },
    ],
  },
];

export default function Usage() {
  return (
    <section className="max-w-2xl">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold tracking-tight text-zinc-800 dark:text-white">Usage</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl">
          Tools, technologies and gadgets I use on a daily basis but not limited to.
        </p>
      </div>
      
      <div className="space-y-8">
        {usageItems.map((category) => (
          <div key={category.category}>
            <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-white">{category.category}</h3>
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li 
                  key={item.name}
                  className="flex items-center gap-3 p-3 dark:bg-zinc-900/50 bg-white border dark:border-zinc-800 border-gray-200 rounded-lg"
                >
                  <span className="font-medium text-zinc-800 dark:text-white">{item.name}</span>
                  <span className="text-zinc-500 dark:text-zinc-400">— {item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
