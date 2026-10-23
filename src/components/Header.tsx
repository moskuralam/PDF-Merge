import React from 'react';
import { Layers } from 'lucide-react';

interface HeaderProps {
  onLogoClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="w-full bg-white border-b border-[#E6EAF0] sticky top-0 z-30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-3.5 flex items-center">
        {/* Brand logo & name */}
        <button
          type="button"
          onClick={onLogoClick}
          aria-label="PDF Merge home"
          className="flex items-center gap-3 cursor-pointer select-none text-left border-0 bg-transparent p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3478F6] rounded-xl"
        >
          {/* Dark squircle logo icon */}
          <div className="w-10 h-10 rounded-xl bg-[#1E232A] flex items-center justify-center text-white shadow-xs pointer-events-none">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <span className="text-base font-bold text-[#292D32] tracking-tight pointer-events-none">
            PDF Merge
          </span>
        </button>
      </div>
    </header>
  );
};
