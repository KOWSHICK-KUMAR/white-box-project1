import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Shield } from 'lucide-react';

const faqs = [
  {
    question: 'Are e-signatures legally binding?',
    answer: 'Yes, all e-signatures processed through our platform comply with the ESIGN Act and UETA regulations, making them fully legally binding in all 50 states. Our system maintains detailed audit trails for added security and verification.',
  },
  {
    question: 'How secure is my data?',
    answer: 'We use bank-level 256-bit encryption for all data transmission and storage. Our infrastructure is SOC 2 Type II certified and undergoes regular third-party security audits. All documents are stored in secure, redundant data centers with 99.9% uptime guarantee.',
  },
  {
    question: 'Can I cancel or change my plan anytime?',
    answer: 'Absolutely. You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the start of your next billing cycle, and we provide prorated credits for downgrades.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'All plans include email support with response times within 24 hours. Professional and Enterprise plans receive priority support with faster response times. Enterprise clients also get a dedicated account manager and 24/7 phone support.',
  },
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trust & Security</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our legal services and security measures
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
