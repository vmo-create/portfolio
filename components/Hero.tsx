"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const Hero = () => {
  const projects = [
    {
      id: 1,
      title: "First project",
      year: "2025",
      gradient: "from-blue-400 via-blue-500 to-green-400",
      route: "/card-1",
    },
    {
      id: 2,
      title: "First project",
      year: "2025",
      gradient: "from-green-400 via-teal-500 to-yellow-400",
      route: "/card-2",
    },
    {
      id: 3,
      title: "First project",
      year: "2025",
      gradient: "from-blue-400 via-blue-500 to-green-400",
      route: "/card-3",
    },
    {
      id: 4,
      title: "First project",
      year: "2025",
      gradient: "from-green-400 via-teal-500 to-yellow-400",
      route: "/card-4",
    },
  ];

  return (
    <div className="min-h-screen bg-background px-8 py-12 max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="mb-24">
        <h1 className="text-4xl font-bold mb-2 text-foreground">
          Vanessa Larriane Moras
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Senior UX Designer
        </p>

        <div className="mb-8 max-w-md">
          <p className="text-base leading-relaxed text-foreground mb-8">
            A seasoned Senior UX Designer with 7+ years of experience,
            <br />
            I excel in leading complex marketing and design projects
            <br />
            from concept to completion.
          </p>
        </div>

        <Button variant="outline" size="default" className="text-foreground">
          Get a copy of my resume
        </Button>
      </section>

      {/* Selected Works Section */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold mb-8 text-foreground">
          Selected works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link href={project.route} key={project.id}>
              <div key={project.id} className="group cursor-pointer">
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 transition-all duration-300 group-hover:scale-[1.02]`}
                ></div>
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-medium text-foreground">
                    {project.title}
                  </h3>
                  <span className="text-base text-muted-foreground">
                    {project.year}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-foreground">
          Lets connect
        </h2>

        <div className="space-y-2">
          <div className="text-foreground text-base">https.vmo@gmail.com</div>

          <div className="text-foreground text-base">(63) 960-447-4541</div>

          <div className="text-foreground text-base">LinkedIn</div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
