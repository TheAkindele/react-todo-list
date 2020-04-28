import React from 'react'

const FilterTodo = ({ firlterAll, filterCompleted, filterInComplete }) => {
    return (
        <div className="filter">
            <div className="all" onClick={firlterAll}>all</div>

            <div className="completed" onClick={filterCompleted}>completed</div>

            <div className="incomplete" onClick={filterInComplete}>incomplete</div>
        </div>
    )
}

export default FilterTodo
