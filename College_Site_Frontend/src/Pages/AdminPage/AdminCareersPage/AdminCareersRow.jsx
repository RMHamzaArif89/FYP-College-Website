import React from 'react';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

function AdminCareersRow({ careers, deleteCareers }) {
  return (
    <>
      <div className="adminEditPageTitle">{careers.jobTitle}</div>
      <div className="adminEditPageType">{careers.jobType}</div>
      <div className="adminEditPageDate">{careers.jobDate}</div>
      <div className="adminEditPageLocation">{careers.jobLocation}</div>
      <div className="adminEditPageEmail">{careers.jobEmail}</div>
      <div className="adminEditPageDepartment">{careers.jobDepartment}</div>
      <div
        className="adminEditPageDet"
        dangerouslySetInnerHTML={{ __html: careers.jobDescription }}
      />
      <div
        className="adminEditPageInstructions"
        dangerouslySetInnerHTML={{ __html: careers.jobInstructions }}
      />
      <div className="adminEditPageQualification">{careers.jobQualification}</div>
      <div className="adminEditPageBtns">
        <div
          className="adminEditPageDelete adminEditPageIcon"
          onClick={() => {
            deleteCareers(careers._id);
          }}
        >
          <MdDelete />
        </div>
        <div className="adminEditPageEdit adminEditPageIcon">
          <FaEdit />
        </div>
      </div>
    </>
  );
}

export default AdminCareersRow;
