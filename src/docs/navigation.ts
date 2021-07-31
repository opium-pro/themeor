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
// import EffectPage from './pages/EffectPage'
import DemoPage from './pages/DemoPage'

// import TemplatePage from './pages/TemplatePage'
// import InversePage from './pages/InversePage'
import TaglessPage from './pages/TaglessPage'
// import ThemePage from './pages/ThemePage'
import CreditsPage from './pages/CreditsPage'

import {version} from '../../package.json'

export default [
  {key: newId(), value: 'Themeor', hint: `v${version}`, component: IntroPage, path: '/', exact: true},

  {key: newId()},
  {key: newId(), value: 'Basics'},
  {key: newId(), value: 'Getting Started', component: GettingStartedPage, path: '/getting-started'},
  {key: newId(), value: 'Demo', component: DemoPage, path: '/demo'},
  {key: newId(), value: 'Default Colors', component: ColorPage, path: '/colors'},
  {key: newId(), value: 'Scaled Values', component: ScaledCssPage, path: '/scaled-css'},

  {key: newId()},
  {key: newId(), value: 'Components'},
  {key: newId(), value: '1. Box', hint: 'backgrounds, rectangles', component: BoxPage, path: '/box'},
  {key: newId(), value: '2. Font', hint: 'text (inheriting)', component: FontPage, path: '/font'},
  {key: newId(), value: '3. Line', hint: 'borders, separators', component: LinePage, path: '/line'},
  {key: newId(), value: '4. Icon', hint: 'svg icons', component: IconPage, path: '/icon'},
  {key: newId(), value: '5. Gap', hint: 'paddings, margins', component: GapPage, path: '/gap'},
  {key: newId(), value: '6. Align', hint: 'flex boxes', component: AlignPage, path: '/align'},
  {key: newId(), value: '7. Fit', hint: 'positioning', component: FitPage, path: '/fit'},
  {key: newId(), value: '8. Reaction', hint: "hover, focus, active", component: ReactionPage, path: '/reaction'},
  // {key: newId(), value: 'Effect', component: EffectPage, path: '/effect'},
  // {key: newId(), value: 'Auto Inverse', component: InversePage, path: '/auto-inverse'},
  {key: newId(), value: '11. Tagless', hint: "merge several tags into one", component: TaglessPage, path: '/tagless'},

  {key: newId()},
  {key: newId(), value: 'Credits', component: CreditsPage, path: '/credits'},
]