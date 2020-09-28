import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import ListGroup from "react-bootstrap/ListGroup";

const Footer = () => (
    <footer>
        <div className="container-fluid">
            <div className="mt-3 text-center">
                <div className="row">
                    <div className="mx-auto">
                        <ListGroup horizontal>
                            <ListGroup.Item className="border-0"><a aria-label="facebook" style={{color: "inherit"}} href="https://www.facebook.com/OpenArchitex-588167811850853/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x"/></a></ListGroup.Item>
                            <ListGroup.Item className="border-0"><a aria-label="linkedin" style={{color: "inherit"}} href="https://www.linkedin.com/company/openarchitex/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a></ListGroup.Item>
                            <ListGroup.Item className="border-0"><a aria-label="github" style={{color: "inherit"}} href="https://github.com/OpenArchitex" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x"/></a></ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
                <p>
                    <small>
                        Powered by <a href="https://github.com/OpenArchitex" target="_blank" rel="noopener noreferrer">OpenArchitex</a>
                        &copy;{new Date().getFullYear()}. Code licensed under an {` `}
                        <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a>.
                    </small>
                </p>
            </div>
        </div>
    </footer>
)

export default Footer