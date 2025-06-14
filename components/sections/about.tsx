"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "Senior Full-Stack Developer",
    description:
      "Leading development of complex web applications using Django, React.js, and modern technologies.",
    type: "work",
  },
  {
    year: "2023",
    title: "Python Web Development Certification",
    description:
      "Advanced certification in Django and Flask frameworks with focus on scalable architecture.",
    type: "education",
  },
  {
    year: "2022",
    title: "Full-Stack Python Developer",
    description:
      "Developed multiple e-commerce and streaming platforms using Python and React.js.",
    type: "work",
  },
  {
    year: "2021",
    title: "Bachelor in Computer Science",
    description:
      "Graduated with honors, specializing in software engineering and web technologies.",
    type: "education",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate full-stack developer with expertise in Python, Django,
            Flask, and React.js. I love creating efficient, scalable solutions
            that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Profile Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src="/profile.jpg"
                    alt="Anam Sayyed"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">Anam Sayyed</h3>
                    <p className="text-muted-foreground">
                      Full-Stack Python Developer
                    </p>
                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      Bhopal, Madhya Pradesh
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate full-stack developer with over 3 years of
                  experience in building robust web applications. My expertise
                  spans across Python frameworks like Django and Flask, combined
                  with modern frontend technologies like React.js and Next.js. I
                  specialize in creating scalable, user-friendly applications
                  that solve real-world problems.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Specializations</h4>
                    <div className="space-y-1">
                      <Badge variant="secondary">Python Development</Badge>
                      <Badge variant="secondary">Django & Flask</Badge>
                      <Badge variant="secondary">React.js & Next.js</Badge>
                      <Badge variant="secondary">API Development</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Industries</h4>
                    <div className="space-y-1">
                      <Badge variant="outline">E-commerce</Badge>
                      <Badge variant="outline">Media & Streaming</Badge>
                      <Badge variant="outline">SaaS Applications</Badge>
                      <Badge variant="outline">Data Analytics</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">
              Experience & Education
            </h3>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            item.type === "work"
                              ? "bg-primary/10 text-primary"
                              : "bg-secondary/10 text-secondary"
                          }`}
                        >
                          {item.type === "work" ? (
                            <Award className="h-5 w-5" />
                          ) : (
                            <GraduationCap className="h-5 w-5" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-primary">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
