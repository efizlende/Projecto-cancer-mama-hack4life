import * as React from "react";
import { cn } from "../../lib/utils";

interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, type = "single", collapsible = false, className }) => {
  return (
    <div className={cn("accordion", className)} data-type={type} data-collapsible={collapsible}>
      {children}
    </div>
  );
};

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ value, children }) => {
  return (
    <div className="accordion-item" data-value={value}>
      {children}
    </div>
  );
};

interface AccordionTriggerProps {
  children: React.ReactNode;
}

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children }) => {
  return (
    <button className="accordion-trigger">
      {children}
    </button>
  );
};

interface AccordionContentProps {
  children: React.ReactNode;
}

const AccordionContent: React.FC<AccordionContentProps> = ({ children }) => {
  return (
    <div className="accordion-content">
      {children}
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };