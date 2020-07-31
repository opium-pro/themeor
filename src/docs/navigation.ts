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
import DemoPage from './pages/DemoPage'

import TemplatePage from './pages/TemplatePage'
import InversePage from './pages/InversePage'
import TaglessPage from './pages/TaglessPage'
import ThemePage from './pages/ThemePage'
import CreditsPage from './pages/CreditsPage'

import {version} from '../../package.json'

export default [
  {key: newId(), value: 'Themeor', hint: `v${version}`, component: IntroPage, path: '/', exact: true},
  {key: newId(), value: 'Getting Started', component: GettingStartedPage, path: '/getting-started'},
  {key: newId(), value: 'Demo', component: DemoPage, path: '/demo'},

  {key: newId()},
  {key: newId(), value: 'Basics'},
  {key: newId(), value: '1. Colors', component: ColorPage, path: '/colors'},
  {key: newId(), value: '2. Scaled CSS', component: ScaledCssPage, path: '/scaled-css'},
  {key: newId(), value: '3. Box', component: BoxPage, path: '/box'},
  {key: newId(), value: '4. Font', component: FontPage, path: '/font'},
  {key: newId(), value: '5. Line', component: LinePage, path: '/line'},
  {key: newId(), value: '6. Icon', component: IconPage, path: '/icon'},
  {key: newId(), value: '7. Gap', component: GapPage, path: '/gap'},

  {key: newId()},
  {key: newId(), value: 'Advanced'},
  {key: newId(), value: '8. Align', hint: "the page is not ready yet", component: AlignPage, path: '/align'},
  {key: newId(), value: '9. Fit', component: FitPage, path: '/fit'},
  {key: newId(), value: '10. Reaction', hint: "the page is not ready yet", component: ReactionPage, path: '/reaction'},
  // {key: newId(), value: 'Effect', component: EffectPage, path: '/effect'},
  // {key: newId(), value: 'Template', component: TemplatePage, path: '/template'},
  // {key: newId(), value: 'Auto Inverse', component: InversePage, path: '/auto-inverse'},
  {key: newId(), value: '11. Tagless', hint: "the page is not ready yet", component: TaglessPage, path: '/tagless'},
  // {key: newId(), value: 'Embedded Themes', component: ThemePage, path: '/embedded-themes'},

  {key: newId()},
  {key: newId(), value: 'Credits', hint: "the page is not ready yet", component: CreditsPage, path: '/credits'},
]