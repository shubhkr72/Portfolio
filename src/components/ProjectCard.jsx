import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProjectCard(props) {
    return (
        <div style={{ width: '16rem' }}  className='col-md-6 bg-dark'>
            <Card className='h-100 shadow bg-dark text-light'>
                <div className="card-img-hover">
                    <Card.Img variant='top' src={props.projectImage} />
                </div>

                {/* <Card.Img variant='top' src={props.projectImage} /> */}
                <Card.Body className='p-4'>
                    <Card.Title className='fw-bold text-uppercase mb-4 fs-3'>{props.projectName}</Card.Title>
                    <Card.Text>{props.projectDesc}</Card.Text>
                    <div className='d-flex gap-3'>
                        <Button href={props.Liveurl} target='blank' className='shadow text-capitalize' variant='success'>Live</Button>
                        <Button href={props.GithubLink} target='blank' className='shadow text-capitalize' variant='info'>Github</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectCard;