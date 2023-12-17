import PropTypes from 'prop-types';
// form
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Button, DialogActions, DialogTitle } from '@mui/material';
// components
import Iconify from './Iconify';


// ----------------------------------------------------------------------
ViewerPrintPdf.propTypes = {
  onCancel: PropTypes.func,
  details: PropTypes.object,
};

export default function ViewerPrintPdf({ onCancel, details }) {

  return (
    <>
      {
        (details.srcPdf !== undefined && details.srcPdf !== null && details.srcPdf !== "") &&
        <>
          <DialogTitle sx={{ flexGrow: 1 }} >{details.title}</DialogTitle>
          <Box sx={{ p: 1 }}>
            <object height="600" width="100%" type="application/pdf" data={details.srcPdf} /*download={nameFile}*/>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  p: 1,
                  m: 1,
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                }}
              >
                <Button href={details.srcPdf} /*download={nameFile}*/ variant='contained' color='success'>
                  Descargar
                  <Iconify icon={'eva:download-fill'} />
                </Button>
              </Box>

            </object>
          </Box>
        </>
      }

      <DialogActions>
        <Box sx={{ flexGrow: 1 }} />
        <LoadingButton type="submit" variant="contained" onClick={() => onCancel()}>
          Cerrar
        </LoadingButton>

      </DialogActions>
    </>
  );
}
