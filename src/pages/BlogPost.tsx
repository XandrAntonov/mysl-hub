import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Blog articles data (in real app, this would come from API/CMS)
  const articles: Record<string, any> = {
    'ai-marketing-roi-studie': {
      title: 'Jak česká marketingová agentura zvýšila ROI o 35 % pomocí AI analýzy',
      category: 'Marketing',
      date: '15. prosince 2024',
      readTime: '8 min čtení',
      content: `
        <h2>Úvod do případové studie</h2>
        <p>Marketingová agentura "Kreativní Praha" se specializující na digitální marketing pro střední podniky se rozhodla implementovat AI nástroje pro analýzu dat a optimalizaci kampaní. Tento krok byl motivován rostoucími nároky klientů na lepší výsledky a potřebou efektivnějšího využití reklamních rozpočtů.</p>
        
        <h2>Výzvy před implementací</h2>
        <p>Agentura čelila několika klíčovým problémům, které bránily dosažení optimálních výsledků:</p>
        <ul>
          <li><strong>Manuální analýza dat:</strong> Tým trávil až 40% pracovního času ručním zpracováním dat z různých zdrojů (Google Analytics, Facebook Ads, LinkedIn, atd.)</li>
          <li><strong>Neefektivní targeting:</strong> Cílení reklam bylo založeno převážně na intuici a základních demografických údajích</li>
          <li><strong>Pomalá reakce na změny:</strong> Optimalizace kampaní trvala několik dní kvůli složitému procesu analýzy</li>
          <li><strong>Předpovídání výkonnosti:</strong> Bylo obtížné předpovědět, jak budou nové kampaně fungovat</li>
        </ul>
        
        <h2>Implementované AI nástroje</h2>
        <p>Po důkladném výzkumu se agentura rozhodla pro kombinaci následujících nástrojů:</p>
        <ul>
          <li><strong>Prediktivní analytika:</strong> Pro předpovídání výkonnosti kampaní na základě historických dat</li>
          <li><strong>Automatizované A/B testování:</strong> Systém, který automaticky testuje různé varianty reklam a optimalizuje jejich výkon</li>
          <li><strong>AI-řízený content management:</strong> Nástroj pro automatické generování a optimalizaci reklamních textů</li>
          <li><strong>Real-time bidding optimalizace:</strong> Algoritmus pro optimalizaci nabídek v reklamních aukcích</li>
        </ul>
        
        <h2>Dosažené výsledky</h2>
        <p>Po šesti měsících používání AI nástrojů agentura zaznamenala následující zlepšení:</p>
        <ul>
          <li><strong>ROI kampání:</strong> Zvýšení o 35% v průměru napříč všemi klienty</li>
          <li><strong>Časová úspora:</strong> Snížení času na optimalizaci kampaní o 60%</li>
          <li><strong>Přesnost targetingu:</strong> Zlepšení o 45% měřeno konverzním poměrem</li>
          <li><strong>Spokojenost klientů:</strong> Nárůst o 28% podle pravidelných průzkumů</li>
          <li><strong>Nové zakázky:</strong> Zvýšení počtu nových klientů o 40% díky lepším referencím</li>
        </ul>
        
        <h2>Závěr</h2>
        <p>Tato případová studie jasně demonstruje, že správná implementace AI může dramaticky zlepšit výkonnost marketingových aktivit i v českém prostředí. Klíčem k úspěchu je postupný přístup, kvalitní data a investice do školení týmu.</p>
      `
    },
    'ai-v-pravu-studie': {
      title: 'Umělá inteligence v právu: případová studie advokátní kanceláře',
      category: 'Právní služby',
      date: '12. prosince 2024',
      readTime: '7 min čtení',
      content: `
        <h2>Představení advokátní kanceláře</h2>
        <p>Advokátní kancelář "Právní Partners" se specializuje na korporátní právo a má více než 15 let zkušeností na českém trhu. S rostoucím objemem dokumentů a potřebou rychlejšího zpracování se rozhodla implementovat AI nástroje.</p>
        
        <h2>Hlavní výzvy</h2>
        <ul>
          <li><strong>Analýza smluv:</strong> Ruční kontrola každé smlouvy trvala průměrně 3-4 hodiny</li>
          <li><strong>Vyhledávání precedentů:</strong> Hledání relevantních právních rozhodnutí bylo časově náročné</li>
          <li><strong>Příprava dokumentů:</strong> Tvorba standardních dokumentů zabírala zbytečně mnoho času</li>
          <li><strong>Due diligence:</strong> Kontrola firemních dokumentů při akvizicích trvala týdny</li>
        </ul>
        
        <h2>Implementované AI řešení</h2>
        <ul>
          <li><strong>AI asistent pro analýzu smluv:</strong> Automatické vyhledávání problematických klauzulí</li>
          <li><strong>Právní databáze s AI:</strong> Inteligentní vyhledávání v judikaturách</li>
          <li><strong>Automatizace dokumentů:</strong> AI generování standardních právních dokumentů</li>
          <li><strong>Prediktivní analytika:</strong> Odhad pravděpodobnosti úspěchu v soudních sporech</li>
        </ul>
        
        <h2>Dosažené výsledky</h2>
        <ul>
          <li><strong>Rychlost analýzy:</strong> Snížení času na analýzu smluv o 70%</li>
          <li><strong>Přesnost:</strong> 95% přesnost při identifikaci rizikových klauzulí</li>
          <li><strong>Efektivita:</strong> Zvýšení kapacity kanceláře o 40% bez náboru nových právníků</li>
          <li><strong>Spokojenost klientů:</strong> Zrychlení odpovědí na právní dotazy o 60%</li>
        </ul>
        
        <h2>Závěr</h2>
        <p>AI se ukázala jako mocný nástroj pro zvýšení efektivity právních služeb, aniž by nahradila lidskou expertízu. Právníci nyní mohou věnovat více času strategickému poradenství a složitějším případům.</p>
      `
    },
    'ai-hr-automatizace': {
      title: 'AI v HR: automatizace náboru a snížení chyb',
      category: 'Human Resources',
      date: '10. prosince 2024',
      readTime: '6 min čtení',
      content: `
        <h2>Situace v HR před AI</h2>
        <p>Personální agentura "TalentSearch Praha" zpracovávala měsíčně přes 500 životopisů pro různé pozice. Manuální screening zabíral většinu času HR týmu a vedl k přehlédnutí kvalitních kandidátů.</p>
        
        <h2>Implementované AI nástroje</h2>
        <ul>
          <li><strong>AI screening životopisů:</strong> Automatické hodnocení kandidátů podle kritérií</li>
          <li><strong>Prediktivní analýza:</strong> Odhad úspěšnosti kandidáta na pozici</li>
          <li><strong>Chatbot pro uchazeče:</strong> Automatické odpovědi na časté otázky</li>
          <li><strong>Analýza video rozhovorů:</strong> AI hodnocení komunikačních dovedností</li>
        </ul>
        
        <h2>Klíčové výsledky</h2>
        <ul>
          <li><strong>Úspora času:</strong> 80% snížení času na první screening</li>
          <li><strong>Kvalita náboru:</strong> 45% zvýšení úspěšnosti umístění kandidátů</li>
          <li><strong>Snížení bias:</strong> Objektivnější hodnocení bez předsudků</li>
          <li><strong>Kandidátská zkušenost:</strong> Rychlejší zpětná vazba a lepší komunikace</li>
        </ul>
        
        <h2>Challenges a learnings</h2>
        <p>Implementace AI v HR vyžaduje pečlivé nastavení kritérií a pravidelné kontroly, aby nedošlo k diskriminaci. Je důležité zachovat lidský prvek v procesu rozhodování.</p>
        
        <h2>Budoucí směřování</h2>
        <p>Plánujeme rozšíření AI na predikci fluktuace zaměstnanců a personalizaci benefit programů podle potřeb jednotlivých zaměstnanců.</p>
      `
    },
    'vyroba-ai-logistika': {
      title: 'Výroba 4.0: integrace AI do logistiky a plánování',
      category: 'Výroba',
      date: '8. prosince 2024',
      readTime: '9 min čtení',
      content: `
        <h2>Průmysl 4.0 v České republice</h2>
        <p>Výrobní společnost "CzechManufacturing" specializující se na automotive komponenty implementovala komplexní AI systém pro optimalizaci výroby a logistických procesů. Tento ambiciózní projekt představuje jednu z nejrozsáhlejších implementací AI v českém průmyslu.</p>
        
        <h2>Výzvy před digitalizací</h2>
        <p>Společnost čelila několika kritickým problémům, které ovlivňovaly její konkurenceschopnost:</p>
        <ul>
          <li><strong>Neplánované výpadky:</strong> Poruchy strojů způsobovaly měsíčně ztráty v hodnotě milionů korun</li>
          <li><strong>Neoptimální zásoby:</strong> Příliš vysoké skladové zásoby vázaly kapitál, nízké zásoby způsobovaly výpadky výroby</li>
          <li><strong>Manuální plánování:</strong> Plánování výroby trvalo několik hodin denně a nereagovalo na změny v reálném čase</li>
          <li><strong>Kontrola kvality:</strong> Ruční kontrola byla pomalá a nedokonalá</li>
        </ul>
        
        <h2>Komplexní AI řešení</h2>
        <p>Implementované technologie pokrývaly celý výrobní proces:</p>
        
        <h3>Prediktivní údržba</h3>
        <p>Instalace tisíců IoT senzorů na kritických strojích umožnila monitoring vibračního spektra, teploty, tlaku a dalších parametrů. Machine learning algoritmy analyzují data v reálném čase a předpovídají poruchy s přesností 92%.</p>
        
        <h3>Smart skladování</h3>
        <p>AI systém optimalizuje úrovně zásob na základě historických dat, předpovědi poptávky, dodacích lhůt a sezónních vlivů. Automatické objednávání zajišťuje optimální flow materiálu.</p>
        
        <h3>Inteligentní plánování výroby</h3>
        <p>Algoritmická optimalizace výrobních plánů zohledňuje kapacity strojů, dostupnost pracovníků, termíny dodání a priority zakázek. Systém dokáže přeplánovat výrobu během několika minut.</p>
        
        <h3>Computer Vision kontrola</h3>
        <p>Kamerové systémy s AI analyzují kvalitu produktů rychleji a přesněji než lidský zrak. Detekují i mikroskopické vady a automaticky řídí třídění produktů.</p>
        
        <h2>Proces implementace</h2>
        <p>Transformace probíhala postupně během 18 měsíců:</p>
        <ol>
          <li><strong>Fáze 1 (měsíce 1-6):</strong> Instalace senzorů a základní datová infrastruktura</li>
          <li><strong>Fáze 2 (měsíce 7-12):</strong> Implementace prediktivní údržby a smart skladování</li>
          <li><strong>Fáze 3 (měsíce 13-18):</strong> Zavedení AI plánování a computer vision kontroly</li>
        </ol>
        
        <h2>Spektakulární výsledky</h2>
        <ul>
          <li><strong>Prediktivní údržba:</strong> Snížení neplánovaných výpadků o 45% a úspora nákladů na údržbu o 35%</li>
          <li><strong>Optimalizace zásob:</strong> Snížení vázaného kapitálu o 30% při zachování 99.5% dostupnosti materiálu</li>
          <li><strong>Efektivita výroby:</strong> Zvýšení celkové efektivity výrobních zařízení (OEE) o 25%</li>
          <li><strong>Kvalita produktů:</strong> Zlepšení kvality o 40% a snížení reklamací o 60%</li>
          <li><strong>Flexibilita:</strong> Zkrácení času na přeplánování výroby z hodin na minuty</li>
        </ul>
        
        <h2>ROI a ekonomické dopady</h2>
        <p>Investice do AI se společnosti vrátila během 14 měsíců. Roční úspory dosahují:</p>
        <ul>
          <li>Snížení nákladů na údržbu: 8 mil. Kč</li>
          <li>Optimalizace zásob: 15 mil. Kč</li>
          <li>Zvýšení produktivity: 12 mil. Kč</li>
          <li>Snížení reklamací: 5 mil. Kč</li>
        </ul>
        
        <h2>Lidský faktor</h2>
        <p>Důležitou součástí byla práce s lidskými zdroji:</p>
        <ul>
          <li>Rekvalifikace pracovníků pro práci s novými technologiemi</li>
          <li>Vytvoření nových pozic - data analytiků a AI specialistů</li>
          <li>Zlepšení pracovních podmínek díky automatizaci nebezpečných operací</li>
        </ul>
        
        <h2>Budoucí vize</h2>
        <p>Společnost neplánuje zpomalit a připravuje další inovace:</p>
        <ul>
          <li>Rozšíření AI do oblasti vývoje nových produktů</li>
          <li>Implementace digital twin technologií</li>
          <li>AI-řízená zákaznická služba a CRM</li>
          <li>Blockchain pro transparentnost dodavatelského řetězce</li>
        </ul>
        
        <h2>Závěr</h2>
        <p>Tento projekt dokazuje, že česká průmyslová firma může úspěšně konkurovat světovým lídrům pomocí moderních technologií. Klíčem k úspěchu byla systematická implementace, investice do lidí a dlouhodobá vize digitální transformace.</p>
      `
    },
    'ai-ve-zpravodajstvi': {
      title: 'Redakce budoucnosti: AI ve zpravodajství',
      category: 'Média',
      date: '5. prosince 2024',
      readTime: '6 min čtení',
      content: `
        <h2>Digitální revoluce v českých médiích</h2>
        <p>Mediální skupina "CzechNews" se rozhodla pro průlomovou digitální transformaci svých redakčních procesů. Jako jedna z prvních v České republice implementovala komplexní AI systém pro podporu žurnalistické práce, což vedlo k zásadním změnám v rychlosti a kvalitě zpravodajství.</p>
        
        <h2>Výzvy moderního žurnalismu</h2>
        <p>Česká média čelí několika kritickým problémům:</p>
        <ul>
          <li><strong>Časový tlak:</strong> Potřeba okamžitého zpravodajství při zachování kvality</li>
          <li><strong>Dezinformace:</strong> Rychlé ověřování faktů v době fake news</li>
          <li><strong>Personalizace:</strong> Každý čtenář očekává relevantní obsah</li>
          <li><strong>Efektivita:</strong> Snižující se rozpočty při rostoucích nárocích</li>
        </ul>
        
        <h2>Inovativní AI nástroje v redakci</h2>
        
        <h3>Automatické generování shrnutí</h3>
        <p>AI algoritmus dokáže během několika sekund vytvořit přesné a čitelné shrnutí dlouhých článků, tiskových zpráv nebo projevů politiků. Tato funkce šetří redaktorům hodiny práce denně a umožňuje rychlejší informování čtenářů.</p>
        
        <h3>Pokročilý fact-checking</h3>
        <p>Systém automaticky ověřuje fakta proti databázím oficiálních zdrojů, detekuje nesrovnalosti a upozorňuje na potenciální dezinformace. Využívá machine learning pro rozpoznávání vzorců typických pro falešné zprávy.</p>
        
        <h3>Inteligentní personalizace obsahu</h3>
        <p>AI analyzuje čtenářské preference, historii čtení a chování na webu pro doručování personalizovaných zpráv. Každý uživatel vidí obsah upravený podle svých zájmů, což dramaticky zvyšuje čtenost.</p>
        
        <h3>Analýza sentimentu a trendů</h3>
        <p>Systém monitoring sociálních sítí a dalších zdrojů identifikuje vznikající témata a nálady ve společnosti, což umožňuje redakci anticipovat důležité příběhy.</p>
        
        <h2>Etické aspekty a transparentnost</h2>
        <p>Implementace AI v žurnalistice vyžadovala pečlivé řešení etických otázek:</p>
        <ul>
          <li><strong>Transparentnost:</strong> Čtenáři jsou informováni o použití AI při tvorbě obsahu</li>
          <li><strong>Lidská kontrola:</strong> Finální rozhodnutí vždy zůstává na novinářích</li>
          <li><strong>Ochrana zdrojů:</strong> AI pomáhá chránit anonymitu informátorů</li>
          <li><strong>Objektivita:</strong> Algoritmy jsou pravidelně kontrolovány kvůli předsudkům</li>
        </ul>
        
        <h2>Proces implementace</h2>
        <p>Transformace probíhala ve třech etapách během 10 měsíců:</p>
        <ol>
          <li><strong>Pilotní fáze (měsíce 1-3):</strong> Testování nástrojů s malým týmem</li>
          <li><strong>Rozšíření (měsíce 4-7):</strong> Postupné zapojení celé redakce</li>
          <li><strong>Optimalizace (měsíce 8-10):</strong> Ladění procesů a školení</li>
        </ol>
        
        <h2>Měřitelné úspěchy</h2>
        <p>Po roce používání AI nástrojů mediální skupina zaznamenala:</p>
        <ul>
          <li><strong>Rychlost zpracování:</strong> Zvýšení rychlosti publikování zpráv o 60%</li>
          <li><strong>Přesnost faktů:</strong> Zlepšení o 35% díky automatickému fact-checkingu</li>
          <li><strong>Čtenost:</strong> Nárůst čtenosti o 45% díky personalizaci</li>
          <li><strong>Efektivita redakce:</strong> Úspora času redaktorů o 40%</li>
          <li><strong>Kvalita obsahu:</strong> Snížení faktických chyb o 50%</li>
        </ul>
        
        <h2>Dopad na profesi novináře</h2>
        <p>AI nezahradila lidské novináře, ale změnila jejich roli:</p>
        <ul>
          <li>Více času na investigativní žurnalistiku</li>
          <li>Zaměření na analytické a názorové články</li>
          <li>Lepší možnosti pro fact-checking a ověřování</li>
          <li>Rychlejší reakce na aktuální dění</li>
        </ul>
        
        <h2>Výzvy a řešení</h2>
        <p>Hlavní výzvou bylo najít rovnováhu mezi automatizací a zachováním lidského faktoru v žurnalistice. Řešením bylo stanovení jasných pravidel, kdy AI může a nemůže rozhodovat samostatně.</p>
        
        <h2>Budoucnost AI v médiích</h2>
        <p>Mediální skupina plánuje další rozšíření:</p>
        <ul>
          <li>AI generování multimediálního obsahu</li>
          <li>Automatické titulkování videí</li>
          <li>Prediktivní analýza virálního potenciálu</li>
          <li>Rozšíření fact-checkingu na video obsah</li>
        </ul>
        
        <h2>Závěr</h2>
        <p>Tato případová studie ukazuje, že AI může být mocným nástrojem pro zlepšení kvality a efektivity žurnalistiky, aniž by nahradila kreativitu a kritické myšlení novinářů. Klíčem je promyšlená implementace s důrazem na etické aspekty a transparentnost.</p>
      `
    }
  };

  const article = articles[slug || ''] || {
    title: 'Článek nenalezen',
    content: '<p>Požadovaný článek nebyl nalezen.</p>',
    category: '',
    date: '',
    readTime: ''
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
            <Link to="/blog">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Zpět na blog
            </Link>
          </Button>
        </div>

        {/* Article header */}
        <header className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            {article.category && <Badge variant="secondary">{article.category}</Badge>}
            <div className="flex items-center text-sm text-muted-foreground gap-3">
              {article.date && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </span>
              )}
              {article.readTime && <span>{article.readTime}</span>}
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {article.title}
          </h1>
        </header>

        {/* Article content */}
        <article className="prose prose-lg max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: article.content }}
            className="text-foreground space-y-6"
          />
        </article>

        {/* Call to action */}
        <div className="mt-16 p-8 hero-gradient rounded-2xl text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Chcete implementovat AI ve své firmě?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Připojte se k naší komunitě a získejte přístup k praktickým nástrojům, 
            šablonám a expertní podpoře při implementaci AI řešení.
          </p>
          <Button 
            asChild 
            variant="secondary" 
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            <Link to="/komunita">
              Vstoupit do komunity <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>

        {/* Navigation to other articles */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex justify-between items-center">
            <Button asChild variant="ghost">
              <Link to="/blog">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Všechny články
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/komunita">
                Přidat se do komunity
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;