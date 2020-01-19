import React from 'react'
import ReactDOM from 'react-dom'

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss}
      className="modal d-block"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{background: 'rgba(0,0,0,0.5)'}}
    >
      <div onClick={(e) => e.stopPropagation()} className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.title}
            </h5>
            <button
              onClick={props.onDismiss}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{props.content}</div>
          <div className="modal-footer">
            {props.actions}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal
