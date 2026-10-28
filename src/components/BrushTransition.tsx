import React from "react";

interface BrushTransitionProps {
  className?: string;
  variant?: 1 | 2 | 3;
}

export function BrushTransition({ className = "text-white", variant = 1 }: BrushTransitionProps) {
  const SvgContent = () => (
    <>
      <path
        d="M0,0 L1440,0 L1440,320 C1100,320 800,150 400,100 C200,75 100,50 0,30 Z"
        fill="currentColor"
      />
      <g stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-20,20 Q100,120 200,60 T400,100 T600,80 T800,200 T1000,160 T1200,280 T1460,300" strokeWidth="5" />
        <path d="M0,40 Q150,-20 300,80 T600,150 T900,220 T1200,180 T1440,320" strokeWidth="3" />
        <path d="M100,40 C150,-10 120,130 200,60 C280,-10 250,150 350,80 C450,10 420,170 520,100 C620,30 590,190 690,120 C790,50 760,210 860,140 C960,70 930,230 1030,160 C1130,90 1100,250 1200,180 C1300,110 1270,270 1370,200 C1470,130 1440,290 1440,220" strokeWidth="2.5" />
        <path d="M150,60 C200,10 170,150 250,80 C330,10 300,170 400,100 C500,30 470,190 570,120 C670,50 640,210 740,140 C840,70 810,230 910,160 C1010,90 980,250 1080,180 C1180,110 1150,270 1250,200 C1350,130 1320,290 1420,220 C1520,150 1490,310 1440,240" strokeWidth="1.5" />
        <path d="M300,80 C280,60 320,40 340,90 C360,140 300,120 280,70 C260,20 360,20 380,100 C400,180 320,160 300,80" strokeWidth="2" />
        <path d="M500,100 C480,80 520,60 540,110 C560,160 500,140 480,90 C460,40 560,40 580,120 C600,200 520,180 500,100" strokeWidth="2" />
        <path d="M700,150 C680,130 720,110 740,160 C760,210 700,190 680,140 C660,90 760,90 780,170 C800,250 720,230 700,150" strokeWidth="2" />
        <path d="M900,200 C880,180 920,160 940,210 C960,260 900,240 880,190 C860,140 960,140 980,220 C1000,300 920,280 900,200" strokeWidth="2" />
        <path d="M1100,250 C1080,230 1120,210 1140,260 C1160,310 1100,290 1080,240 C1060,190 1160,190 1180,270 C1200,350 1120,330 1100,250" strokeWidth="2" />
        <path d="M1300,290 C1280,270 1320,250 1340,300 C1360,350 1300,330 1280,280 C1260,230 1360,230 1380,310 C1400,390 1320,370 1300,290" strokeWidth="2" />
      </g>
    </>
  );

  return (
    <div
      aria-hidden="true"
      className={`block w-full h-24 sm:h-32 md:h-44 lg:h-52 -mt-[1px] ${className}`}
    >
      {/* Variant 1: Original slope (Heavy right) */}
      {variant === 1 && (
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="h-full w-full" fill="none">
          <SvgContent />
        </svg>
      )}

      {/* Variant 2: Mirrored slope (Heavy left) using CSS transform */}
      {variant === 2 && (
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="h-full w-full scale-x-[-1]" fill="none">
          <SvgContent />
        </svg>
      )}

      {/* Variant 3: Double slope / Curtain (Heavy both sides, thin middle) */}
      {variant === 3 && (
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="h-full w-full" fill="none">
          <path d="M0,0 L1440,0 L1440,280 C1100,80 340,80 0,280 Z" fill="currentColor" />
          <g stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M-20,250 Q200,20 400,120 T720,100 T1040,120 T1460,250" strokeWidth="4" />
            <path d="M0,280 C150,100 250,50 400,100 C550,150 650,150 720,100 C790,50 890,150 1040,100 C1190,50 1290,100 1440,280" strokeWidth="2.5" />
            <path d="M50,250 C30,100 150,50 100,180 C80,250 200,150 150,100" strokeWidth="2" />
            <path d="M150,200 C130,50 250,20 200,130 C180,200 300,100 250,50" strokeWidth="2" />
            <path d="M1390,250 C1410,100 1290,50 1340,180 C1360,250 1240,150 1290,100" strokeWidth="2" />
            <path d="M1290,200 C1310,50 1190,20 1240,130 C1260,200 1140,100 1190,50" strokeWidth="2" />
          </g>
        </svg>
      )}
    </div>
  );
}