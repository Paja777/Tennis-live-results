import {Fragment} from 'react';
import  ReactDOM  from 'react-dom';
import { LoadingButton } from '@mui/lab';

import classes from './Modal.module.css';
import { useNavigate } from 'react-router';

const Backdrop = () =>{
    return <div className={classes.backdrop} ></div>
}; 

const ModalOverlay = () =>{
    const navigate = useNavigate();
    return <div className={classes.modal}>
        <LoadingButton
          onClick={() => navigate('/logreg')}
          
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 2, p:3 }}
        >
          Watch List of all Live Matches
        </LoadingButton>

    </div>
};
const portalElement = document.getElementById('overlays');

const Modal = () =>{
   return <Fragment>
    {ReactDOM.createPortal(<Backdrop />, portalElement!)}
    {ReactDOM.createPortal(<ModalOverlay />, portalElement!)}
   </Fragment>
};

export default Modal;