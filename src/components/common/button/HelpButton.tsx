import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  src: string
	children: JSX.Element | JSX.Element[] | string
	onClick: () => void
}

const HelpButton = ({
	src,
	children,
	onClick = () => {},
	...rest
}: Props ) => {

	return (
		<button
			type='button'
			onClick={onClick}
			{...rest}
		> 	
			<img src={src} alt='button icon' /> 
			{ children }
		</button>
	)
}

export default HelpButton
