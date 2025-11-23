import { type ButtonProps } from '@/interfaces';

const sizeClasses: Record<string, string> = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  shape = 'rounded-md',
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white hover:bg-blue-600 font-semibold transition ${sizeClasses[size]} ${shape}`}
    >
      {children}
    </button>
  );
};

export default Button;
