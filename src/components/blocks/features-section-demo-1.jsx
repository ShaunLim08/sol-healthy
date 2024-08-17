import React from "react";

export default function FeaturesSectionDemo({grid}) {
  return (
    <div className="py-20 lg:py-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((medicine, index) => (
          <div
            key={index} // Use index as the key
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            {/* Image on top */}
            <img
              src={medicine.imageUrl}
              alt={medicine.medicinename}
              className="w-full h-32 object-cover rounded-t-3xl mb-4"
            />

            {/* Grid pattern for background effect */}
            <Grid size={20} />

            {/* Medicine Details */}
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {medicine.medicinename}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm relative z-20">
              Batch Number: {medicine.batchnumber}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm relative z-20">
              Supplier: {medicine.supplier}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm relative z-20">
              Status: {medicine.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const Grid = ({ pattern, size }) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }) {
  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id="default-pattern" // Use a static ID
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill="url(#default-pattern)"
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
