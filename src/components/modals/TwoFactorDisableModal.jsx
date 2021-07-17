import React from "react";
import Modal from "./Modal";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import { useEffect } from "react";

import twofactor from "../../api/auth/twofactor";
import QRCode from "qrcode.react";

const TwoFactorDisableModal = ( { close } ) => {
    
    const [loading, setLoading] = useState(true);

    return (
        <Modal close={close} >
            {loading ? (
          <div className="await">
              <div className="loader">
                 <ClipLoader size={50} color={"#4995FD"} />
              </div>
          </div>
          ) : (
              <div className="content two-factor">
                  
              </div>
          )}
        </Modal>
    )
};

export default TwoFactorDisableModal;
