'use client';

import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-opacity duration-200 hover:opacity-90';

  const variantClasses = {
    primary: 'bg-accent-main text-gray-900',
    secondary: 'bg-gray-100 text-gray-900',
  };

  const sizeClasses = {
    default: 'py-3 px-6 text-base',
    large: 'py-4 px-6 text-cta',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}