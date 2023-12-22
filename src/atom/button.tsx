import type { ReactNode } from 'react';

type IButtonVarient = 'default' | 'transparent' | 'out-lined';

type IProps = {
  title: string | ReactNode;
  disabled?: boolean;
  size?: string;
  paddingMargin?: string;
  variant?: IButtonVarient;
  fontSize?: string;
  className?: string;
  onClick?: () => void;
  rounded?: string;
  type?: any;
  id?: string;
};
export function Button({
  title,
  disabled = false,
  size = '',
  paddingMargin = 'px-10 py-2.5',
  variant = 'default',
  fontSize = 'text-xl font-semibold',
  className = '',
  onClick,
  rounded = 'rounded-full',
  type = 'button',
  id,
}: IProps) {
  function buttonVarient(uiVarient: IButtonVarient) {
    switch (uiVarient) {
      case 'transparent':
        return `bg-transparent hover:scale-[1.01] text-center ${rounded} ${className} ${size} ${paddingMargin} ${fontSize} ${
          disabled ? 'opacity-40 cursor-not-allowed' : ''
        }`;
      case 'out-lined':
        return `bg-transparent border border-gray-400 opacity-100 hover:border-gray-200 hover:scale-[1.01] text-center ${rounded} ${className} ${size} ${paddingMargin} ${fontSize} ${
          disabled ? 'opacity-40 cursor-not-allowed' : ''
        }`;
      default:
        return ` background-gradient border border-gray-500 opacity-100 hover:border-gray-200 hover:scale-[1.01] text-white text-center ${rounded} ${className} ${size} ${paddingMargin} ${fontSize} ${
          disabled ? 'opacity-40 cursor-not-allowed' : ''
        }`;
    }
  }
  return (
    <button
      id={id}
      onClick={onClick}
      className={buttonVarient(variant)}
      disabled={disabled}
      type={type}
    >
      {title}
    </button>
  );
}
