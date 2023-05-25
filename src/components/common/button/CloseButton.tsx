import { ToggleTypes, useWidgetContext } from "../../context/WidgetContext";

export const CloseButton = () => {
  const {
    toggle, isDocActive, isApiActive, isChatActive
  } = useWidgetContext()

  const Close = () => {
    if(isDocActive) {
      toggle(ToggleTypes.doc, true)
    } 
    if (isApiActive) {
      toggle(ToggleTypes.api, true)
    }
    if(isChatActive) {
      toggle(ToggleTypes.chat, true)
    } 
  }

  return (
    <><button className="fa-solid fa-chevron-right help-widget-close-btn" onClick={Close}/></>
  )
}
