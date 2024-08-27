import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './programs.css';
import { ImCross } from "react-icons/im";

function ProgramsModal({ data, setModal }) {
  
  useEffect(() => {
    gsap.fromTo('.programsModal', { scale: 0 }, { scale: 1, duration: 0.5, ease: 'power3.out' });
  }, []);

  return (
    <div className="programsModalCon">
      <div className="programsModal">
        <div className="contactInfoCross">
          <ImCross onClick={() => setModal(false)} />
        </div>
        <div className="programsModalHeading">{data.title} Department</div>
        <div className="programsModalHeading2">Mission Statement</div>
        <div className="programsModalDes">
          {data.description}
        </div>
      </div>
    </div>
  );
}

export default ProgramsModal;
