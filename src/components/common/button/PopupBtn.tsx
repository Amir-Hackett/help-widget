import { useEffect } from 'react';
import { generateImagePath } from '../../../utils/generate-image-path';
import { useWidgetContext, ToggleTypes } from "../../context/WidgetContext";

export const PopupBtn = () => {
  const {
    toggle, hideChat, isChatActive, isWidgetOpen
  } = useWidgetContext()
  
  const closeClick = () => {
    if(isChatActive){
      hideChat()
      return 
    }
    toggle(ToggleTypes.widget, true)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key
    if (key === 'Escape' && isWidgetOpen) {
      if (isChatActive) {
        hideChat();
      }
      toggle(ToggleTypes.widget);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
      return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as EventTarget | null;
    const widgetContent = document.querySelector('.help-widget-content');
  
    if (widgetContent && isWidgetOpen && !widgetContent.contains(target as Node)) {
      if (isChatActive) {
        hideChat();
      } else {
        toggle(ToggleTypes.widget);
      }
    } 
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);
    
  return (
    <button onClick={closeClick} className='help-widget-logo'>
      { isWidgetOpen ? (
          <div className='active-close'> 
            <span className="fa-solid fa-chevron-down"></span>
          </div>
        ) : (
          <img src={generateImagePath('/images/solodev-star.svg')} alt="Solodev logo"/>
        ) 
      }
    </button>
  )
} 
