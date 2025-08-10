import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Mail, MessageSquare } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>

        {/* Main Message */}
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Děkujeme!
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
          Vaše registrace byla úspěšně dokončena. Potvrďte prosím svou registraci 
          kliknutím na odkaz, který jsme vám poslali emailem.
        </p>

        {/* Next Steps Card */}
        <Card className="mb-8 text-left">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Co bude následovat?
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Potvrďte email</h3>
                  <p className="text-muted-foreground text-sm">
                    Za chvíli obdržíte email s potvrzovacím odkazem. Klikněte na něj 
                    pro aktivaci vašeho účtu.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Získejte přístup</h3>
                  <p className="text-muted-foreground text-sm">
                    Po potvrzení emailu vám zašleme přístupové údaje k Discord komunitě 
                    a dalším exkluzivním materiálům.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Začněte se učit</h3>
                  <p className="text-muted-foreground text-sm">
                    Prozkoumate naši knihovnu zdrojů, připojte se k diskusím 
                    a začněte využívat AI ve své práci.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            asChild 
            variant="default" 
            size="lg"
            className="hero-gradient text-white"
          >
            <Link to="/blog">
              <ArrowRight className="mr-2 w-5 h-5" />
              Pokračovat na blog
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg"
          >
            <Link to="/">Zpět na hlavní stránku</Link>
          </Button>
        </div>

        {/* Help Section */}
        <Card className="soft-gradient">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Potřebujete pomoc?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <p className="font-medium text-sm">Email podpora</p>
                  <p className="text-xs text-muted-foreground">info@chytramysl.net</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <p className="font-medium text-sm">Živý chat</p>
                  <p className="text-xs text-muted-foreground">Po-Pá 9:00-18:00</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <p className="text-sm text-muted-foreground mt-8">
          Neobdrželi jste potvrzovací email? Zkontrolujte složku se spamem nebo 
          nás kontaktujte na <strong>info@chytramysl.net</strong>
        </p>
      </div>
    </div>
  );
};

export default ThankYou;