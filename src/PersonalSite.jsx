import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail, FileDown, FlaskConical, Rocket, GraduationCap } from "lucide-react";

const PROJECTS = [
  {
    title: "Organosilane Purification (EMD) — Design Lab",
    description:
      "Process design for organosilane pyrolysis + distillation train; Aspen modeling, HAZOP, PFD/P&ID, cost analysis.",
    tags: ["Aspen Plus", "Distillation", "HAZOP", "Process Design"],
    link: "#",
  },
  {
    title: "PEM Fuel Cell Lab — Polarization Curves",
    description:
      "Experimental runs, data cleaning in MATLAB, activation/ohmic/mass-transfer regimes; uncertainty + error bars.",
    tags: ["Fuel Cells", "MATLAB", "Data Analysis"],
    link: "#",
  },
  {
    title: "Absorber Design via Kremser Method",
    description:
      "Hydrocarbon removal at 400 psia; temperature sensitivity study (97.5°F vs 150°F) with design charts.",
    tags: ["Mass Transfer", "Kremser", "Thermo"],
    link: "#",
  },
];

const Section = ({ id, title, icon, children }) => (
  <section id={id} className="scroll-mt-24 py-16">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-3 mb-8">
        {icon}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

export default function PersonalSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b">
         <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-end">
          <div className="hidden sm:flex items-center gap-4">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#experience" className="hover:text-indigo-600">Experience</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <Button asChild className="ml-2">
  	<a href="/Rika_Resume.pdf" aria-label="Open resume" target="_blank" rel="noreferrer">
    	<FileDown className="mr-2 h-4 w-4"/>Resume
  	</a>
	</Button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <Section id="home" title="" icon={null}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm uppercase tracking-widest text-indigo-600 font-medium">Hello, I'm</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold leading-tight">Rika Yo — aspiring engineer</h1>
            <p className="mt-4 text-slate-600 max-w-prose">
              I recently graduated as a Chemical Engineering major from UCSD, currently looking for exciting opportunities. Resume and LinkedIn page don't describe me well, thus this website.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="default"><a href="#projects">See Projects</a></Button>
              <Button asChild variant="secondary"><a href="#contact">Get in Touch</a></Button>
              <Button asChild variant="ghost"><a href="https://www.linkedin.com/in/rikayo" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 mr-2"/>LinkedIn</a></Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute -inset-2 bg-indigo-200/40 blur-2xl rounded-full" aria-hidden/>
              <Card className="relative border-0 shadow-xl rounded-2xl">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
                    <div className="p-8 text-center">
                      <FlaskConical className="mx-auto h-16 w-16"/>
                      <p className="mt-4 text-slate-600">Process design • Aspen • MATLAB • Fuel Cells • EUV • Data viz</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* About */}
      <Section id="about" title="About" icon={<GraduationCap className="h-6 w-6 text-indigo-600"/>}>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <p className="text-slate-700 leading-relaxed">
              👉 Short bio: Born in Japan, primary school in China, middle school in Japan, high school in New Zealand. 
              I enjoy turning messy systems into clean models and readable visuals. Interests span
              semiconductor manufacturing, clean energy, and process optimization.
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
              <li>• Aspen Plus / HYSYS</li>
              <li>• MATLAB / Python (Pandas, NumPy)</li>
              <li>• HAZOP / PFD / P&ID</li>
              <li>• Fuel Cells, RO, Plate HX</li>
              <li>• EUV Lithography basics</li>
              <li>• Data Visualization</li>
            </ul>
          </div>
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-base">Highlights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-700">
              <div className="flex items-start gap-2"><Rocket className="h-4 w-4 mt-0.5 text-indigo-600"/>Industry internship at Boeing (process improvement)</div>
              <div className="flex items-start gap-2"><Rocket className="h-4 w-4 mt-0.5 text-indigo-600"/>EMD-sponsored organosilane design project</div>
              <div className="flex items-start gap-2"><Rocket className="h-4 w-4 mt-0.5 text-indigo-600"/>Trilingual: English • 日本語 • 中文</div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" icon={<FlaskConical className="h-6 w-6 text-indigo-600"/>}>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg leading-snug">{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="px-2 py-1 text-xs rounded-full bg-slate-100">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button asChild size="sm" variant="secondary"><a href={p.link} target="_blank" rel="noreferrer">View</a></Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" icon={<Rocket className="h-6 w-6 text-indigo-600"/>}>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Boeing — Process Engineering Intern</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              <ul className="list-disc pl-5 space-y-1">
                <li>Partnered with QA + suppliers to reduce defects and cycle time.</li>
                <li>Ran root-cause analyses; implemented SOP tweaks with quantifiable gains.</li>
                <li>Presented weekly dashboards and A/B results to stakeholders.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">UCSD — Process Design & Lab</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              <ul className="list-disc pl-5 space-y-1">
                <li>Designed organosilane purification train; Aspen + economic analysis.</li>
                <li>PEM fuel cell lab: polarization curves, regime analysis, error bars.</li>
                <li>Absorption column design via Kremser; temp sensitivity study.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" icon={<Mail className="h-6 w-6 text-indigo-600"/>}>
        <div className="max-w-2xl">
          <p className="text-slate-700">Have a project, role, or idea you'd like to discuss? Send a note:</p>
          <form className="mt-6 grid gap-3" onSubmit={(e) => e.preventDefault()}>
            <input className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name"/>
            <input className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email" type="email"/>
            <textarea className="border rounded-xl px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Message"/>
            <div className="flex gap-3">
              <Button type="submit">Send</Button>
              <Button asChild variant="secondary"><a href="mailto:you@example.com"><Mail className="h-4 w-4 mr-2"/>Email me</a></Button>
            </div>
          </form>
          <div className="mt-6 flex gap-3">
            <Button asChild variant="ghost"><a href="https://www.linkedin.com/in/rikayo" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 mr-2"/>LinkedIn</a></Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 border-t">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Rika Yo. All rights reserved.</span>
          <a href="#home" className="hover:text-indigo-600">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
