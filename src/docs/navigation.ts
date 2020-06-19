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

import {version} from '../../package.json'

const basicsGroup = newId()
const advancedGroup = newId()

export default [
  {key: newId(), value: 'Themeor', hint: `v${version}`, component: IntroPage, path: '/', exact: true},
  {key: newId(), value: 'Getting Started', component: GettingStartedPage, path: '/getting-started'},

  {key: newId(), groupMenu: [basicsGroup, advancedGroup]},

  {key: basicsGroup, value: 'Basics'},
  {key: newId(), group: basicsGroup, value: 'Colors', component: ColorPage, path: '/colors'},
  {key: newId(), group: basicsGroup, value: 'Scaled CSS', component: ScaledCssPage, path: '/scaled-css'},
  {key: newId(), group: basicsGroup, value: 'Box', component: BoxPage, path: '/box'},
  {key: newId(), group: basicsGroup, value: 'Font', component: FontPage, path: '/font'},
  {key: newId(), group: basicsGroup, value: 'Line', component: LinePage, path: '/line'},
  {key: newId(), group: basicsGroup, value: 'Icon', component: IconPage, path: '/icon'},
  {key: newId(), group: basicsGroup, value: 'Gap', component: GapPage, path: '/gap'},
  {key: newId(), group: basicsGroup, value: 'Align', component: AlignPage, path: '/align'},

  {key: advancedGroup, value: 'Advanced'},
  {key: newId(), group: advancedGroup, value: 'Fit', component: FitPage, path: '/fit'},
  {key: newId(), group: advancedGroup, value: 'Reaction', component: ReactionPage, path: '/reaction'},
  {key: newId(), group: advancedGroup, value: 'Effect', component: EffectPage, path: '/effect'},
  {key: newId(), group: advancedGroup, value: 'Template', component: TemplatePage, path: '/template'},
  {key: newId(), group: advancedGroup, value: 'Auto Inverse', component: InversePage, path: '/auto-inverse'},
  {key: newId(), group: advancedGroup, value: 'Tagless', component: MergePage, path: '/tagless'},
  {key: newId(), group: advancedGroup, value: 'Embedded Themes', component: ThemePage, path: '/embedded-themes'},

  {key: newId()},
  {key: newId(), value: 'Credits', component: CreditsPage, path: '/credits'},
]