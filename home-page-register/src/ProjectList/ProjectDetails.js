import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
  return (
    <div className='container section project-details'>
        <div class="card z-depth-0">
            <div className= 'card-content'>
                <span className='card-title'>Project Title- {id}</span>
                <p>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className= 'card-action gret lighten-4 grey-text'>
                <div>Posted by moi</div>
                <div> Aug 19 2019, 2 AM</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
