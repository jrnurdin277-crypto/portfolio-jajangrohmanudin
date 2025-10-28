import { useState } from 'react';
import { FiPower } from 'react-icons/fi';

const VintageMonitor = ({ 
  children, 
  defaultOn = true,
  showPower = true,
  className = '',
  size = 'normal', // 'small', 'normal', or 'large'
}) => {
  const [isOn, setIsOn] = useState(defaultOn);

  const sizeClasses = {
    small: 'p-2 rounded-lg',
    normal: 'p-3 md:p-4 rounded-xl md:rounded-2xl',
    large: 'p-4 md:p-6 rounded-2xl md:rounded-3xl'
  };

  return (
    <div className={`vintage-frame ${sizeClasses[size]} ${className}`}>
      <div className="vintage-screen w-full h-full flex items-center justify-center relative">
        {isOn ? (
          children
        ) : (
          <div className="text-gray-400 text-sm font-semibold">LAYAR MATI</div>
        )}
        <div className="scanlines absolute inset-0"></div>
      </div>
      {showPower && (
        <>
          <span className={`power-led ${isOn ? 'on' : 'off'}`} aria-hidden="true"></span>
          <button
            onClick={() => setIsOn(!isOn)}
            className={`power-btn ${isOn ? '' : 'off'}`}
            aria-pressed={isOn}
            title={isOn ? 'Matikan layar' : 'Nyalakan layar'}
          >
            <FiPower className={`w-5 h-5 ${isOn ? 'text-green-600' : 'text-red-600'}`} aria-hidden="true" />
            <span className="sr-only">{isOn ? 'Matikan layar' : 'Nyalakan layar'}</span>
          </button>
          <div className="monitor-base" aria-hidden="true"></div>
        </>
      )}
    </div>
  );
};

export default VintageMonitor;