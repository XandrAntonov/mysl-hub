import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Shield, FileText, Cookie, Scale } from 'lucide-react';

const Legal = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Právní informace
          </h1>
          <p className="text-xl text-muted-foreground">
            Transparentní informace o ochraně vašich dat a našich podmínkách
          </p>
        </div>

        {/* Legal Tabs */}
        <Tabs defaultValue="privacy" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              GDPR
            </TabsTrigger>
            <TabsTrigger value="cookies" className="flex items-center gap-2">
              <Cookie className="w-4 h-4" />
              Cookies
            </TabsTrigger>
            <TabsTrigger value="terms" className="flex items-center gap-2">
              <Scale className="w-4 h-4" />
              Podmínky
            </TabsTrigger>
          </TabsList>

          {/* Privacy Policy */}
          <TabsContent value="privacy" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Zásady ochrany osobních údajů (GDPR)
                </CardTitle>
                <CardDescription>
                  Platné od: 1. ledna 2024 | Aktualizováno: 15. prosince 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96 w-full">
                  <div className="space-y-6 pr-4">
                    <section>
                      <h3 className="text-lg font-semibold mb-3">1. Správce osobních údajů</h3>
                      <p className="text-muted-foreground mb-4">
                        Správcem vašich osobních údajů je:
                      </p>
                      <div className="bg-muted p-4 rounded-lg space-y-1">
                        <p><strong>Chytrá Mysl s.r.o.</strong></p>
                        <p>IČO: 09345678</p>
                        <p>Sídlo: Václavské náměstí 56, 110 00 Praha 1, Česko</p>
                        <p>Email: info@chytramysl.net</p>
                        <p>Telefon: +420 224 123 456</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">2. Jaké údaje zpracováváme</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• <strong>Identifikační údaje:</strong> jméno, příjmení, email</li>
                        <li>• <strong>Kontaktní údaje:</strong> telefon, adresa (pokud je uvedena)</li>
                        <li>• <strong>Firemní údaje:</strong> název společnosti, pozice (dobrovolně)</li>
                        <li>• <strong>Technické údaje:</strong> IP adresa, cookies, informace o prohlížeči</li>
                        <li>• <strong>Údaje o využívání:</strong> aktivita na webu, preference</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">3. Účel zpracování údajů</h3>
                      <div className="space-y-3">
                        <div className="border-l-4 border-primary pl-4">
                          <p className="font-medium">Poskytování služeb</p>
                          <p className="text-sm text-muted-foreground">
                            Zpracováváme údaje pro poskytnutí přístupu ke komunitě, školením a materiálům.
                          </p>
                        </div>
                        <div className="border-l-4 border-secondary pl-4">
                          <p className="font-medium">Komunikace</p>
                          <p className="text-sm text-muted-foreground">
                            Odesílání newsletterů, informací o službách a odpovědí na dotazy.
                          </p>
                        </div>
                        <div className="border-l-4 border-accent pl-4">
                          <p className="font-medium">Zlepšování služeb</p>
                          <p className="text-sm text-muted-foreground">
                            Analýza využívání webu pro zlepšení uživatelské zkušenosti.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">4. Právní základy zpracování</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• <strong>Souhlas (čl. 6 odst. 1 písm. a GDPR):</strong> Newsletter, marketing</li>
                        <li>• <strong>Plnění smlouvy (čl. 6 odst. 1 písm. b GDPR):</strong> Poskytování placených služeb</li>
                        <li>• <strong>Oprávněný zájem (čl. 6 odst. 1 písm. f GDPR):</strong> Analýza webu, bezpečnost</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">5. Doba uchovávání údajů</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-muted p-3 rounded">
                          <p className="font-medium">Marketingové účely</p>
                          <p className="text-sm text-muted-foreground">Do odvolání souhlasu</p>
                        </div>
                        <div className="bg-muted p-3 rounded">
                          <p className="font-medium">Plnění smlouvy</p>
                          <p className="text-sm text-muted-foreground">Po dobu trvání + 3 roky</p>
                        </div>
                        <div className="bg-muted p-3 rounded">
                          <p className="font-medium">Účetní doklady</p>
                          <p className="text-sm text-muted-foreground">10 let</p>
                        </div>
                        <div className="bg-muted p-3 rounded">
                          <p className="font-medium">Technické logy</p>
                          <p className="text-sm text-muted-foreground">Maximálně 2 roky</p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">6. Vaše práva</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Badge variant="outline" className="p-3 justify-start">
                          <span className="text-sm">Právo na přístup k údajům</span>
                        </Badge>
                        <Badge variant="outline" className="p-3 justify-start">
                          <span className="text-sm">Právo na opravu údajů</span>
                        </Badge>
                        <Badge variant="outline" className="p-3 justify-start">
                          <span className="text-sm">Právo na výmaz údajů</span>
                        </Badge>
                        <Badge variant="outline" className="p-3 justify-start">
                          <span className="text-sm">Právo na omezení zpracování</span>
                        </Badge>
                        <Badge variant="outline" className="p-3 justify-start">
                          <span className="text-sm">Právo na přenositelnost</span>
                        </Badge>
                        <Badge variant="outline" className="p-3 justify-start">
                          <span className="text-sm">Právo vznést námitku</span>
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Pro uplatnění svých práv nás kontaktujte na email: info@chytramysl.net
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">7. Bezpečnost údajů</h3>
                      <p className="text-muted-foreground">
                        Implementujeme technická a organizační opatření pro ochranu vašich údajů 
                        včetně šifrování, zabezpečených serverů a pravidelných bezpečnostních auditů.
                      </p>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cookie Policy */}
          <TabsContent value="cookies" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cookie className="w-5 h-5" />
                  Zásady používání souborů cookie
                </CardTitle>
                <CardDescription>
                  Informace o používání cookies na našem webu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96 w-full">
                  <div className="space-y-6 pr-4">
                    <section>
                      <h3 className="text-lg font-semibold mb-3">Co jsou cookies?</h3>
                      <p className="text-muted-foreground">
                        Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče 
                        při návštěvě webových stránek. Pomáhají nám poskytovat lepší služby a 
                        vyhodnocovat, jak návštěvníci naše stránky používají.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">Typy cookies, které používáme</h3>
                      <div className="space-y-4">
                        <div className="border border-border rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">Nezbytné</Badge>
                            <span className="text-sm font-medium">Vždy aktivní</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Tyto cookies jsou nezbytné pro základní fungování webu. 
                            Bez nich by web nefungoval správně.
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            Příklady: session cookies, bezpečnostní cookies
                          </p>
                        </div>

                        <div className="border border-border rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">Analytické</Badge>
                            <span className="text-sm font-medium">Volitelné</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Pomáhají nám pochopit, jak návštěvníci používají náš web. 
                            Sbíráme anonymní statistiky o návštěvnosti.
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            Nástroje: Google Analytics, vlastní analytika
                          </p>
                        </div>

                        <div className="border border-border rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">Funkční</Badge>
                            <span className="text-sm font-medium">Volitelné</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Umožňují pokročilé funkce webu a personalizaci obsahu 
                            na základě vašich preferencí.
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            Příklady: uložení jazykových preferencí, tématu
                          </p>
                        </div>

                        <div className="border border-border rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">Marketingové</Badge>
                            <span className="text-sm font-medium">Volitelné</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Používají se pro cílení reklam a měření efektivity 
                            marketingových kampaní.
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            Nástroje: Facebook Pixel, Google Ads
                          </p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">Jak spravovat cookies</h3>
                      <div className="space-y-3">
                        <p className="text-muted-foreground">
                          Můžete kdykoliv změnit své preference ohledně cookies:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Kliknutím na "Nastavení cookies" v dolní části stránek</li>
                          <li>• V nastavení vašeho prohlížeče</li>
                          <li>• Kontaktováním našeho týmu na info@chytramysl.net</li>
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">Doba uchování cookies</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-muted p-3 rounded">
                          <p className="font-medium">Session cookies</p>
                          <p className="text-sm text-muted-foreground">Smazány po zavření prohlížeče</p>
                        </div>
                        <div className="bg-muted p-3 rounded">
                          <p className="font-medium">Persistent cookies</p>
                          <p className="text-sm text-muted-foreground">Maximálně 2 roky</p>
                        </div>
                      </div>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Terms and Conditions */}
          <TabsContent value="terms" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5" />
                  Obchodní podmínky
                </CardTitle>
                <CardDescription>
                  Pravidla pro využívání našich služeb
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96 w-full">
                  <div className="space-y-6 pr-4">
                    <section>
                      <h3 className="text-lg font-semibold mb-3">1. Základní ustanovení</h3>
                      <p className="text-muted-foreground mb-4">
                        Tyto obchodní podmínky upravují vzájemná práva a povinnosti 
                        mezi společností Chytrá Mysl s.r.o. a uživateli našich služeb.
                      </p>
                      <div className="bg-muted p-4 rounded-lg">
                        <p><strong>Poskytovatel služeb:</strong></p>
                        <p>Chytrá Mysl s.r.o., IČO: 09345678</p>
                        <p>Sídlo: Václavské náměstí 56, 110 00 Praha 1</p>
                        <p>Email: info@chytramysl.net</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">2. Nabízené služby</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• <strong>AI komunita:</strong> Přístup k Discord komunitě a exkluzivním materiálům</li>
                        <li>• <strong>Vzdělávací obsah:</strong> Webináře, kurzy a praktické návody</li>
                        <li>• <strong>Konzultace:</strong> Individuální poradenství v oblasti AI</li>
                        <li>• <strong>Firemní školení:</strong> Customizované vzdělávací programy</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">3. Registrace a přístup</h3>
                      <div className="space-y-3">
                        <p className="text-muted-foreground">
                          Pro využívání našich služeb je nutná registrace s uvedením správných údajů.
                        </p>
                        <div className="border-l-4 border-primary pl-4">
                          <p className="font-medium">Povinnosti uživatele:</p>
                          <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                            <li>• Poskytnutí pravdivých údajů při registraci</li>
                            <li>• Zachování důvěrnosti přístupových údajů</li>
                            <li>• Respektování pravidel komunity</li>
                            <li>• Nepoškozování dobré pověsti společnosti</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">4. Platební podmínky</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <p className="font-medium">Měsíční předplatné</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Cena: 990 Kč/měsíc</li>
                            <li>• Automatické obnovení</li>
                            <li>• Zrušení kdykoli</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <p className="font-medium">Roční předplatné</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Cena: 7990 Kč/rok</li>
                            <li>• Úspora 33%</li>
                            <li>• Poměrná refundace</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">5. Zrušení a refundace</h3>
                      <div className="space-y-3">
                        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                          <p className="font-medium text-green-800">14denní záruka vrácení peněz</p>
                          <p className="text-sm text-green-700 mt-1">
                            Pokud nejste spokojeni, vrátíme vám celou částku do 14 dnů od nákupu.
                          </p>
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Členství lze zrušit kdykoli bez udání důvodu</li>
                          <li>• U ročního plánu nabízíme poměrnou refundaci</li>
                          <li>• Zrušení lze provést emailem nebo v uživatelském účtu</li>
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">6. Duševní vlastnictví</h3>
                      <p className="text-muted-foreground mb-3">
                        Veškerý obsah poskytovaný v rámci našich služeb je chráněn autorským právem.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Obsah smíte používat pouze pro osobní účely</li>
                        <li>• Zakázáno je sdílení materiálů třetím stranám</li>
                        <li>• Nepovolujeme kopírování nebo redistributi obsahu</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">7. Odpovědnost</h3>
                      <p className="text-muted-foreground">
                        Poskytujeme služby s odbornou péčí, ale negarantujeme konkrétní výsledky. 
                        Naše odpovědnost je omezena na výši zaplacené částky za služby.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">8. Závěrečná ustanovení</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Tyto podmínky se řídí právním řádem České republiky</li>
                        <li>• Spory budou řešeny věcně příslušnými soudy v Praze</li>
                        <li>• Podmínky nabývají účinnosti dnem registrace</li>
                        <li>• Vyhrazujeme si právo změnit tyto podmínky s 30denním předstihem</li>
                      </ul>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Contact for Legal Questions */}
        <div className="mt-12">
          <Card className="hero-gradient text-white">
            <CardContent className="p-8 text-center">
              <FileText className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Máte otázky k právním informacím?</h2>
              <p className="text-white/90 mb-4">
                Kontaktujte nás pro jakékoli dotazy ohledně zpracování údajů nebo podmínek používání.
              </p>
              <p className="text-sm">
                <strong>Email:</strong> info@chytramysl.net<br />
                <strong>Telefon:</strong> +420 224 123 456
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Legal;