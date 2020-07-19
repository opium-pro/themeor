import React from 'react'
import { Gap, Font, Line, Align } from '../../../themeor'
import { ContentWrapper, PageMenu, Code, TextInput, Toggle } from '../../components'
import {AppContext} from '../../context'
import darkTheme from '../../theme/theme-dark.json'
import coronaTheme from '../../theme/theme-corona.json'
import lightTheme from '../../theme/theme-light.json'

interface State {
  inputText?: string,
  toggleIsOn?: boolean,
}

export default class BoxPage_Config extends React.PureComponent<{}, State> {
  static contextType = AppContext
  state = {
    inputText: undefined,
    toggleIsOn: false,
  }

  inputChange = (e: any) => {
    this.setState({
      inputText: e.target.value
    })
  }

  toggleChange = (e: any) => {
    this.setState({
      toggleIsOn: !this.state.toggleIsOn
    })
  }

  render() {
    const {theme, themeChange} = this.context
    const {inputText, toggleIsOn} = this.state

    return (
      <ContentWrapper>

        <PageMenu.Wrapper>
          <PageMenu.Item active={theme?.meta.name === lightTheme?.meta.name}>
            <button onClick={() => themeChange(lightTheme)} type="button">Light Theme</button>
          </PageMenu.Item>

          <PageMenu.Item active={theme?.meta.name === darkTheme.meta.name}>
            <button onClick={() => themeChange(darkTheme)} type="button">Dark Theme</button>
          </PageMenu.Item>

          <PageMenu.Item active={theme?.meta.name === coronaTheme.meta.name}>
            <button onClick={() => themeChange(coronaTheme)} type="button">Corona Theme</button>
          </PageMenu.Item>
        </PageMenu.Wrapper>

        <Gap size="x3l" />

        <Font size="xl" weight="800">
          The form bellow is not functional<br />
          is just demonstrates the color change
        </Font>

        <Gap />
        <Toggle on={toggleIsOn} onChange={this.toggleChange} />
        <Gap />
        <TextInput value={inputText} onChange={this.inputChange} label="Default Input" />
        <Gap />
        <TextInput value={inputText} onChange={this.inputChange} label="Input With Error" error="Error Text" />
        <Gap />
        <TextInput value={inputText} onChange={this.inputChange} disabled label="Disabled Input" />

        <Gap size="x2l" />
      </ContentWrapper>
    )
  }
}