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

export default [
  {key: newId(), value: 'Themeor', hint: `v${version}`, component: IntroPage, path: '/', exact: true},
  {key: newId(), value: 'Getting Started', component: GettingStartedPage, path: '/getting-started'},

  {key: newId()},
  {key: newId(), value: 'Basics'},
  {key: newId(), value: 'Colors', component: ColorPage, path: '/color'},
  {key: newId(), value: 'Scaled CSS', component: ScaledCssPage, path: '/scaled-css'},
  {key: newId(), value: 'Box', component: BoxPage, path: '/box'},
  {key: newId(), value: 'Font', component: FontPage, path: '/font'},
  {key: newId(), value: 'Line', component: LinePage, path: '/line'},
  {key: newId(), value: 'Icon', component: IconPage, path: '/icon'},
  {key: newId(), value: 'Gap', component: GapPage, path: '/gap'},

  {key: newId()},
  {key: newId(), value: 'Advanced'},
  {key: newId(), value: 'Align', component: AlignPage, path: '/align'},
  {key: newId(), value: 'Fit', component: FitPage, path: '/fit'},
  {key: newId(), value: 'Reaction', component: ReactionPage, path: '/reaction'},
  // {key: newId(), value: 'Effect', component: EffectPage, path: '/effect'},
  // {key: newId(), value: 'Template', component: TemplatePage, path: '/template'},
  // {key: newId(), value: 'Auto Inverse', component: InversePage, path: '/auto-inverse'},
  {key: newId(), value: 'Tagless', component: MergePage, path: '/tagless'},
  // {key: newId(), value: 'Embedded Themes', component: ThemePage, path: '/embedded-themes'},

  {key: newId()},
  {key: newId(), value: 'Credits', component: CreditsPage, path: '/credits'},
]