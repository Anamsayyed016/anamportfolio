"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Database, Globe, Server, GitBranch, Palette, Brain } from "lucide-react"

const skillCategories = [
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: [
      { name: "Python", level: 95 },
      { name: "Django", level: 90 },
      { name: "Flask", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    title: "Frontend Development",
    icon: <Globe className="h-6 w-6" />,
    skills: [
      { name: "React.js", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "HTML5/CSS3", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "SCSS/Sass", level: 80 },
    ],
  },
  {
    title: "Database & Storage",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "SQLAlchemy", level: 82 },
      { name: "Database Design", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <GitBranch className="h-6 w-6" />,
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS/Cloud", level: 75 },
      { name: "Linux/Unix", level: 82 },
      { name: "CI/CD", level: 78 },
      { name: "Nginx", level: 75 },
    ],
  },
]

const softSkills = [
  "Problem Solving",
  "Team Leadership",
  "Project Management",
  "Client Communication",
  "Agile/Scrum",
  "Code Review",
  "Mentoring",
  "Technical Writing",
]

const certifications = [
  "Python Web Development Certification",
  "Django Advanced Concepts",
  "React.js Professional",
  "AWS Cloud Practitioner",
  "Agile Project Management",
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies I work with to deliver exceptional
            results.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{category.icon}</div>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                  <Brain className="h-6 w-6" />
                </div>
                <span>Soft Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Palette className="h-6 w-6" />
                </div>
                <span>Certifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
