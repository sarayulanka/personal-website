/**
 * Bio-Digital Fusion Design System
 * - Diagonal flow architecture with organic shapes
 * - Deep teal (oklch(0.55 0.12 200)) and warm amber (oklch(0.72 0.15 65))
 * - Typography: Space Grotesk (headings), IBM Plex Sans (body), JetBrains Mono (code)
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Instagram, MapPin, Award, Code2, Briefcase, GraduationCap, Trophy, Heart } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Sarayu Lanka</h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection("projects")} className="text-foreground hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection("experience")} className="text-foreground hover:text-primary transition-colors">Experience</button>
              <button onClick={() => scrollToSection("skills")} className="text-foreground hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </div>
            <div className="flex gap-3">
              <a href="https://instagram.com/lanka.sarayu" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:sarayulanka9@gmail.com" className="text-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Diagonal composition with parallax */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div 
          ref={heroRef}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/images/hero-bio-digital.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "translateY(0)",
            willChange: "transform"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block">
                <Badge variant="secondary" className="text-sm font-mono mb-4 px-4 py-2">
                  <MapPin className="w-3 h-3 inline mr-2" />
                  Ellicott City, Maryland
                </Badge>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Sarayu <span className="text-primary">Lanka</span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                15-Year-Old Developer & Biology Enthusiast
              </p>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Building technology that matters. Bridging code and biology to create meaningful impact.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" onClick={() => scrollToSection("projects")} className="glow-teal">
                  View My Work
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                  Get In Touch
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-6 text-sm">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="font-medium">10th Grade | Howard High School</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  <span className="font-medium">4.0 GPA | 1450 PSAT</span>
                </div>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-primary/20 organic-blob blur-3xl"></div>
              <div className="relative">
                <img 
                  src="/images/profile-photo.jpg" 
                  alt="Sarayu Lanka" 
                  className="rounded-3xl shadow-2xl w-full max-w-md mx-auto glow-teal"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 font-mono">01 — ABOUT</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">My Story</h2>
            </div>
            
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Hi, my name is Sarayu, and I'm fifteen years old. I began my coding journey at eight under my dad's guidance, learning Python and core programming concepts. What started as curiosity quickly turned into something I couldn't let go of; I kept building, learning, and exploring new tools, from HTML, CSS, and JavaScript to Django. Along the way, I earned two certifications in Python and two in Amazon Web Services, but more than the credentials, coding became a way for me to develop and problem-solve.
                  </p>
                  <p className="text-lg leading-relaxed">
                    At the same time, my love for biology grew from a much more personal place. Watching my pediatrician work showed me how deeply biology can impact people's lives, and it made me want to be part of that impact someday. Whether through technology or science, I've always been driven by the same goal which is to build things that matter and to help people in meaningful ways through making a genuine difference.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Project - Nutrition App */}
      <section id="projects" className="py-24 diagonal-section bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 font-mono">02 — FEATURED PROJECT</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">AI-Powered Nutrition Assistant</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Currently developing a comprehensive mobile app that bridges technology and wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <img 
                src="/images/project-nutrition-app.png" 
                alt="AI-Powered Nutrition Assistant App" 
                className="rounded-2xl shadow-2xl glow-amber"
              />
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A mobile application designed to support users on their nutrition and wellness journey through accessible resources, evidence-based guidance, and gamified motivation. Launching on the Apple App Store with plans to expand to Google Play.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3">Key Features</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span><strong>Food Resource Locator:</strong> Interactive map to find nearby food shelters, kitchens, and community meal services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span><strong>Natural Food Remedy Assistant:</strong> AI-powered feature providing food-based health guidance using FDA FoodData Central</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span><strong>Gamified Nutrition Goals:</strong> Streak tracking, badges, and achievements to encourage healthy habits</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="font-mono">React Native</Badge>
                  <Badge variant="secondary" className="font-mono">Node.js</Badge>
                  <Badge variant="secondary" className="font-mono">AWS DynamoDB</Badge>
                  <Badge variant="secondary" className="font-mono">Expo Go</Badge>
                  <Badge variant="secondary" className="font-mono">Google Places API</Badge>
                  <Badge variant="secondary" className="font-mono">FDA FoodData Central</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section id="skills" className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/images/skills-tech-abstract.png)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 font-mono">03 — EXPERTISE</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Certifications</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="font-mono">Python</Badge>
                    <Badge className="font-mono">JavaScript</Badge>
                    <Badge className="font-mono">HTML</Badge>
                    <Badge className="font-mono">CSS</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Frameworks & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="font-mono">React Native</Badge>
                    <Badge className="font-mono">Django</Badge>
                    <Badge className="font-mono">AWS</Badge>
                    <Badge className="font-mono">Expo Go</Badge>
                    <Badge className="font-mono">Lambda</Badge>
                    <Badge className="font-mono">API Gateway</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">UI/UX Development</Badge>
                    <Badge variant="secondary">API Building</Badge>
                    <Badge variant="secondary">Cloud Computing</Badge>
                    <Badge variant="secondary">Database Integration</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-accent" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-secondary rounded-lg">
                  <p className="font-semibold">PCEP – Certified Entry-Level Python Programmer</p>
                  <p className="text-sm text-muted-foreground">Python Institute</p>
                </div>
                <div className="p-3 bg-secondary rounded-lg">
                  <p className="font-semibold">PCAP – Certified Associate Python Programmer</p>
                  <p className="text-sm text-muted-foreground">Python Institute</p>
                </div>
                <div className="p-3 bg-secondary rounded-lg">
                  <p className="font-semibold">AWS Certified Cloud Practitioner</p>
                  <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                </div>
                <div className="p-3 bg-secondary rounded-lg">
                  <p className="font-semibold">AWS Certified AI Practitioner</p>
                  <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 bg-gradient-to-br from-accent/10 to-primary/10 diagonal-section">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 font-mono">04 — EXPERIENCE</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Journey</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Product Engineer Intern</CardTitle>
                    <CardDescription>ProNetX</CardDescription>
                  </div>
                  <Badge variant="secondary" className="font-mono">Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>Work 10 hours per week on AI agentic flows using DSPy and Python</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>Contribute to New York Times Client Project utilizing AWS Bedrock models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>Collaborate with professional team on real-world AI implementations and enterprise solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Code Sensei</CardTitle>
                    <CardDescription>Code Ninjas, Hanover, Maryland</CardDescription>
                  </div>
                  <Badge variant="secondary" className="font-mono">June 2025 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Instruct students ages 5-14 in coding fundamentals, progressing from block-based coding to JavaScript and Python</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Mentor students in game development, debugging, and creative problem-solving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Adapt lessons to different learning styles while fostering an engaging, supportive environment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Website Manager</CardTitle>
                    <CardDescription>HoCo Monumental, Ellicott City, Maryland</CardDescription>
                  </div>
                  <Badge variant="secondary" className="font-mono">April 2025 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>Manage and lead a team of 60+ blog writers for mental health advocacy platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>Handle organization website and collaborate with leadership team to improve mental health awareness initiatives</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>AI Division Officer and Tutor</CardTitle>
                    <CardDescription>Scientific Minds of America</CardDescription>
                  </div>
                  <Badge variant="secondary" className="font-mono">March 2024 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Officer of Initiatives Division, specifically Artificial Intelligence Camp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Introduce Computer Science and AI to middle school students (grades 6-8)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Tutor two students in core subjects (English Language Arts and Math)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Research Internship</CardTitle>
                    <CardDescription>Sunshine For Cancer Kids, Ellicott City, Maryland</CardDescription>
                  </div>
                  <Badge variant="secondary" className="font-mono">July 2025 - August 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>Developed research experience on pediatric cancer by writing professional papers published on official website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>Completed internship with high honors</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Volunteer</CardTitle>
                    <CardDescription>LightHouse Senior Living, Ellicott City, Maryland</CardDescription>
                  </div>
                  <Badge variant="secondary" className="font-mono">June 2025 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Assist residents with daily activities, mobility, and basic care tasks under staff supervision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Engage with residents in conversations and activities to promote well-being</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 font-mono">05 — ACADEMICS</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Academic Excellence</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center border-2 border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold">4.0</CardTitle>
                <CardDescription>GPA</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Principal's Honor Roll</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-accent/20">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-3xl font-bold">1450</CardTitle>
                <CardDescription>PSAT Score</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Standardized Testing</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold">2028</CardTitle>
                <CardDescription>Expected Graduation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Howard High School</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-accent" />
                  Awards & Recognition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Presidential Award for Educational Excellence</p>
                    <p className="text-sm text-muted-foreground">Individual recognition from the President and U.S. Secretary of Education</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Outstanding Officer Award at SMOA</p>
                    <p className="text-sm text-muted-foreground">Recognition for exceptional dedication and outstanding service</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Extracurriculars */}
      <section className="py-24 bg-secondary/30 diagonal-section">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 font-mono">06 — ACTIVITIES</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Beyond the Code</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Robotics Team Member</CardTitle>
                <CardDescription>FIRST Tech Challenge</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Selected for the competitive robotics team where I collaborate with teammates to design, build, and program robots for challenging competitions. Our team placed in the top ten in the DMV area, demonstrating strong problem-solving skills and technical innovation under pressure.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Science Olympiad</CardTitle>
                <CardDescription>Howard High School</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Compete in multiple science disciplines including biology, chemistry, and engineering events. Through dedicated preparation and teamwork, our team qualified for the State competition after excelling at regionals, showcasing both individual expertise and collaborative spirit.</p>
              </CardContent>
            </Card>



            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Black Belt Martial Artist</CardTitle>
                <CardDescription>Victory Martial Arts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Earned my 1st Degree Black Belt through years of dedicated training in discipline, focus, and perseverance. As a member of the elite STORM demonstration team, I competed at the Battle of Baltimore and secured first place, combining technical skill with performance excellence.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pianist</CardTitle>
                <CardDescription>Since 2014</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Playing piano since 2014, I've developed proficiency in advanced classical and contemporary techniques. I regularly perform at recitals and community events, and I'm currently pursuing certification from the prestigious London College of Music to formalize my musical education.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">HOSA Member</CardTitle>
                <CardDescription>Health Occupations Students</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Active member of Health Occupations Students of America, where I explore the intersection of healthcare and medical sciences. This involvement deepens my understanding of the medical field and aligns with my passion for biology and helping people through science.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community & Social Media */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/images/community-connection.png)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 font-mono">07 — COMMUNITY</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Building a Coding Community</h2>
          </div>

          <Card className="max-w-3xl mx-auto border-2 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Instagram className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Social Media Creator</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Growing a community of coders on Instagram, sharing knowledge, tutorials, and inspiring the next generation of developers.
              </p>
              <a 
                href="https://instagram.com/lanka.sarayu" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="glow-teal">
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow @lanka.sarayu
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-to-br from-primary/10 to-accent/10 diagonal-section">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 font-mono">08 — CONTACT</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interested in collaborating or learning more about my work? I'd love to hear from you!
            </p>
            <div className="mt-6">
              <Button asChild size="lg" className="gap-2">
                <a href="/Sarayu_Lanka_Resume.pdf" download="Sarayu_Lanka_Resume.pdf">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          <Card className="max-w-2xl mx-auto border-2 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:sarayulanka9@gmail.com" className="text-primary hover:underline">
                      sarayulanka9@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <a href="https://instagram.com/lanka.sarayu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      @lanka.sarayu
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Ellicott City, Maryland 21043</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary/50 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground">
              © 2025 Sarayu Lanka. Building technology that matters.
            </p>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm text-muted-foreground">Made with passion for code and biology</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
