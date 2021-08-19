export enum Scale {
	SMALL = 'small',
	MEDIUM = 'medium',
	LARGE = 'large',
}

export type ScaleOptions<T> = Record<Scale, T>;

export enum ColorScheme {
	DEFAULT = 'DEFAULT',
	PRIMARY = 'PRIMARY',
	SECONDARY = 'SECONDARY',
	DISABLED = 'DISABLED',
	BRAND = 'BRAND',
	ACCENT = 'ACCENT',
	SUCCESS = 'SUCCESS',
	INFO = 'INFO',
	WARNING = 'WARNING',
	ERROR = 'ERROR',
}

export enum Variant {
	OPEN,
	OUTLINED,
	CLOSED,
}

export enum Placement {
	TOP,
	BOTTOM,
	LEFT,
	RIGHT,
}

export enum Direction {
	ROW,
	COLUMN,
}
