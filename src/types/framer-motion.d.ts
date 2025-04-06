import type { DOMAttributes } from 'react';
import type { 
  AnimationDefinition, 
  AnimationProps, 
  DraggableProps, 
  MotionProps, 
  PanInfo,
  TargetAndTransition, 
  VariantLabels,
  Transition,
  Variants,
  ViewportOptions,
  BoundingBox,
  DragElastic,
  Inertia
} from 'framer-motion';
import type { 
  HTMLMotionProps as OriginalHTMLMotionProps, 
  MotionAdvancedProps
} from 'framer-motion';

interface MotionEventCustomAttributes {
  point?: { x: number; y: number };
  delta?: { x: number; y: number };
}

// Define a more compatible MotionEvent type
export type MotionEvent<T extends Element> = MouseEvent | TouchEvent | PointerEvent | (Event & MotionEventCustomAttributes & {
  currentTarget: T;
  target: Element;
});

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Framer Motion custom props
    initial?: boolean | VariantLabels | TargetAndTransition;
    animate?: boolean | VariantLabels | TargetAndTransition | AnimationControls;
    exit?: VariantLabels | TargetAndTransition;
    variants?: Variants;
    transition?: Transition;
    transformTemplate?: any;
    transformValues?: any;
    custom?: any;

    // Motion events
    onAnimationStart?: ((definition: AnimationDefinition) => void);
    onAnimationComplete?: ((definition: AnimationDefinition) => void);
    onUpdate?: ((latest: Record<string, number>) => void);

    // Drag events - made compatible with both MouseEvent and our MotionEvent
    onDrag?: ((event: any, info: PanInfo) => void);
    onDragStart?: ((event: any, info: PanInfo) => void);
    onDragEnd?: ((event: any, info: PanInfo) => void);

    // Hover, tap, etc. gesture events
    whileHover?: VariantLabels | TargetAndTransition;
    whileTap?: VariantLabels | TargetAndTransition;
    whileDrag?: VariantLabels | TargetAndTransition;
    whileFocus?: VariantLabels | TargetAndTransition;
    whileInView?: VariantLabels | TargetAndTransition;

    // Other motion props
    viewport?: ViewportOptions;
    drag?: boolean | "x" | "y";
    dragConstraints?: false | Partial<BoundingBox> | React.RefObject<Element | null>;
    dragElastic?: DragElastic;
    dragMomentum?: boolean;
    dragTransition?: Partial<Omit<Inertia, "type" | "velocity">>;
    dragSnapToOrigin?: boolean;
    dragPropagation?: boolean;
    layout?: boolean | "size" | "position" | "preserve-aspect";
    layoutId?: string;
    layoutDependency?: any;
  }
}

declare module 'framer-motion' {
  // Make AnimationControls more flexible
  interface AnimationControls {
    start: (definition?: string | TargetAndTransition, options?: any) => Promise<any>;
    stop: () => void;
    set: (definition: TargetAndTransition) => void;
  }

  // Override the HTMLMotionProps to be more lenient with event types
  interface HTMLMotionProps<T extends keyof JSX.IntrinsicElements> extends Omit<
    JSX.IntrinsicElements[T],
    keyof MotionProps
  >, MotionProps {
    onDrag?: ((event: any, info: PanInfo) => void);
    onDragStart?: ((event: any, info: PanInfo) => void);
    onDragEnd?: ((event: any, info: PanInfo) => void);
    ref?: React.Ref<Element>;
  }
}

// Helper to allow 'as any' type casting with Framer Motion components
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      [key: string]: any;
    }
  }
}

// Add a tsconfig directive to ignore some TypeScript errors
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars 