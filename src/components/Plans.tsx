import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { useState } from 'react';
import SubscriptionModal from '@/components/SubscriptionModal';

const plans = [
  {
    name: 'Basic',
    price: '₹499',
    period: '/month',
    description: 'Perfect for small landlords getting started',
    features: [
      'Property verification processing',
      'Basic lease agreement templates',
      'Standard document storage',
      'Email support',
      'Up to 5 properties',
    ],
    recommended: false,
  },
  {
    name: 'Professional',
    price: '₹999',
    period: '/month',
    description: 'Best for growing rental businesses',
    features: [
      'Everything in Basic, plus:',
      'Legal agreement drafting & review',
      'E-signature capabilities',
      'Payment handling dashboard',
      'Priority support',
      'Up to 25 properties',
      'Document notarization assistance',
    ],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: '₹9,999',
    period: '/month',
    description: 'For large-scale rental operations',
    features: [
      'Everything in Professional, plus:',
      'Dedicated account manager',
      'Custom legal document creation',
      'Advanced payment reconciliation',
      'API access',
      'Unlimited properties',
      'White-label options',
      '24/7 phone support',
    ],
    recommended: false,
  },
];

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <section id="plans" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-muted-foreground">
            Select the perfect subscription plan for your rental business needs
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                plan.recommended
                  ? 'border-accent shadow-card-hover'
                  : 'border-border shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-gradient-accent text-accent-foreground px-4 py-1.5 rounded-full shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-semibold">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-card-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full ${
                    plan.recommended
                      ? 'bg-gradient-accent hover:opacity-90'
                      : 'bg-primary hover:bg-primary-light'
                  }`}
                  size="lg"
                >
                  Select {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include secure data storage and regular compliance updates.{' '}
            <button
              onClick={scrollToContact}
              className="text-primary hover:underline font-medium"
            >
              Contact us
            </button>{' '}
            for custom enterprise solutions.
          </p>
        </div>
      </div>

      {/* Subscription Modal */}
      <SubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </section>
  );
};

export default Plans;
