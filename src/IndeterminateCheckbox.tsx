import React, { HTMLAttributes, RefObject } from 'react'

export const IndeterminateCheckbox = React.forwardRef <
  HTMLInputElement>(
    (
      { indeterminate, ...rest }: HTMLAttributes<HTMLInputElement> & { indeterminate?: boolean, className?: string },
      ref,
    ) => {
    const defaultRef = React.useRef<HTMLInputElement>(null)
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      const currentRef = (resolvedRef as RefObject<HTMLInputElement>).current

      if (currentRef) {
        currentRef.indeterminate = indeterminate ?? false
      }
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)
