import { Building, GitCommit } from "lucide-react";

const logos = [
    { name: "Google", icon: <GitCommit className="w-10 h-10"/> },
    { name: "Apple", icon: <GitCommit className="w-10 h-10"/> },
    { name: "Microsoft", icon: <GitCommit className="w-10 h-10"/> },
    { name: "Amazon", icon: <GitCommit className="w-10 h-10"/> },
    { name: "Netflix", icon: <GitCommit className="w-10 h-10"/> },
    { name: "Facebook", icon: <GitCommit className="w-10 h-10"/> },
]

export default function TrustedBy() {
  return (
    <section className="py-12">
        <div className="container">
            <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Our resumes are trusted by employees at:
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
                {logos.map((logo, index) => (
                    <div key={index} className="flex justify-center items-center text-gray-400 hover:text-gray-600 transition-colors">
                        {logo.icon}
                        <span className="text-lg font-semibold ml-2">{logo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
