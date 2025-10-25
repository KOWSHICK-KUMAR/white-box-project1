import { FileCheck, Shield, Database, FileSignature, AlertCircle, CreditCard } from 'lucide-react';

const services = [
  {
    icon: FileCheck,
    title: 'Legal Review',
    description: 'Expert review of all rental agreements and contracts',
  },
  {
    icon: Shield,
    title: 'ID Verification',
    description: 'Comprehensive tenant background and identity checks',
  },
  {
    icon: Database,
    title: 'Document Storage',
    description: 'Secure cloud storage for all legal documents',
  },
  {
    icon: FileSignature,
    title: 'E-Signature',
    description: 'Legally binding electronic signature capabilities',
  },
  {
    icon: AlertCircle,
    title: 'Dispute Assistance',
    description: 'Professional support for rental dispute resolution',
  },
  {
    icon: CreditCard,
    title: 'Payment Reconciliation',
    description: 'Automated payment tracking and reconciliation',
  },
];

const Services = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to manage legal and financial aspects of your rental business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
