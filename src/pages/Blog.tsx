import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, TrendingUp, Scale, Users, Factory, Newspaper } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 'ai-marketing-roi-studie',
      title: 'Jak česká marketingová agentura zvýšila ROI o 35 % pomocí AI analýzy',
      excerpt: 'Podrobná případová studie úspěšné implementace AI nástrojů v české marketingové agentuře, která dokázala zvýšit návratnost investic o více než třetinu.',
      content: `
        <h2>Úvod do případové studie</h2>
        <p>Marketingová agentura "Kreativní Praha" se specializující na digitální marketing pro střední podniky se rozhodla implementovat AI nástroje pro analýzu dat a optimalizaci kampaní.</p>
        
        <h2>Výzvy před implementací</h2>
        <ul>
          <li>Manuální analýza velkých objemů dat z různých zdrojů</li>
          <li>Neefektivní targeting reklam</li>
          <li>Dlouhá doba odezvy na změny v kampani</li>
          <li>Obtížné předpovídání výkonnosti kampaní</li>
        </ul>
        
        <h2>Implementované AI nástroje</h2>
        <p>Agentura začala používat kombinaci nástrojů včetně prediktivní analýzy, automatizovaného A/B testování a AI-řízeného content managementu.</p>
        
        <h2>Dosažené výsledky</h2>
        <ul>
          <li>Zvýšení ROI o 35% během 6 měsíců</li>
          <li>Snížení času na optimalizaci kampaní o 60%</li>
          <li>Zlepšení přesnosti targetingu o 45%</li>
          <li>Zvýšení spokojenosti klientů o 28%</li>
        </ul>
        
        <p>Tato případová studie dokazuje, že správná implementace AI může dramaticky zlepšit výkonnost marketingových aktivit i v českém prostředí.</p>
      `,
      category: 'Marketing',
      date: '15. prosince 2024',
      readTime: '8 min čtení',
      icon: TrendingUp
    },
    {
      id: 'ai-v-pravu-studie',
      title: 'Umělá inteligence v právu: případová studie advokátní kanceláře',
      excerpt: 'Jak AI transformuje právní služby a zrychluje zpracování dokumentů v jedné z předních českých advokátních kanceláří.',
      content: `
        <h2>Digitální transformace v právu</h2>
        <p>Advokátní kancelář "Právo & Partners" s více než 50 advokáty se rozhodla modernizovat své procesy pomocí AI technologií.</p>
        
        <h2>Klíčové oblasti implementace</h2>
        <ul>
          <li>Automatizované vyhledávání v právních databázích</li>
          <li>AI asistent pro tvorbu smluv</li>
          <li>Prediktivní analýza výsledků soudních sporů</li>
          <li>Automatické kategorizování dokumentů</li>
        </ul>
        
        <h2>Proces implementace</h2>
        <p>Implementace probíhala postupně během 8 měsíců, začínající pilotním projektem s jedním týmem a postupným rozšiřováním na celou kancelář.</p>
        
        <h2>Měřitelné výsledky</h2>
        <ul>
          <li>Snížení času na research o 70%</li>
          <li>Zvýšení přesnosti právních analýz o 40%</li>
          <li>Úspora 15 hodin týdně na každého advokáta</li>
          <li>Zlepšení kvality služeb pro klienty</li>
        </ul>
        
        <p>AI se stala nepostradatelným nástrojem moderní právní praxe, který umožňuje advokátům soustředit se na strategické a kreativní aspekty své práce.</p>
      `,
      category: 'Právo',
      date: '12. prosince 2024',
      readTime: '10 min čtení',
      icon: Scale
    },
    {
      id: 'ai-hr-automatizace',
      title: 'AI v HR: automatizace náboru a snížení chyb',
      excerpt: 'Praktické využití AI při výběru zaměstnanců a personalistice v české IT společnosti.',
      content: `
        <h2>Revoluce v HR procesech</h2>
        <p>IT společnost "TechCorp Praha" s 200+ zaměstnanci revolucionizovala své HR procesy pomocí AI nástrojů.</p>
        
        <h2>Výzvy tradičního náboru</h2>
        <ul>
          <li>Velký objem životopisů k prověření</li>
          <li>Subjektivní hodnocení kandidátů</li>
          <li>Dlouhý čas do obsazení pozice</li>
          <li>Vysoké náklady na náborový proces</li>
        </ul>
        
        <h2>AI řešení v HR</h2>
        <p>Společnost implementovala AI systém pro screening životopisů, automatizované plánování pohovorů a prediktivní analýzu úspěšnosti kandidátů.</p>
        
        <h2>Konkrétní zlepšení</h2>
        <ul>
          <li>Zkrácení času náboru o 50%</li>
          <li>Snížení chybovosti výběru o 35%</li>
          <li>Úspora nákladů na externí agentury o 60%</li>
          <li>Zvýšení diverzity týmu o 25%</li>
        </ul>
        
        <h2>Implementace a školení</h2>
        <p>Klíčem k úspěchu bylo postupné zavádění technologií a důkladné školení HR týmu v práci s AI nástroji.</p>
        
        <p>Díky AI může HR tým věnovat více času strategickým aktivitám a budování firemní kultury.</p>
      `,
      category: 'HR',
      date: '10. prosince 2024',
      readTime: '7 min čtení',
      icon: Users
    },
    {
      id: 'vyroba-ai-logistika',
      title: 'Výroba 4.0: integrace AI do logistiky a plánování',
      excerpt: 'Jak český výrobní podnik využil AI pro optimalizaci dodavatelského řetězce a zvýšení efektivity výroby.',
      content: `
        <h2>Průmysl 4.0 v České republice</h2>
        <p>Výrobní společnost "CzechManufacturing" specializující se na automotive komponenty implementovala komplexní AI systém pro optimalizaci výroby.</p>
        
        <h2>Oblasti optimalizace</h2>
        <ul>
          <li>Prediktivní údržba strojů</li>
          <li>Optimalizace skladových zásob</li>
          <li>Automatické plánování výroby</li>
          <li>Kontrola kvality pomocí computer vision</li>
        </ul>
        
        <h2>Technologické řešení</h2>
        <p>Implementace zahrnovala IoT senzory, machine learning algoritmy a real-time analytiku pro kontinuální optimalizaci procesů.</p>
        
        <h2>Dosažené výsledky</h2>
        <ul>
          <li>Snížení výpadků výroby o 45%</li>
          <li>Optimalizace zásob s úsporou 30%</li>
          <li>Zvýšení celkové efektivity o 25%</li>
          <li>Zlepšení kvality produktů o 40%</li>
        </ul>
        
        <h2>Budoucí plány</h2>
        <p>Společnost plánuje další rozšíření AI do oblasti zákaznické služby a vývoje nových produktů.</p>
        
        <p>Tato případová studie ukazuje potenciál AI v českém průmyslu a cestu k Průmyslu 4.0.</p>
      `,
      category: 'Výroba',
      date: '8. prosince 2024',
      readTime: '9 min čtení',
      icon: Factory
    },
    {
      id: 'ai-ve-zpravodajstvi',
      title: 'Redakce budoucnosti: AI ve zpravodajství',
      excerpt: 'Jak česká mediální společnost využívá AI pro tvorbu obsahu, fact-checking a personalizaci zpráv.',
      content: `
        <h2>Digitální transformace médií</h2>
        <p>Mediální skupina "CzechNews" implementovala AI nástroje pro modernizaci redakčních procesů a zlepšení kvality zpravodajství.</p>
        
        <h2>AI aplikace v žurnalistice</h2>
        <ul>
          <li>Automatické generování shrnutí článků</li>
          <li>Fact-checking a ověřování informací</li>
          <li>Personalizace obsahu pro čtenáře</li>
          <li>Analýza sentimentu a trendů</li>
        </ul>
        
        <h2>Etické aspekty</h2>
        <p>Implementace probíhala s důrazem na zachování novinářských standardů a transparentnost použití AI nástrojů.</p>
        
        <h2>Pozitivní dopady</h2>
        <ul>
          <li>Zvýšení rychlosti zpracování zpráv o 60%</li>
          <li>Zlepšení přesnosti faktů o 35%</li>
          <li>Nárůst čtenosti o 45%</li>
          <li>Úspora času redaktorů o 40%</li>
        </ul>
        
        <h2>Výzvy a řešení</h2>
        <p>Hlavní výzvou bylo najít rovnováhu mezi automatizací a lidským faktorem v žurnalistice.</p>
        
        <p>AI se stala cenným nástrojem, který umožňuje novinářům soustředit se na investigativní práci a hloubkovou analýzu.</p>
      `,
      category: 'Média',
      date: '5. prosince 2024',
      readTime: '6 min čtení',
      icon: Newspaper
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Blog o umělé inteligenci
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Objevte reálné případy úspěšného využití AI v českých firmách a získejte 
            inspiraci pro vlastní projekty.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {articles.map((article) => {
            const Icon = article.icon;
            return (
              <Card key={article.id} className="hover-lift h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="text-base mb-6 flex-1">
                    {article.excerpt}
                  </CardDescription>
                  <Button asChild variant="ghost" className="self-start p-0 h-auto text-primary hover:text-primary/80">
                    <Link to={`/blog/${article.id}`}>
                      Číst celý článek <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto hero-gradient text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                Nechte si poslat nejnovější články
              </h2>
              <p className="text-white/90 mb-6">
                Přihlaste se k odběru a získejte týdenní souhrn nejlepších AI případových studií.
              </p>
              <Button 
                asChild 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link to="/komunita">Přihlásit se do komunity</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;