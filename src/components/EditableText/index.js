import {Component} from 'react'
import {
  BgContainer,
  CardContainer,
  FieldContainer,
  Heading,
  CustomField,
  Button,
} from './styledComponents'

class EditableText extends Component {
  state = {
    inputText: '',
    isEditable: true,
  }

  toggleType = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  handleChange = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {isEditable, inputText} = this.state

    return (
      <BgContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <FieldContainer>
            {isEditable ? (
              <CustomField
                as="input"
                type="text"
                value={inputText}
                onChange={this.handleChange}
              />
            ) : (
              <CustomField as="p">{inputText}</CustomField>
            )}
            <Button type="button" onClick={this.toggleType}>
              {isEditable ? 'Save' : 'Edit'}
            </Button>
          </FieldContainer>
        </CardContainer>
      </BgContainer>
    )
  }
}

export default EditableText
