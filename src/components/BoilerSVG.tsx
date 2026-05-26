export function BoilerSVG() {
  return (
    <svg 
      viewBox="0 0 200 240" 
      className="w-full h-auto max-w-sm mx-auto" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Frame */}
      <rect x="30" y="20" width="140" height="200" rx="16" fill="var(--color-brand-blue)" opacity="0.05" />
      <rect x="30" y="20" width="140" height="200" rx="16" stroke="var(--color-brand-blue)" strokeWidth="4" />
      
      {/* Top Vents */}
      <rect x="50" y="35" width="100" height="6" rx="3" fill="#94A3B8" />
      <rect x="50" y="47" width="100" height="6" rx="3" fill="#94A3B8" />
      <rect x="50" y="59" width="100" height="6" rx="3" fill="#94A3B8" />
      
      {/* Main Display panel */}
      <rect x="50" y="80" width="100" height="50" rx="8" fill="#1E293B" />
      
      {/* Temperature Display */}
      <text x="100" y="115" fill="var(--color-brand-cyan)" fontSize="24" fontFamily="monospace" fontWeight="bold" textAnchor="middle">72°</text>
      
      {/* Indicator Light */}
      <circle cx="130" cy="105" r="4" fill="var(--color-brand-red)">
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Pipes Group */}
      <g strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        {/* Pipe 1 Flowing Water/Heat */}
        <path d="M70 140 V160 Q70 170 60 170 H40" stroke="#CBD5E1" />
        <path d="M70 140 V160 Q70 170 60 170 H40" stroke="var(--color-brand-blue)" strokeDasharray="10 10">
           <animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite" />
        </path>

        {/* Pipe 2 */}
        <path d="M100 140 V190" stroke="#CBD5E1" />
        <path d="M100 140 V190" stroke="var(--color-brand-red)" strokeDasharray="10 10">
           <animate attributeName="stroke-dashoffset" values="0;20" dur="1s" repeatCount="indefinite" />
        </path>

        {/* Pipe 3 */}
        <path d="M130 140 V160 Q130 170 140 170 H160" stroke="#CBD5E1" />
      </g>
      
      {/* Flame icon */}
      <path d="M100 175 C95 175 90 170 90 160 C90 150 100 145 100 145 C100 145 110 150 110 160 C110 170 105 175 100 175 Z" fill="var(--color-brand-red)" opacity="0.8">
        <animate attributeName="transform" type="scale" values="1;1.1;1" transformOrigin="100 160" dur="1.5s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}
