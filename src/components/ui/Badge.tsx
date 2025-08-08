import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, children, variant = 'primary', size = 'md', rounded = false, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center font-medium transition-all duration-300';
    
    const variants = {
      primary: 'bg-primary-100 text-primary-800 border border-primary-200',
      secondary: 'bg-secondary-100 text-secondary-800 border border-secondary-200',
      success: 'bg-success-100 text-success-800 border border-success-200',
      warning: 'bg-warning-100 text-warning-800 border border-warning-200',
      error: 'bg-error-100 text-error-800 border border-error-200',
      neutral: 'bg-neutral-100 text-neutral-800 border border-neutral-200',
    };

    const sizes = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-2.5 py-1.5 text-sm',
      lg: 'px-3 py-2 text-base',
    };

    const roundedClass = rounded ? 'rounded-full' : 'rounded-md';

    return (
      <span
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          roundedClass,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;

