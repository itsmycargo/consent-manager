import React, { PureComponent } from 'react'
import styled from 'react-emotion'
import fontStyles from './font-styles'
import { CloseBehavior } from './container'

const Root = styled<{ backgroundColor: string; textColor: string }, 'div'>('div')`
  ${fontStyles};
  border-radius: 3px;
  text-align: left;
  position: relative;
  padding: 15px;
  background: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  text-align: center;
  font-size: 16px;
  line-height: 1.3;
  overflow: hidden;
  width: 70%;
  margin: 0 auto;
  display: flex;
`

const Content = styled('div')`
  text-align: left;
  flex-weight: 80%;
  a {
    display: inline;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    text-decoration: underline;
    cursor: pointer;
  }
`

const P = styled('p')`
  margin-bottom: 15px;
`

const Div = styled('div')`
  margin-left: 15px;
  a {
    width: 200px;
    font-size: 13px;
    cursor: pointer;
  }
`

const CloseButton = styled('button')`
  margin-bottom: 20px;
  flex-weight: 20%;
  border: none;
  font: inherit;
  line-height: 16px;
  cursor: pointer;
  width: 200px;
  height: 50px;
  background: white;
  color: black;
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
  border-radius: 3px;
`

interface Props {
  innerRef: (node: HTMLElement | null) => void
  onClose: (behavior: any) => void
  onChangePreferences: () => void
  content: React.ReactNode
  subContent: React.ReactNode
  backgroundColor: string
  textColor: string
}

export default class Banner extends PureComponent<Props> {
  static displayName = 'Banner'

  render() {
    const { innerRef, onClose, content, backgroundColor, textColor } = this.props

    return (
      <Root innerRef={innerRef} backgroundColor={backgroundColor} textColor={textColor}>
        <Content>
          <P>{content}</P>
        </Content>
        <Div>
          <CloseButton
            type="button"
            title="Close"
            aria-label="Close"
            onClick={() => onClose(CloseBehavior.ACCEPT)}
          >
            Accept
          </CloseButton>
          <a onClick={() => onClose(CloseBehavior.DENY)}>Decline</a>
        </Div>
      </Root>
    )
  }
}
