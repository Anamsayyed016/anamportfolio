"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arpan Gohe",
    role: "CEO, TechRooot",
    company: "TechRooot",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    testimonial:
      "Anam delivered an exceptional e-commerce platform that exceeded our expectations. Her expertise in Django and React.js, combined with her attention to detail, made the entire development process smooth and efficient. The final product was robust, scalable, and user-friendly.",
    project: "E-commerce Platform Development",
  },
  {
    name: "Yash Rawat",
    role: "Co-founder & Team Lead,",
    company: "JustTakeMyCard",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    testimonial:
      "Working with Anam was a fantastic experience. As our front-end developer, she played a key role in building a clean, responsive, and engaging interface for our digital visiting card platform using React.js and Tailwind CSS. Her proactive approach to research and development significantly improved the user experience. Anam’s dedication, creativity, and problem-solving skills were invaluable to our team and the success of the product.",
    project: "Digital Visiting Card Platform",
  },
  {
    name: "Tanveer Ahmed",
    role: "Owner",
    company: "Glossy Glow",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    testimonial:
      "Anam did an outstanding job developing our cosmetic e-commerce website, Glossy Glow. Her expertise in front-end design and seamless integration with backend systems made the platform visually appealing and easy to navigate. She understood the brand's aesthetic and delivered a user-friendly, mobile-optimized site that our customers love. Her professionalism and commitment to quality were evident throughout the project.",
    project: "Cosmetic Website",
  },
];

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "3+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what my clients say
            about working with me and the results we&apos;ve achieved together.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic mb-4 pl-6">
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </p>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-primary">
                    Project: {testimonial.project}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Join My Happy Clients?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let&apos;s work together to bring your vision to life. I&apos;m
            committed to delivering exceptional results that exceed your
            expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-block">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Start Your Project
              </button>
            </a>
            <a href="mailto:anamsayyed58@gmail.com" className="inline-block">
              <button className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors">
                Get Free Consultation
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
