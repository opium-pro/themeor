import React from 'react'
import { Gap, Font, Line, Align, Fit, Box } from '../../../themeor'
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

  handleToggle = (e: any) => {
    const {themeChange, autoDetectTheme, autoDetectChange} = this.context

    if (!autoDetectTheme) {
      themeChange(lightTheme)
    }

    setTimeout(() => autoDetectChange(!autoDetectTheme))
  }

  render() {
    const {theme, themeChange, autoDetectTheme, autoDetectChange} = this.context
    const {inputText, toggleIsOn} = this.state

    return (
      <ContentWrapper>
        <Align.TryTagless vert="center" row>
          <label>
          <Toggle on={autoDetectTheme} onChange={this.handleToggle} />
          <Gap />
          <Font size="lg">
            Detect color mode automatically
          </Font>
          </label>
        </Align.TryTagless>
        <Gap size="xl" />

        <Fit>
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

          {autoDetectTheme && (
            <Fit.TryTagless cover="parent" bottom="-40px">
              <Box.TryTagless fill="faint">
                <Gap.TryTagless>
                  <Align row vert="center">
                    <Font size="x2l">
                      🌞 / 🌖
                    </Font>
                    <Gap />
                    <Font size="lg">
                      Turn on/off the color theme<br />
                      on you computer to see the difference
                    </Font>
                  </Align>
                </Gap.TryTagless>
              </Box.TryTagless>
            </Fit.TryTagless>
          )}
        </Fit>

        <Gap size="x3l" />

        <Font size="xl" weight="800">
          The form bellow is not functional<br />
          is just demonstrates the color change
        </Font>

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