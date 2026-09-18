import React from 'react';
import { Camera } from 'lucide-react';
import { useImages } from '../context/ImageContext';

export interface ImageSwapButtonProps {
  id: string;
  title: string;
  defaultSrc: string;
  isTransparent?: boolean;
  position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left' | 'bottom-center' | 'relative';
  size?: 'sm' | 'md';
  className?: string;
  label?: string;
}

export const ImageSwapButton: React.FC<ImageSwapButtonProps> = ({
  id,
  title,
  defaultSrc,
  isTransparent,
  position = 'top-right',
  size = 'sm',
  className = '',
  label,
}) => {
  const { openChangeModal } = useImages();

  const positionClasses = {
    'top-right': 'absolute top-2.5 right-2.5',
    'bottom-right': 'absolute bottom-2.5 right-2.5',
    'top-left': 'absolute top-2.5 left-2.5',
    'bottom-left': 'absolute bottom-2.5 left-2.5',
    'bottom-center': 'absolute bottom-2.5 left-1/2 -translate-x-1/2',
    relative: 'relative',
  }[position];

  return (
    <button
      type="button"
      id={`btn-swap-${id}`}
      onClick={(e) => {
        e.stopPropagation();
        openChangeModal({ id, title, defaultSrc, isTransparent });
      }}
      className={`${positionClasses} inline-flex items-center gap-1.5 bg-[#120709]/90 hover:bg-[#dc2626] text-[#d4c5b8] hover:text-white border border-[#481c22] hover:border-red-500/60 rounded-full ${
        size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'
      } font-bold shadow-lg backdrop-blur-md transition-all group/btn cursor-pointer opacity-80 hover:opacity-100 ${className}`}
      title={`Alterar foto de ${title}`}
    >
      <Camera className="w-3 h-3 text-[#ef4444] group-hover/btn:text-white transition-colors" />
      <span>{label || 'Trocar foto'}</span>
    </button>
  );
};
