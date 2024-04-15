// Button.jsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot"; // Importing Slot for conditional rendering
import { cva } from "class-variance-authority"; // Importing cva to handle class variants
import { cn } from "@/lib/utils"; // Utility function for class concatenation

// Define the base styles and variants for the button
const buttonVariants = cva(
  // Base button styles using Tailwind CSS classes
  "font-orbitron inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    // Define variants for different button types
    variants: {
      variant: {
        // Default button style with gradient background
        default: "bg-gradient-to-r from-[#F2994B] to-[#F2B950] text-deep-blue font-extrabold py-2 px-4 rounded-3xl hover:scale-110 focus:outline-none focus:ring-[#F2994B]/50 shadow-lg transform active:scale-95 transition-transform",
        // Destructive style for actions like delete
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // Outline style for a button with a border and transparent background
        outline:
          "border border-input  border-t-golden-yellow border-b-warm-orange border-l-warm-orange border-r-golden-yellow  bg-background hover:bg-gradient-to-r from-[#F2994B] to-[#F2B950] hover:text-accent-foreground rounded-4xl shadow-[0_0_0_2px_rgba(242,153,74,1),0_0_0_4px_rgba(242,185,80,1)] text-white font-extrabold py-2 px-4 rounded-3xl hover:scale-110 focus:outline-none focus:ring-[#F2994B]/50 shadow-lg transform active:scale-95 transition-transform bg-transparent",
        // Additional styles can be added here...
      },
      // Size variants for the button
      size: {
        // Default size
        default: "h-10 px-4 py-2",
        // Small size
        sm: "h-9 rounded-md px-3",
        // Large size
        lg: "h-11 rounded-md px-8",
        // Icon size, making the button square
        icon: "h-10 w-10",
      },
    },
    // Set the default variant if none is specified
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// The Button component itself
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Choose between rendering as a Slot or a "button" based on the asChild prop
    const Comp = asChild ? Slot : "button";
    // Apply the class variants and pass along the ref and other props
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)} // Combine the variant classes with any custom classes passed
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button"; // Set a display name for debugging purposes

export { Button, buttonVariants }; // Export the Button component and its variants
