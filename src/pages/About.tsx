import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Target, Users, TrendingUp, Award, BookOpen, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Brain,
      title: 'Inovativnost',
      description: 'Držíme krok s nejnovějšími trendy v oblasti umělé inteligence a implementujeme pouze prověřené technologie.'
    },
    {
      icon: Target,
      title: 'Praktičnost',
      description: 'Zaměřujeme se na reálné aplikace AI, které přinášejí okamžité výsledky ve vaší práci.'
    },
    {
      icon: Users,
      title: 'Komunita',
      description: 'Budujeme silnou síť profesionálů, kteří si vzájemně pomáhají a sdílejí zkušenosti.'
    },
    {
      icon: Award,
      title: 'Kvalita',
      description: 'Všechny naše materiály a školení procházejí důkladným testováním a ověřováním odborníky.'
    }
  ];

  const methodology = [
    {
      step: '1',
      title: 'Analýza potřeb',
      description: 'Identifikujeme konkrétní oblasti, kde může AI přinést největší přínos ve vaší práci.'
    },
    {
      step: '2',
      title: 'Praktické školení',
      description: 'Učíme pomocí reálných projektů a případových studií z českého prostředí.'
    },
    {
      step: '3',
      title: 'Implementace',
      description: 'Pomáhame s nasazením AI nástrojů přímo do vašich pracovních procesů.'
    },
    {
      step: '4',
      title: 'Kontinuální podpora',
      description: 'Poskytujeme dlouhodobou podporu a aktualizace v rámci naší komunity.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Úspěšných absolventů' },
    { number: '95%', label: 'Míra spokojenosti' },
    { number: '50+', label: 'Firemních klientů' },
    { number: '3 roky', label: 'Zkušeností s AI' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="soft-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              O společnosti Chytrá Mysl
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Jsme česká společnost specializující se na vzdělávání a implementaci umělé inteligence 
              v podnikové praxi. Naším cílem je pomoci profesionálům po celé České republice 
              využít potenciál AI pro jejich kariérní růst a zvýšení efektivity práce.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Naše historie a mise
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Chytrá Mysl vznikla v roce 2021 jako odpověď na rostoucí potřebu českých 
                  profesionálů pochopit a využívat umělou inteligenci ve své práci. Zakladatelé 
                  společnosti, skupinka IT odborníků a business konzultantů, si uvědomili, 
                  že AI technologie se vyvíjejí rychleji, než je schopnost většiny lidí 
                  je efektivně implementovat.
                </p>
                <p>
                  Od našich skromných začátků s prvními 10 účastníky jsme vyrostli v 
                  respektovanou vzdělávací instituci, která pomohla stovkám profesionálů 
                  a desítkám firem úspěšně integrovat AI do svých procesů.
                </p>
                <p>
                  Naše mise je jasná: demokratizovat přístup k AI znalostem a pomoci 
                  českým firmám a profesionálům zůstat konkurenceschopnými v digitální 
                  éře pomocí praktických a implementovatelných AI řešení.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                Založeno 2021
              </Badge>
              <Card className="hero-gradient text-white">
                <CardContent className="p-8">
                  <BookOpen className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Naše vize</h3>
                  <p className="text-white/90">
                    Stát se vedoucí českou platformou pro AI vzdělávání a vytvořit 
                    ekosystém, kde mohou profesionálé efektivně využívat umělou 
                    inteligenci k dosažení svých cílů.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Naše hodnoty
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hodnoty, které nás vedou při vytváření nejkvalitnějších AI vzdělávacích programů
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover-lift">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 accent-gradient rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Naše metodologie
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strukturovaný přístup k AI vzdělávání, který zajišťuje praktické výsledky
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step, index) => (
              <div key={index} className="relative">
                <Card className="hover-lift h-full">
                  <CardHeader>
                    <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <CardTitle className="text-center text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                {index < methodology.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Náš tým
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Odborníci s bohatými zkušenostmi v oblasti AI a firemního školení
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="w-24 h-24 hero-gradient rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dr. Pavel Novák</h3>
                <p className="text-muted-foreground mb-4">Ředitel a zakladatel</p>
                <p className="text-sm text-muted-foreground">
                  15 let zkušeností v oblasti machine learning a firemního poradenství. 
                  Absolvent VUT Brno a Stanford University.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="w-24 h-24 accent-gradient rounded-full mx-auto mb-6 flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ing. Marie Svobodová</h3>
                <p className="text-muted-foreground mb-4">Vedoucí školení</p>
                <p className="text-sm text-muted-foreground">
                  Expertka na business aplikace AI s 10letou praxí v konzultingu 
                  pro české a mezinárodní společnosti.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="w-24 h-24 hero-gradient rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mgr. Tomáš Dvořák</h3>
                <p className="text-muted-foreground mb-4">Komunitní manažer</p>
                <p className="text-sm text-muted-foreground">
                  Specialista na vytváření a řízení profesních komunit s důrazem 
                  na praktické sdílení znalostí a networking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hero-gradient rounded-2xl p-8 lg:p-16 text-white">
            <Target className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Připojte se k naší misi
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Staňte se součástí komunity profesionálů, kteří využívají AI k dosažení 
              svých cílů a transformaci svých odvětví.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <Link to="/komunita">
                  Vstoupit do komunity <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/kontakt">Kontaktovat nás</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;