import { PopupBtn } from './components/common/button/PopupBtn'
import HelpWidget from "./components/widgets/HelpWidget";
import { WidgetContextProvider } from "./components/context/WidgetContext";
import { LibConfig } from './types/lib-config'

import './sass/app.scss';

export default function App({ config } :  { config: LibConfig }) {  
  return (
    <div className='help-widget'>
      <WidgetContextProvider config={ config }>
        <PopupBtn></PopupBtn>
        <HelpWidget></HelpWidget>
      </WidgetContextProvider>
    </div>
  )
}
