import React from 'react'

const FormModal = ({ closeModal, title, fields, onInputChange }) => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5
          className="modal-title"
        >{title}</h5>
        <button type="button" className="close" aria-label="Close" onClick={closeModal}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          {
            fields.map(field => {
              return (
                <div className="form-group" key={field.label}>
                  <label htmlFor="{field.name}">{`${field.label}`}</label>
                  <input
                    id="{field.name}"
                    name={field.name}
                    type="text"
                    className="form-control"
                    placeholder={`${field.placeholder}`}
                    onChange={onInputChange}
                  />
                </div>
              )
            })
          }
        </form>
      </div>
      <div className="modal-footer">
        <button type="submit" className="submit">
            Отправить
        </button>
      </div>
    </div>
  )
}

export default FormModal
