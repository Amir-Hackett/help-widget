import { createContext, ReactNode, useContext, useState } from 'react'
import { useIntercom } from 'react-use-intercom'
import { LibConfig } from '../../types/lib-config'

interface WidgetContextState { 
	isWidgetOpen: boolean
	isDocActive: boolean
	isApiActive: boolean
	isChatActive: boolean
	hideChat: () => void
	toggle: (type: ToggleTypes, isActive?: boolean) => void
	config: LibConfig
}

export const WidgetContext = createContext<WidgetContextState | undefined>(undefined)

export const useWidgetContext = () => {
	const widgetContext = useContext(WidgetContext)

	if ( !widgetContext )
	throw new Error(
		'No widgetContext.Provider found when calling useWidgetContext.'
	)

	return widgetContext
}

export enum ToggleTypes {
	doc = 'doc',
	api = 'api',
	chat = 'chat',
	widget = 'widget',
}

export const WidgetContextProvider = ({ children, config }: { children: ReactNode, config: LibConfig }) => {
	const [isWidgetOpen, setIsWidgetOpen] = useState(false)
	const [isDocActive, setIsDocActive] = useState(false)
	const [isApiActive, setIsApiActive] = useState(false)
	const [isChatActive, setIsChatActive] = useState(true)
	const { hide:hideIntercom, show:showIntercom } = useIntercom()

	const hideChat = () => {
		hideIntercom()
		setIsChatActive(false)
	}

	const showChat = () => {
		setIsChatActive(true)
		showIntercom()
	}

	const hideAllFrames = () => {
		setIsApiActive(false)
		setIsDocActive(false)
		setIsChatActive(false)
	}

	const toggle = (type: ToggleTypes, isActive?: boolean) => {
		switch (type) {
			case ToggleTypes.chat:
				isActive ? hideChat() : showChat()

				break
			case ToggleTypes.api:
			case ToggleTypes.doc:
		
					hideAllFrames()

					if(isActive){
						break
					}

				if (type === ToggleTypes.api) {
					setIsApiActive(true)
					break
				}

				if (type === ToggleTypes.doc) {
					setIsDocActive(true)
				}

				break
			case ToggleTypes.widget:
				setIsWidgetOpen( prev => !prev )
				break;
			default:
				throw new Error(`Type "${ type }" is not valid`)
		}
	}

	return (
		<WidgetContext.Provider value={{
			isWidgetOpen,
			isDocActive,
			isApiActive,
			isChatActive,
			toggle,
			hideChat,
			config,
		}}>
			{children}
		</WidgetContext.Provider>
	)
}