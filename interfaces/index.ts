export interface CardProps {
  title: string;
  imageSrc: string;
  description?: string;
  onClick?: () => void;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}
