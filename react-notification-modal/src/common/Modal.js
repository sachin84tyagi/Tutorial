import './Modal.css'
import withModal from '../hocComponent/withModal';
import ModalContent from '../components/ModalContent';

const Modal = ({ show, onClose, customStyle, children }) => {
    return (
        show ? <div className="overlay">
            <div className="popup">
                <button style={customStyle} type="button" className="btn-close close" aria-label="Close" onClick={() => onClose(false)}></button>
                <div className="content">{children}</div>
            </div>
        </div> : <></>
    );
};

export default withModal(Modal, ModalContent);
