import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Brain, Zap, Users, TrendingUp, ArrowRight, BookOpen, Target, Lightbulb } from 'lucide-react';
import heroBrain from '@/assets/hero-brain.jpg';

const Home = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'Praktické AI dovednosti',
      description: 'Naučte se používat nejnovější AI nástroje v praxi a aplikovat je ve své práci.'
    },
    {
      icon: TrendingUp,
      title: 'Karriérní růst',
      description: 'Posuňte svou kariéru pomocí AI kompetencí, které zaměstnavatelé hledají.'
    },
    {
      icon: Users,
      title: 'Exkluzivní komunita',
      description: 'Připojte se k síti profesionálů, kteří sdílejí zkušenosti s AI.'
    },
    {
      icon: Zap,
      title: 'Rychlé výsledky',
      description: 'Získejte okamžitě použitelné znalosti a nástroje pro každodenní práci.'
    }
  ];

  const latestPosts = [
    {
      title: 'Jak česká marketingová agentura zvýšila ROI o 35 % pomocí AI analýzy',
      excerpt: 'Případová studie úspěšné implementace AI nástrojů v českém marketingu.',
      slug: 'ai-marketing-roi-studie'
    },
    {
      title: 'Umělá inteligence v právu: případová studie advokátní kanceláře',
      excerpt: 'Jak AI transformuje právní služby a zrychluje zpracování dokumentů.',
      slug: 'ai-v-pravu-studie'
    },
    {
      title: 'AI v HR: automatizace náboru a snížení chyb',
      excerpt: 'Praktické využití AI při výběru zaměstnanců a personalistice.',
      slug: 'ai-hr-automatizace'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Naučte se pracovat s{' '}
                <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-pink-500 bg-clip-text text-transparent">
                  umělou inteligencí
                </span>
                {' '}a posuňte svou kariéru na novou úroveň
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Získejte praktické dovednosti v oblasti AI, připojte se k naší exkluzivní komunitě 
                a transformujte svůj způsob práce s nejmodernějšími technologiemi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="hero-gradient text-white hover:opacity-90 px-8 py-6 text-lg font-semibold"
                >
                  <Link to="/komunita">
                    Vstoupit do komunity <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-6 text-lg border-2"
                >
                  <Link to="/blog">Prozkoumat blog</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 hero-gradient rounded-2xl transform rotate-3 opacity-20"></div>
              <img 
                src={heroBrain} 
                alt="AI Brain visualization" 
                className="relative rounded-2xl shadow-strong hover-lift w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Proč si vybrat Chytrá Mysl?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pomáháme profesionálům po celé České republice osvojit si AI dovednosti 
              a využít je pro svůj profesní růst.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center hover-lift border-border">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 accent-gradient rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nejnovější články
            </h2>
            <p className="text-xl text-muted-foreground">
              Objevte úspěšné případy využití AI v českých firmách
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    <Link to={`/blog/${post.slug}`}>
                      Číst více <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-2">
              <Link to="/blog">Zobrazit všechny články</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hero-gradient rounded-2xl p-8 lg:p-16 text-white">
            <Target className="w-16 h-16 mx-auto mb-6 animate-float" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Získejte přístup k exkluzivním AI zdrojům
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Přihlaste se k odběru našeho newsletteru a získejte přístup k nejnovějším 
              AI nástrojům, tipům a případovým studiím.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Váš email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 flex-1"
                required
              />
              <Button 
                asChild
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <Link to="/komunita">Přihlásit se</Link>
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 soft-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Lightbulb className="w-16 h-16 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Připraveni začít?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Připojte se k naší komunitě a začněte svou cestu k zvládnutí umělé inteligence ještě dnes.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="hero-gradient text-white hover:opacity-90 px-8 py-6 text-lg font-semibold"
          >
            <Link to="/komunita">
              Vstoupit do komunity <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;