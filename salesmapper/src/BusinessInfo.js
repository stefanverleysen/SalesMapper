import React from 'react';

const BusinessInfo = ({ businessInfo, handleBusinessInfoChange, nextStep }) => {
    return (
        <div className="container mt-4">
            <h2 className="mb-3">Business Information</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="mapType" className="form-label">Map Type:</label>
                    <select 
                        className="form-select"
                        name="mapType" 
                        value={businessInfo.mapType} 
                        onChange={handleBusinessInfoChange}
                        disabled // since there's only one option
                    >
                        <option value="Sales Process">Sales Process</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="mapName" className="form-label">Map Name:</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="mapName" 
                        value={businessInfo.mapName} 
                        onChange={handleBusinessInfoChange}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
            </form>
        </div>
    );
};

export default BusinessInfo;
