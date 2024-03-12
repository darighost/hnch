import React from 'react'
import TodoTextInput from './TodoTextInput'

const Header = ({ addTodo }) => (
  <header className="header" data-cy="header">
    <h1>hnch</h1>
    <center>a bbs for HN gossip inspired by 5ch.
      <TodoTextInput
        newTodo
        onSave={(text) => {
          if (text.length !== 0) {
            // simulate delayed application logic
            // setTimeout(addTodo, 1000, text)
            // addTodo(text)
            console.log('on Save', text)
          }
        }}
        placeholder="What needs to be done?"
      />
    </center>
  </header>
)

// Header.propTypes = {
//   addTodo: PropTypes.func.isRequired
// }

export default Header
