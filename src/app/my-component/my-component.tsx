import { ComponentProps, FunctionComponent } from "react"

export interface MyComponentProps {
    // add properties
}

export const MyComponent: FunctionComponent<MyComponentProps & ComponentProps<'div'>> = ({ className, ...props }) => {
    return <div className={className} {...props}>My Component</div>
}