import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Users, 
  Video, 
  BookOpen, 
  MessageSquare, 
  Download, 
  Zap, 
  Check, 
  Star,
  Calendar,
  FileText,
  Headphones,
  Crown,
  ArrowRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Community = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { toast } = useToast();

  const features = [
    {
      icon: MessageSquare,
      title: 'Exkluzivní Discord komunita',
      description: 'Přístup k uzavřené komunitě AI profesionálů s denními diskusemi a Q&A sekcemi.'
    },
    {
      icon: Video,
      title: 'Měsíční webináře',
      description: 'Live prezentace nejnovějších AI trendů a praktických případových studií.'
    },
    {
      icon: BookOpen,
      title: 'Kompletní knihovna zdrojů',
      description: 'Přístup k databázi šablon, promptů, návodus a best practices.'
    },
    {
      icon: Download,
      title: 'Připravené prompty a nástroje',
      description: 'Stovky předpřipravených promptů pro ChatGPT, Claude a další AI nástroje.'
    },
    {
      icon: Headphones,
      title: 'Přímá podpora expertů',
      description: 'Možnost konzultace s našimi AI experty a personalizovaná doporučení.'
    },
    {
      icon: FileText,
      title: 'Týdenní AI newsletter',
      description: 'Souhrn nejdůležitějších novinek z světa AI a jejich praktických aplikací.'
    }
  ];

  const plans = [
    {
      name: 'Měsíční',
      price: '990',
      period: 'měsíčně',
      description: 'Ideální pro začátek s AI',
      features: [
        'Přístup k Discord komunitě',
        'Měsíční webinář',
        'Základní knihovna zdrojů',
        '50+ připravených promptů',
        'Email podpora'
      ],
      popular: false
    },
    {
      name: 'Roční',
      price: '7990',
      period: 'ročně',
      originalPrice: '11880',
      description: 'Nejlepší poměr cena/výkon',
      features: [
        'Vše z měsíčního plánu',
        'Prioritní podpora',
        'Exkluzivní případové studie',
        '200+ připravených promptů',
        'Osobní konzultace (2x ročně)',
        'Early access k novým materiálům'
      ],
      popular: true,
      savings: 'Ušetříte 33%'
    }
  ];

  const testimonials = [
    {
      name: 'Ing. Jana Nováková',
      position: 'Marketing Manager, TechCorp',
      content: 'Komunita Chytrá Mysl mi pomohla implementovat AI nástroje, které zvýšily efektivitu našeho týmu o 40%. Podpora a materiály jsou výjimečné.',
      rating: 5
    },
    {
      name: 'Mgr. Petr Svoboda',
      position: 'HR Director, StartupXYZ',
      content: 'Díky promptům a tipům z komunity jsme automatizovali náborový proces. Ušetřili jsme desítky hodin týdně a zlepšili kvalitu výběru kandidátů.',
      rating: 5
    },
    {
      name: 'Dr. Marie Dvořáková',
      position: 'Konzultantka, nezávislá',
      content: 'Networking v komunitě je neocenitelný. Našla jsem zde nejen cenné znalosti, ale i nové obchodní příležitosti.',
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent, planType: string) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Chyba",
        description: "Prosím vyplňte všechna povinná pole.",
        variant: "destructive",
      });
      return;
    }

    // Here would be integration with payment processor
    toast({
      title: "Děkujeme za registraci!",
      description: `Brzy vám pošleme další instrukce na ${email}. Mezitím se můžete podívat na náš blog.`,
    });

    // Redirect to thank you page would happen here
    window.location.href = '/dekujeme';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="soft-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Crown className="w-16 h-16 mx-auto mb-6 text-accent" />
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Připojte se k exkluzivní AI komunitě
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Získejte přístup k nejlepším AI zdrojům, expertnímu poradenství a síti 
            profesionálů, kteří využívají umělou inteligenci k dosažení mimořádných výsledků.
          </p>
          <Badge variant="secondary" className="text-base px-4 py-2">
            Přes 500 aktivních členů
          </Badge>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Co získáte členstvím
            </h2>
            <p className="text-xl text-muted-foreground">
              Komplexní balíček pro váš úspěch s umělou inteligencí
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover-lift h-full">
                  <CardHeader>
                    <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Vyberte si váš plán
            </h2>
            <p className="text-xl text-muted-foreground">
              Flexibilní možnosti přizpůsobené vašim potřebám
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover-lift ${plan.popular ? 'ring-2 ring-primary shadow-strong' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="hero-gradient text-white px-4 py-1">
                      Nejoblíbenější
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">Kč</span>
                    </div>
                    <div className="text-muted-foreground">{plan.period}</div>
                    {plan.originalPrice && (
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground line-through">
                          Běžně {plan.originalPrice} Kč
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {plan.savings}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardDescription className="text-base mt-4">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Tabs defaultValue="register" className="w-full">
                    <TabsList className="grid w-full grid-cols-1">
                      <TabsTrigger value="register">Registrovat se</TabsTrigger>
                    </TabsList>
                    <TabsContent value="register" className="space-y-4 mt-6">
                      <form onSubmit={(e) => handleSubmit(e, plan.name)} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor={`name-${index}`}>Jméno a příjmení *</Label>
                          <Input
                            id={`name-${index}`}
                            type="text"
                            placeholder="Jan Novák"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`email-${index}`}>Email *</Label>
                          <Input
                            id={`email-${index}`}
                            type="email"
                            placeholder="jan@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <Button 
                          type="submit"
                          className={`w-full ${plan.popular ? 'hero-gradient text-white' : ''}`}
                          size="lg"
                        >
                          Začít hned
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-4">
              ✓ 14denní záruka vrácení peněz &nbsp; ✓ Zrušení kdykoli &nbsp; ✓ Bez závazků
            </p>
            <p className="text-xs text-muted-foreground">
              Platby zpracovávány bezpečně. Všechny ceny jsou uvedeny včetně DPH.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Co říkají naši členové
            </h2>
            <p className="text-xl text-muted-foreground">
              Reálné zkušenosti profesionálů z naší komunity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 soft-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Často kladené otázky
            </h2>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Jak rychle získám přístup po registraci?</h3>
                <p className="text-muted-foreground">
                  Přístup k Discord komunitě a základním materiálům získáte do 24 hodin po úspěšné platbě. 
                  Pozvánka bude zaslána na váš registrační email.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Můžu členství kdykoliv zrušit?</h3>
                <p className="text-muted-foreground">
                  Ano, členství můžete zrušit kdykoli bez udání důvodu. U ročního plánu nabízíme 
                  poměrnou refundaci nevyužité části.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Je komunita vhodná pro začátečníky?</h3>
                <p className="text-muted-foreground">
                  Určitě! Naši experti vám pomohou s prvními kroky a komunita má speciální sekci 
                  pro nováčky v AI. Postupně se dostanete k pokročilejším tématům.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hero-gradient rounded-2xl p-8 lg:p-16 text-white">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Připraveni začít svou AI cestu?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Připojte se k nejaktivnější české AI komunitě a získejte všechny nástroje 
              potřebné pro úspěch s umělou inteligencí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <a href="#pricing">
                  Vybrat plán <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/blog">Nejdřív si přečíst blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;