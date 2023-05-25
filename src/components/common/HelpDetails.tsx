export const HelpDetails = ({ iconClass, content }: { iconClass: string, content: string | JSX.Element }) => {
	return (
		<div className='help-widget-details'>
			<span className={iconClass}></span>
			<p>{ content }</p>
		</div>
	)
}