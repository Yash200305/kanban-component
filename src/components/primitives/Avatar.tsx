import React from 'react';

type Props = { name: string; size?: number };

export const Avatar: React.FC<Props> = ({ name, size = 24 }) => {
  const initials = name.split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase();
  return (
    <div
      className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white"
      style={{ width: size, height: size, fontSize: Math.max(10, size / 2.8) }}
      aria-label={`Avatar ${name}`}
    >
      {initials}
    </div>
  );
};

export default Avatar;
