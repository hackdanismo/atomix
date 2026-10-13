/**
 * A reusable Button component.
 *
 * Supports native HTML button attributes and Atomix-specific
 * variants and sizes.
 *
 * @example
 * <Button>Save</Button>
 * <Button variant="secondary" size="sm">Cancel</Button>
 * <Button variant="ghost" disabled>Disabled</Button>
 * <Button type="submit">Submit</Button>
 */

/*
 * This utility type provided with React tells TypeScript that we are importing this for type checking.
 * Types do not exist at runtime, TypeScript removes this import from the compiled JavaScript.
 * Retrieve all the properties supported by the HTML button element, including its ref.
 * Properties include: onClick, className, type, children, aria-label, and ref.
 * Saves us from manually defining every native button property.
 */
import type { ComponentPropsWithRef } from 'react'
// Import the Button CSS stylesheet
import './Button.css'

/*
 * Define the props for the Button component.
 * Creates a TypeScript type alias named ButtonProps used to descrive the properties the Button will accept.
 * The 'button' argument tells TypeScript that we want all properties supported by the HTML <button> element.
 * Conceptually, this is similar to:
  type ButtonProps = {
    children?: React.ReactNode
    disabled?: boolean
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: 'button' | 'submit' | 'reset'
    ref?: React.Ref<HTMLButtonElement>
    // ...many more HTML button attributes
  }
 * React's utility type already handles all of this.
 * The export keyword makes the type available to other files e.g:
 * import type { ButtonProps } from 'atomix'
 */
export type ButtonProps = ComponentPropsWithRef<'button'> & {
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

// Declare the Button component and export it for use in other files.

/*
 * children: represents the content places between the opening and closing component tags.
 * type: set as a default value of 'button'. Can be: button, submit, or reset.
 * ...props: collect the remaining props (rest syntax) as a new object called props. Avoids having to handle every button attribute. Is JSX spread syntax.
 * ButtonProps: tells TypeScript that the object we are destructuring must match the ButtonProps type. The editor gets autocomplete and compile-time type checking.
 */
export function Button({
    type = 'button',
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}: ButtonProps) {
    const classes = [
        'atomix-button',
        `atomix-button--${variant}`,
        `atomix-button--${size}`,
        className,
    ].filter(Boolean).join(' ')

    return (
        <button 
            type={type}
            className={classes}
            {...props}
            >
                {children}
            </button>
    )
}

/* Using the Button component:
 *
 * <Button>Button</Button>
 * <Button type="submit">Submit</Button>
 * <Button type="reset">Reset</Button>
 */