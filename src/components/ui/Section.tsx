import React from 'react';
import { cn } from './Button';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  container?: boolean;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, container = true, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('py-16 md:py-24', className)}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = 'Section';
