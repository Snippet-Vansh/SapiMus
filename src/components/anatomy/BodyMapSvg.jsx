import React from 'react';

/**
 * High-definition interactive anatomical human body SVG map
 * Supports Front and Back views with hover states and active muscle highlights
 */
export const BodyMapSvg = ({ view = 'front', activeMuscleId, onSelectMuscle, hoveredMuscleId, onHoverMuscle }) => {
  const isSelected = (id) => activeMuscleId === id;
  const isHovered = (id) => hoveredMuscleId === id;

  const getFill = (id) => {
    if (isSelected(id)) return '#C7FF3D'; // Neon Lime active
    if (isHovered(id)) return '#B5F228'; // Neon Lime hover
    return '#262630'; // Dark anatomical surface
  };

  const getStroke = (id) => {
    if (isSelected(id)) return '#FFFFFF';
    if (isHovered(id)) return '#C7FF3D';
    return '#3A3A46';
  };

  const getOpacity = (id) => {
    if (activeMuscleId && !isSelected(id) && !isHovered(id)) {
      return 0.45;
    }
    return 1;
  };

  const renderMuscleGroup = (id, paths, label, labelPos) => {
    return (
      <g
        key={id}
        className="muscle-part cursor-pointer transition-all duration-200"
        onClick={() => onSelectMuscle(id)}
        onMouseEnter={() => onHoverMuscle && onHoverMuscle(id)}
        onMouseLeave={() => onHoverMuscle && onHoverMuscle(null)}
        style={{ opacity: getOpacity(id) }}
      >
        {paths.map((d, index) => (
          <path
            key={index}
            d={d}
            fill={getFill(id)}
            stroke={getStroke(id)}
            strokeWidth={isSelected(id) ? '2' : '1.2'}
            strokeLinejoin="round"
            className="transition-colors duration-150"
          />
        ))}
        {/* Subtle glow filter if active */}
        {isSelected(id) && (
          <filter id={`glow-${id}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </g>
    );
  };

  if (view === 'front') {
    return (
      <svg
        viewBox="0 0 360 620"
        className="w-full h-auto max-h-[580px] drop-shadow-2xl select-none mx-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle silhouette backdrop */}
        <g opacity="0.12" fill="#FFFFFF">
          {/* Head & Neck Base */}
          <ellipse cx="180" cy="55" rx="30" ry="38" />
          <path d="M165 90 L165 118 L195 118 L195 90 Z" />
        </g>

        {/* Head outline for orientation */}
        <ellipse cx="180" cy="52" rx="26" ry="34" fill="#181820" stroke="#3A3A46" strokeWidth="1.5" />
        <path d="M170 85 L166 112 L194 112 L190 85 Z" fill="#1C1C24" stroke="#3A3A46" strokeWidth="1.2" />

        {/* TRAPEZIUS (Neck / Clavicle transition - front) */}
        {renderMuscleGroup('trapezius', [
          'M166 94 Q150 108 135 118 L152 120 L166 112 Z', // Left collar trap
          'M194 94 Q210 108 225 118 L208 120 L194 112 Z'  // Right collar trap
        ], 'Traps')}

        {/* SHOULDERS (Deltoids - Anterior & Lateral Front) */}
        {renderMuscleGroup('shoulders', [
          // Left Shoulder
          'M135 118 Q115 125 106 148 Q100 170 114 186 Q125 180 132 165 Q135 142 135 118 Z',
          // Right Shoulder
          'M225 118 Q245 125 254 148 Q260 170 246 186 Q235 180 228 165 Q225 142 225 118 Z'
        ], 'Shoulders')}

        {/* CHEST (Pectoralis Major) */}
        {renderMuscleGroup('chest', [
          // Left Pec
          'M177 122 L150 122 Q134 126 132 145 Q130 168 142 178 Q162 186 177 184 Z',
          // Right Pec
          'M183 122 L210 122 Q226 126 228 145 Q230 168 218 178 Q198 186 183 184 Z'
        ], 'Chest')}

        {/* BICEPS (Anterior Arm) */}
        {renderMuscleGroup('biceps', [
          // Left Bicep
          'M114 184 Q105 198 107 232 Q122 238 128 222 Q132 200 126 176 Z',
          // Right Bicep
          'M246 184 Q255 198 253 232 Q238 238 232 222 Q228 200 234 176 Z'
        ], 'Biceps')}

        {/* FOREARMS (Brachioradialis / Flexors Front) */}
        {renderMuscleGroup('forearms', [
          // Left Forearm
          'M107 232 Q95 260 94 294 Q106 304 114 292 Q126 268 128 228 Z',
          // Right Forearm
          'M253 232 Q265 260 266 294 Q254 304 246 292 Q234 268 232 228 Z'
        ], 'Forearms')}

        {/* Hands preview */}
        <ellipse cx="90" cy="318" rx="8" ry="14" fill="#1C1C24" stroke="#3A3A46" strokeWidth="1" />
        <ellipse cx="270" cy="318" rx="8" ry="14" fill="#1C1C24" stroke="#3A3A46" strokeWidth="1" />

        {/* ABS & CORE (Rectus Abdominis & Obliques) */}
        {renderMuscleGroup('abs', [
          // Upper 4-pack
          'M160 190 L177 190 L177 218 L160 218 Z',
          'M183 190 L200 190 L200 218 L183 218 Z',
          // Mid 4-pack
          'M160 222 L177 222 L177 252 L161 252 Z',
          'M183 222 L200 222 L200 252 L199 252 Z',
          // Lower 2-pack & Pyramidalis
          'M162 256 L177 256 L177 288 L165 288 Z',
          'M183 256 L198 256 L195 288 L183 288 Z',
          // Left Oblique
          'M142 186 Q156 220 156 270 L146 278 Q138 232 142 186 Z',
          // Right Oblique
          'M218 186 Q204 220 204 270 L214 278 Q222 232 218 186 Z'
        ], 'Abs')}

        {/* Pelvic Core separator */}
        <path d="M164 292 L180 312 L196 292 Q180 296 164 292 Z" fill="#181820" stroke="#3A3A46" strokeWidth="1.2" />

        {/* QUADRICEPS (Anterior Thigh - Rectus femoris, vastus lateralis, vastus medialis) */}
        {renderMuscleGroup('quadriceps', [
          // Left Quad Sweep
          'M144 300 Q130 340 134 400 Q145 440 155 450 Q168 448 174 410 Q174 340 162 300 Z',
          // Left Teardrop (VMO)
          'M164 416 Q168 448 174 446 Q178 436 175 416 Z',
          // Right Quad Sweep
          'M216 300 Q230 340 226 400 Q215 440 205 450 Q192 448 186 410 Q186 340 198 300 Z',
          // Right Teardrop (VMO)
          'M196 416 Q192 448 186 446 Q182 436 185 416 Z'
        ], 'Quadriceps')}

        {/* Knees */}
        <circle cx="163" cy="460" r="9" fill="#1C1C24" stroke="#3A3A46" strokeWidth="1.2" />
        <circle cx="197" cy="460" r="9" fill="#1C1C24" stroke="#3A3A46" strokeWidth="1.2" />

        {/* CALVES (Anterior Lower Leg - Tibialis / gastrocnemius front profile) */}
        {renderMuscleGroup('calves', [
          // Left Shin/Calf
          'M154 472 Q144 505 148 555 L160 560 Q170 520 168 472 Z',
          // Right Shin/Calf
          'M206 472 Q216 505 212 555 L200 560 Q190 520 192 472 Z'
        ], 'Calves')}

        {/* Feet */}
        <path d="M148 565 Q140 585 138 596 L164 596 Q166 580 160 565 Z" fill="#181820" stroke="#3A3A46" strokeWidth="1.2" />
        <path d="M212 565 Q220 585 222 596 L196 596 Q194 580 200 565 Z" fill="#181820" stroke="#3A3A46" strokeWidth="1.2" />
      </svg>
    );
  }

  // BACK VIEW
  return (
    <svg
      viewBox="0 0 360 620"
      className="w-full h-auto max-h-[580px] drop-shadow-2xl select-none mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head outline back view */}
      <ellipse cx="180" cy="52" rx="26" ry="34" fill="#181820" stroke="#3A3A46" strokeWidth="1.5" />
      <path d="M168 82 L164 110 L196 110 L192 82 Z" fill="#1C1C24" stroke="#3A3A46" strokeWidth="1.2" />

      {/* TRAPEZIUS (Upper, Mid & Lower Diamond - Posterior) */}
      {renderMuscleGroup('trapezius', [
        // Upper & Middle Traps Diamond
        'M180 88 L160 114 L138 124 Q154 136 172 142 L180 186 L188 142 Q206 136 222 124 L200 114 Z'
      ], 'Trapezius')}

      {/* SHOULDERS (Rear Deltoids) */}
      {renderMuscleGroup('shoulders', [
        // Left Rear Delt
        'M136 122 Q112 130 106 150 Q104 172 116 186 Q128 178 134 160 Q138 140 136 122 Z',
        // Right Rear Delt
        'M224 122 Q248 130 254 150 Q256 172 244 186 Q232 178 226 160 Q222 140 224 122 Z'
      ], 'Shoulders')}

      {/* BACK (Latissimus Dorsi & Rhomboids) */}
      {renderMuscleGroup('back', [
        // Left Latissimus Dorsi
        'M176 146 Q156 142 140 148 Q130 178 136 228 Q145 258 165 272 L176 270 Z',
        // Right Latissimus Dorsi
        'M184 146 Q204 142 220 148 Q230 178 224 228 Q215 258 195 272 L184 270 Z'
      ], 'Back')}

      {/* TRICEPS (Posterior Upper Arm - Long, Lateral & Medial Heads) */}
      {renderMuscleGroup('triceps', [
        // Left Tricep
        'M114 186 Q104 200 106 234 Q120 238 126 226 Q128 202 122 186 Z',
        // Right Tricep
        'M246 186 Q256 200 254 234 Q240 238 234 226 Q232 202 238 186 Z'
      ], 'Triceps')}

      {/* FOREARMS (Extensor Compartment Posterior) */}
      {renderMuscleGroup('forearms', [
        // Left Forearm back
        'M106 234 Q94 260 93 294 Q106 304 114 292 Q125 268 126 230 Z',
        // Right Forearm back
        'M254 234 Q266 260 267 294 Q254 304 246 292 Q235 268 234 230 Z'
      ], 'Forearms')}

      {/* Hands back view */}
      <ellipse cx="90" cy="318" rx="8" ry="14" fill="#1C1C24" stroke="#3A3A46" strokeWidth="1" />
      <ellipse cx="270" cy="318" rx="8" ry="14" fill="#1C1C24" stroke="#3A3A46" strokeWidth="1" />

      {/* Lower Back / Erector Spinae triangle */}
      <path d="M168 270 L180 292 L192 270 Z" fill="#202028" stroke="#3A3A46" strokeWidth="1" />

      {/* GLUTES (Gluteus Maximus & Medius) */}
      {renderMuscleGroup('glutes', [
        // Left Glute
        'M148 290 Q134 320 136 358 Q144 384 176 384 L178 300 Q160 290 148 290 Z',
        // Right Glute
        'M212 290 Q226 320 224 358 Q216 384 184 384 L182 300 Q200 290 212 290 Z'
      ], 'Glutes')}

      {/* HAMSTRINGS (Biceps femoris, semitendinosus & semimembranosus) */}
      {renderMuscleGroup('hamstrings', [
        // Left Hamstring
        'M140 388 Q134 416 142 452 Q156 454 172 448 Q174 416 172 388 Z',
        // Right Hamstring
        'M220 388 Q226 416 218 452 Q204 454 188 448 Q186 416 188 388 Z'
      ], 'Hamstrings')}

      {/* Back of Knees (Popliteal fossa) */}
      <circle cx="157" cy="460" r="7" fill="#181820" stroke="#3A3A46" strokeWidth="1" />
      <circle cx="203" cy="460" r="7" fill="#181820" stroke="#3A3A46" strokeWidth="1" />

      {/* CALVES (Gastrocnemius & Soleus Posterior) */}
      {renderMuscleGroup('calves', [
        // Left Calf Gastrocnemius
        'M146 470 Q136 500 144 546 L158 554 Q168 520 166 470 Z',
        // Right Calf Gastrocnemius
        'M214 470 Q224 500 216 546 L202 554 Q192 520 194 470 Z'
      ], 'Calves')}

      {/* Feet back */}
      <path d="M146 560 L140 594 L162 594 L160 560 Z" fill="#181820" stroke="#3A3A46" strokeWidth="1.2" />
      <path d="M214 560 L220 594 L198 594 L200 560 Z" fill="#181820" stroke="#3A3A46" strokeWidth="1.2" />
    </svg>
  );
};

