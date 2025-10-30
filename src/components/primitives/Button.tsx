import React from 'react';
import { clsx } from 'clsx';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' };

export const Button: React.FC<Props> = ({ className, variant = 'primary', ...rest }) => {
  const styles =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : variant === 'secondary'
      ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      : 'bg-transparent text-gray-700 hover:bg-gray-100';
  return (
    <button
      className={clsx(
        'inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500',
        styles,
        className
      )}
      {...rest}
    />
  );
};

export default Button;
