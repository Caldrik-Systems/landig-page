import { cn } from '@/lib/utils';
import { seededSquares } from '@/lib/grid-squares';
import React from 'react';

type FeatureType = {
	title: string;
	icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

type FeatureCardProps = React.ComponentProps<'div'> & {
	feature: FeatureType;
	/** Varies which grid squares are highlighted, so neighbouring cards differ. */
	seed?: number;
};

export function FeatureCard({ feature, seed = 0, className, ...props }: FeatureCardProps) {
	const squares = seededSquares(seed, 5, 7, 4, 1, 6);

	return (
		<div className={cn('relative overflow-hidden p-6 md:p-8', className)} {...props}>
			<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
				<div className="from-foreground/5 to-foreground/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
					<GridPattern
						width={20}
						height={20}
						x="-12"
						y="4"
						squares={squares}
						className="fill-brand/8 stroke-brand/20 absolute inset-0 h-full w-full mix-blend-overlay"
					/>
				</div>
			</div>
			{feature.icon && <feature.icon className="text-brand/80 size-6" strokeWidth={1} aria-hidden />}
			<h3 className={cn("text-lg font-bold text-white", feature.icon ? "mt-10" : "")}>{feature.title}</h3>
			<p className="text-gray-300 relative z-20 mt-3 text-base leading-7">{feature.description}</p>
		</div>
	);
}

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
	const patternId = React.useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([sx, sy], index) => (
						<rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={sx * width} y={sy * height} />
					))}
				</svg>
			)}
		</svg>
	);
}
