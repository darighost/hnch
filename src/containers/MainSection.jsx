import React from 'react'
// import VisibleTodoList from '../containers/VisibleTodoList'
import Todos from '../Todos'
import Footer from './Footer'

const MainSection = ({ todosCount, completedCount, actions }) => (
  <div>
    <section className="main">
    </section>
    <Todos />

  </div>
)

// MainSection.propTypes = {
//   todosCount: PropTypes.number.isRequired,
//   completedCount: PropTypes.number.isRequired,
//   actions: PropTypes.object.isRequired
// }

export default MainSection
