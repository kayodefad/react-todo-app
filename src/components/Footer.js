import React from 'react'

const Footer = () => {
  return (
    <div className="fixed-bottom bg-dark text-light text-center p-2">
      Copyright &copy; 2020 kayodeFad{' '}
      <a
        style={{ color: '#fff' }}
        href="https://github.com/kayodefad"
        target="_blank"
      >
        <i className="fab fa-github"></i>
      </a>
    </div>
  )
}

export default Footer
