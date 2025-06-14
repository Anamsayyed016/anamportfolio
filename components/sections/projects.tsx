"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Play } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Cafezafran",
    description:
      "CafeZafran is a responsive café website built for a local café based in Bhopal. The site allows users to explore the café's ambiance, view the menu, and find location details.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Python Django",
    ],
    features: [
      "Fully responsive and mobile-friendly design",
      "Interactive UI showcasing menu and café details",
      "Clean navigation and modern layout",
      "SEO-optimized structure",
      "Developed to enhance local visibility and online presence",
    ],
    liveUrl: "https://anamsayyed16.pythonanywhere.com/",
    githubUrl: "https://github.com/Anamsayyed016/cafezafran",
    status: "Live",
  },
  {
    title: "Sunshine E-commerce Platform",
    description:
      "Full-featured e-commerce solution with Django backend and React frontend, including payment integration, inventory management, and order tracking.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: [
      "Django",
      "React.js",
      "MySQL",
      "Stripe API",
      "Docker",
      "Nginx",
    ],
    features: [
      "Product catalog & search",
      "Shopping cart & checkout",
      "Payment processing",
      "Order management",
      "Inventory tracking",
      "Admin panel",
    ],
    liveUrl: "https://vercel.com/anamsayyed016s-projects/sunshine",
    githubUrl: "https://github.com/Anamsayyed016/Sunshine",
    status: "Live",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack
            development, API design, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={
                      project.status === "Live" ? "default" : "secondary"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features
                      .slice(0, 4)
                      .map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="flex-1">
                        <Play className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Link
            href="https://github.com/Anamsayyed016"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
