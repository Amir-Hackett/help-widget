import { generateImagePath } from '../../utils/generate-image-path'

export const ChatBots = () => {
	return (
		<div className='help-widget-bot'>
			{
				['/images/help_1.png', '/images/help_2.png', '/images/help_3.png'].map( (botImage, key) => (
					<img key={ key } src={generateImagePath(botImage)} alt={`bot ${ key }`} ></img>
				))
			}
		</div>
	)
}