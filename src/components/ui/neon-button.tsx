import React from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
    "relative group border text-foreground mx-auto text-center rounded-full transition-all duration-300",
    {
        variants: {
            variant: {
                default: "bg-indigo-500/5 hover:bg-indigo-500/10 border-indigo-500/20 hover:border-indigo-500/40",
                solid: "bg-indigo-600 hover:bg-indigo-700 text-white border-transparent hover:border-white/20 shadow-lg shadow-indigo-500/20",
                ghost: "border-transparent bg-transparent hover:border-white/10 hover:bg-white/5",
            },
            size: {
                default: "px-8 py-3",
                sm: "px-4 py-1.5",
                lg: "px-12 py-4",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { neon?: boolean }

const NeonButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, neon = true, size, variant, children, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            >
                {/* Top Neon Line */}
                <span className={cn(
                    "absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-gradient-to-r w-3/4 mx-auto from-transparent via-indigo-400 to-transparent",
                    neon ? "block" : "hidden"
                )} />
                
                {children}
                
                {/* Bottom Neon Line */}
                <span className={cn(
                    "absolute -bottom-px inset-x-0 h-px opacity-0 group-hover:opacity-50 transition-all duration-500 ease-in-out bg-gradient-to-r w-3/4 mx-auto from-transparent via-purple-500 to-transparent",
                    neon ? "block" : "hidden"
                )} />
            </button>
        );
    }
)

NeonButton.displayName = 'NeonButton';

export { NeonButton, buttonVariants };
