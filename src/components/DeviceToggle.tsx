import React from 'react';
import { Monitor, Smartphone, Maximize2 } from 'lucide-react';

export type ViewMode = 'responsive' | 'desktop' | 'mobile';

interface Props {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export const DeviceToggle: React.FC<Props> = ({
  viewMode,
  onViewModeChange,
}) => {
  return (
    <div className="fixed top-4 right-4 sm:top-5 sm:right-6 z-50 flex items-center bg-[#0d1017]/90 backdrop-blur-md p-1 rounded-xl border border-amber-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <button
        onClick={() => onViewModeChange('responsive')}
        title="Modo Responsivo"
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
          viewMode === 'responsive'
            ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <Maximize2 className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Responsivo</span>
      </button>

      <button
        onClick={() => onViewModeChange('desktop')}
        title="Visualização Desktop (1440px)"
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
          viewMode === 'desktop'
            ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <Monitor className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Desktop</span>
      </button>

      <button
        onClick={() => onViewModeChange('mobile')}
        title="Visualização Mobile (iPhone Frame)"
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
          viewMode === 'mobile'
            ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <Smartphone className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Mobile (iPhone)</span>
      </button>
    </div>
  );
};
