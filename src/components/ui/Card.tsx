import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant = 'default', padding = 'md', hover = false, ...props }, ref) => {
    const baseClasses = 'rounded-xl transition-all duration-300';
    
    const variants = {
      default: 'bg-white border border-neutral-200',
      elevated: 'bg-white shadow-soft hover:shadow-medium',
      outlined: 'bg-white border-2 border-neutral-300',
    };

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    };

    const hoverEffect = hover ? 'hover:shadow-medium hover:-translate-y-1 cursor-pointer' : '';

    return (
      <div
        className={cn(
          baseClasses,
          variants[variant],
          paddings[padding],
          hoverEffect,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;

