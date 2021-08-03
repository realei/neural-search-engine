import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// What we're going to render into
const modalRoot = document.getElementById('modal');

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    // We are going  to append below to the dom
    modalRoot.appendChild(elRef.current);

    // We also need to clean up, after we're done(this is how you clean up an effect)
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;