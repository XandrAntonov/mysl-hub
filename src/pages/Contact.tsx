import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Briefcase } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresa',
      details: ['Václavské náměstí 56', '110 00 Praha 1, Česko']
    },
    {
      icon: Phone,
      title: 'Telefon',
      details: ['+420 224 123 456']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@chytramysl.net']
    },
    {
      icon: Clock,
      title: 'Pracovní doba',
      details: ['Pondělí - Pátek: 9:00 - 18:00', 'Víkend: Na základě dohody']
    }
  ];

  const reasons = [
    {
      icon: MessageSquare,
      title: 'Obecný dotaz',
      description: 'Máte otázky o našich službách nebo chcete více informací?'
    },
    {
      icon: Users,
      title: 'Firemní školení',
      description: 'Zajímá vás AI školení pro váš tým nebo celou firmu?'
    },
    {
      icon: Briefcase,
      title: 'Partnerství',
      description: 'Chcete s námi spolupracovat nebo se stát naším partnerem?'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Chyba",
        description: "Prosím vyplňte všechna povinná pole.",
        variant: "destructive",
      });
      return;
    }

    // Here would be form submission logic
    toast({
      title: "Zpráva odeslána!",
      description: "Děkujeme za váš dotaz. Odpovíme vám do 24 hodin.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Kontaktujte nás
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Máte otázky o AI, chcete konzultaci nebo se zajímáte o firemní školení? 
            Rádi vám pomůžeme najít nejlepší řešení pro vaše potřeby.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Napište nám</CardTitle>
                <CardDescription>
                  Vyplňte formulář a my se vám ozveme do 24 hodin
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Jméno a příjmení *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Jan Novák"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jan@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Společnost</Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Název vaší firmy"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Předmět dotazu</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Vyberte předmět" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">Obecný dotaz</SelectItem>
                          <SelectItem value="training">Firemní školení</SelectItem>
                          <SelectItem value="community">Komunita a členství</SelectItem>
                          <SelectItem value="partnership">Partnerství</SelectItem>
                          <SelectItem value="technical">Technická podpora</SelectItem>
                          <SelectItem value="other">Jiné</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Zpráva *</Label>
                    <Textarea
                      id="message"
                      placeholder="Popište nám váš dotaz nebo požadavek..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="hero-gradient text-white hover:opacity-90 w-full md:w-auto px-8"
                  >
                    Odeslat zprávu
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Kontaktní informace</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 accent-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Reasons to Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Proč nás kontaktovat?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {reasons.map((reason, index) => {
                  const Icon = reason.icon;
                  return (
                    <div key={index} className="flex gap-3">
                      <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-sm mb-1">{reason.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card className="hero-gradient text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Chytrá Mysl s.r.o.</h3>
                <div className="space-y-2 text-sm text-white/90">
                  <p><strong>IČO:</strong> 09345678</p>
                  <p><strong>Sídlo:</strong> Václavské náměstí 56, Praha 1</p>
                  <p><strong>Specializace:</strong> AI školení a konzultace</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Naše poloha</CardTitle>
              <CardDescription>
                Najdete nás v centru Prahy na Václavském náměstí
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interaktivní mapa</p>
                  <p className="text-sm">Václavské náměstí 56, 110 00 Praha 1</p>
                  <p className="text-xs mt-2">
                    V produkční verzi by zde byla implementována skutečná mapa
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Často kladené otázky
            </h2>
            <p className="text-xl text-muted-foreground">
              Odpovědi na nejčastější dotazy našich klientů
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Jak rychle odpovídáte na dotazy?</h3>
                <p className="text-muted-foreground text-sm">
                  Na všechny dotazy odpovídáme do 24 hodin během pracovních dnů. 
                  Urgentní záležitosti řešíme i mimo pracovní dobu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Nabízíte konzultace zdarma?</h3>
                <p className="text-muted-foreground text-sm">
                  Ano, prvotní konzultaci (30 minut) poskytujeme zdarma. 
                  Pomůžeme vám identifikovat možnosti využití AI ve vaší firmě.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Můžete školit náš tým přímo u nás?</h3>
                <p className="text-muted-foreground text-sm">
                  Určitě! Nabízíme jak online, tak prezenční školení přímo 
                  ve vaší firmě. Obsah přizpůsobíme vašim specifickým potřebám.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Pracujete s firmami všech velikostí?</h3>
                <p className="text-muted-foreground text-sm">
                  Ano, máme zkušenosti od startupů po velké korporace. 
                  Naše řešení škálujeme podle velikosti a potřeb klienta.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;