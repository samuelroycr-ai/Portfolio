import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Section = forwardRef(({ children, id, className, fullWidth = false, ...props }, ref) => {
    return (
        <section
            ref={ref}
            id={id}
            className={cn('py-20 md:py-32 relative scroll-mt-20 md:scroll-mt-24', className)}
            {...props}
        >
            {fullWidth ? (
                children
            ) : (
                <div className="container mx-auto px-6">
                    {children}
                </div>
            )}
        </section>
    );
});

Section.displayName = 'Section';

export default Section;
