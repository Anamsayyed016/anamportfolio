"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  BarChart,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Full-Stack Web App Development",
    description:
      "Build scalable and modern web apps using Python (Django/Flask) for the backend and React.js for the frontend—optimized for performance, security, and UI/UX design.",
    features: [
      "Custom feature implementation",
      "Fully responsive UI/UX design",
      "Secure database integration",
      "REST/GraphQL API development",
      "Speed & performance tuning",
    ],
    pricing: "Starting at $2,000",
    popular: true,
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "Backend Systems & API Architecture",
    description:
      "Design robust APIs and backend systems using Django REST Framework or Flask with JWT authentication and modern data handling techniques.",
    features: [
      "RESTful & GraphQL API design",
      "Auth (JWT, OAuth) implementations",
      "API documentation (Swagger/Postman)",
      "Optimized database queries",
      "Backend logic modularization",
    ],
    pricing: "Starting at $1,200",
    popular: false,
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "React.js & Frontend Engineering",
    description:
      "Deliver high-performance frontends using React.js, Next.js, and TypeScript—fully responsive and production-ready for mobile and desktop.",
    features: [
      "Component-based architecture",
      "TypeScript & Next.js integration",
      "State management (Redux/Zustand)",
      "Third-party library support",
      "SEO performance enhancements",
    ],
    pricing: "Starting at $1,500",
    popular: false,
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Database Engineering & Optimization",
    description:
      "Efficiently design, migrate, and tune databases with PostgreSQL, MySQL, and MongoDB for high performance and reliability.",
    features: [
      "Database schema & design",
      "Advanced query optimization",
      "Smooth data migration",
      "Performance & indexing strategies",
      "Backup & disaster recovery setup",
    ],
    pricing: "Starting at $800",
    popular: false,
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "E-Commerce Platform Development",
    description:
      "Launch fully functional e-commerce stores with seamless payment integration, real-time inventory tracking, and powerful dashboards.",
    features: [
      "Shopping cart systems",
      "Payment gateway (Stripe, Razorpay, etc.)",
      "Admin & analytics dashboards",
      "Order & inventory tracking",
      "Custom product pages & filters",
    ],
    pricing: "Starting at $3,000",
    popular: true,
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Data Analytics & Visualization",
    description:
      "Build interactive dashboards and custom reporting tools using Django and modern JS charting libraries.",
    features: [
      "Real-time and historical analytics",
      "Visual reports and charts (Chart.js, D3)",
      "Export-ready formats (PDF, Excel)",
      "KPIs & metrics visualization",
      "API-connected data sources",
    ],
    pricing: "Starting at $1,800",
    popular: false,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "Understanding your requirements, goals, and technical specifications.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    description:
      "Creating wireframes, system architecture, and technical documentation.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Agile development with regular updates and comprehensive testing.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "Production deployment with ongoing maintenance and support.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services & Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services tailored to your business
            needs. From concept to deployment, I deliver high-quality solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative h-full ${
                service.popular ? "border-primary shadow-lg" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg text-primary w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t">
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {service.pricing}
                    </span>
                  </div>
                  <Button
                    className="w-full"
                    variant={service.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              My Development Process
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to ensure your project is delivered on time,
              within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {step.step}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8" />
                  )}
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let's discuss your requirements and create something amazing
            together. Get in touch for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Zap className="mr-2 h-5 w-5" />
              Start a Project
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
