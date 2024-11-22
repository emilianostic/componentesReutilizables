interface Props extends React.LabelHTMLAttributes<HTMLLabelElement>{}

export function Label({children, ...props}: Props) {
  return (
    <label 
    className="block text-sm/6 font-medium text-gray-900"
    {...props}
    >
                {children}
                
              </label>
  )
}


