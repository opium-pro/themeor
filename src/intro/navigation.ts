import newId from '../themeor/utils/new-id'

import IntroPage from './pages/IntroPage'
import BoxPage from './pages/BoxPage'
import FontPage from './pages/FontPage'
import LinePage from './pages/LinePage'
import IconPage from './pages/IconPage'
import GettingStartedPage from './pages/GettingStartedPage'
import ColorPage from './pages/ColorPage'
import ScaledCssPage from './pages/ScaledCssPage'
import GapPage from './pages/GapPage'
import AlignPage from './pages/AlignPage'
import FitPage from './pages/FitPage'
import ReactionPage from './pages/ReactionPage'
import EffectPage from './pages/EffectPage'

import TemplatePage from './pages/TemplatePage'
import InversePage from './pages/InversePage'
import MergePage from './pages/MergePage'
import ThemePage from './pages/ThemePage'
import CreditsPage from './pages/CreditsPage'

export default [
  {key: newId(), value: 'Themeor', hint: 'v 0.1.3-alpha.1', component: IntroPage, path: '/', exact: true},

  {key: newId()},
  {key: newId(), value: 'Getting Started', component: GettingStartedPage, path: '/getting-started'},
  {key: newId(), value: 'Colors', component: ColorPage, path: '/colors'},
  {key: newId(), value: 'Scaled CSS', component: ScaledCssPage, path: '/scaled-css'},
  {key: newId(), value: '<Box />', component: BoxPage, path: '/box'},
  {key: newId(), value: '<Font />', component: FontPage, path: '/font'},
  {key: newId(), value: '<Line />', component: LinePage, path: '/line'},
  {key: newId(), value: '<Icon />', component: IconPage, path: '/icon'},
  {key: newId(), value: '<Gap />', component: GapPage, path: '/gap'},
  {key: newId(), value: '<Align />', component: AlignPage, path: '/align'},
  {key: newId(), value: '<Fit />', component: FitPage, path: '/fit'},

  {key: newId()},
  {key: newId(), value: 'Advanced Usage'},
  {key: newId(), value: '<Reaction />', component: ReactionPage, path: '/reaction'},
  {key: newId(), value: '<Effect />', component: EffectPage, path: '/effect'},
  {key: newId(), value: '<Template />', component: TemplatePage, path: '/template'},
  {key: newId(), value: 'Auto Inverse', component: InversePage, path: '/auto-inverse'},
  {key: newId(), value: 'Tag Merging', component: MergePage, path: '/tag-merging'},
  {key: newId(), value: 'Embedded Themes', component: ThemePage, path: '/embedded-themes'},

  {key: newId()},
  {key: newId(), value: 'More Info'},
  {key: newId(), value: 'Credits', component: CreditsPage, path: '/credits'},
]