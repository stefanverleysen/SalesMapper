import React from 'react';

const BusinessInfo = ({ businessInfo, handleBusinessInfoChange, nextStep }) => {
    return (
        <div>
            <h2>Business Information</h2>
            <form>
                <div>
                    <label>Map Type:</label>
                    <select 
                        name="mapType" 
                        value={businessInfo.mapType} 
                        onChange={handleBusinessInfoChange}
                        disabled // since there's only one option
                    >
                        <option value="Sales Process">Sales Process</option>
                    </select>
                </div>
                <div>
                    <label>Map Name:</label>
                    <input 
                        type="text" 
                        name="mapName" 
                        value={businessInfo.mapName} 
                        onChange={handleBusinessInfoChange}
                    />
                </div>
                <button type="button" onClick={nextStep}>Next</button>
            </form>
        </div>
    );
};

export default BusinessInfo;
