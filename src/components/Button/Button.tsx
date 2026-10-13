import type { ComponentPropsWithRef } from 'react'

export type ButtonProps = ComponentPropsWithRef<'button'>

export function Button({
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  )
}