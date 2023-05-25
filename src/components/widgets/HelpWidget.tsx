import HelpButton from '../common/button/HelpButton';
import { useWidgetContext, ToggleTypes } from '../context/WidgetContext';
import { HelpDetails } from '../common/HelpDetails';
import { ChatBots } from '../common/ChatBot';
import { DocDetails } from '../common/DocDetails';
import { ApiDetails } from '../common/ApiDetails';
import { CloseButton } from '../common/button/CloseButton';
import { generateImagePath } from '../../utils/generate-image-path';
// import SearchBar from '../common/SearchBar';

function HelpWidget() {
  
  const {
    toggle, isWidgetOpen, isDocActive, isApiActive, config,
  } = useWidgetContext()

  const contentClassName = isDocActive || isApiActive ? 'is-active' : '';

  return (
    <>
      {isWidgetOpen && (
        <div className="help-widget-overlay">
          <div className={`help-widget-content ${contentClassName}`}>
            <div className='help-widget-header'>
              <ChatBots/>
              <div>
                {isDocActive || isApiActive ? <CloseButton/> : "" }
              </div>
            </div>   
              
            <div className={`${isDocActive || isApiActive ? "is-docActive" : ""}`}>
              <div className="help-widget-flyout">
                { (isDocActive && config.docUrl) && ( <DocDetails src={config.docUrl}/> )}
                { (isApiActive && config.api_url) && ( <ApiDetails src={config.api_url}/> )} 
                
                <div className='help-widget-container'>

                  {/* <div>
                    <SearchBar />
                  </div> */}

                  <h2 className='help-widget-name'>{ config.companyName } HelpDesk</h2> 

                  { config.info?.hours && (
                    <HelpDetails 
                      iconClass={'fa-regular fa-clock'}
                      content={config.info.hours}
                    ></HelpDetails>
                  )}

                  { config.info?.email && (
                    <HelpDetails
                      iconClass={'fa-regular fa-envelope'}
                      content={<a href={`mailto:${config.info.email}`}>{config.info.email}</a>} 
                    ></HelpDetails>
                  )}

                  { config.info?.address && (
                    <HelpDetails
                      iconClass={'fa-solid fa-location-dot'}
                      content={ 
                        <>
                          <span> {config.info.address} </span>
                          <br/>
                          <a href={config.info?.map || `http://maps.google.com/maps?q=${encodeURIComponent(config.info.address)}`} target="_blank" rel="noreferrer">
                            Get Directions
                          </a>
                        </>
                      }
                    ></HelpDetails>
                  )}
                  <div className='help-widget-btn-group'>
                    { config.docUrl && ( <HelpButton src={generateImagePath('/images/docs-icon.png')} onClick={() => toggle(ToggleTypes.doc)}> Docs </HelpButton> )}
                    { config.api_url && ( <HelpButton src={generateImagePath('/images/api-icon.png')} onClick={() => toggle(ToggleTypes.api)}> API </HelpButton> )}
                    { config.intercomId && ( <HelpButton src={generateImagePath('/images/chat-icon.png')} onClick={() => toggle(ToggleTypes.chat)}> Chat </HelpButton> )}   
                    { config.phoneNumber && ( <a href={`tel:${config.phoneNumber}`}><img src={generateImagePath('/images/phone-icon.png')} alt='phone icon' />Call</a> )}
                  </div>
              </div>
            </div>   
          </div>
        </div>
      </div>   
      )}
    </>
  );
}

export default HelpWidget;
