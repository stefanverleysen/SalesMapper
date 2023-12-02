import React from 'react';

const BusinessInfo = ({ businessInfo, handleBusinessInfoChange, nextStep }) => {
    return (
        <div>
            <h2>Business Information</h2>
            <form>
                <div>
                    <label>Map Name:</label>
                    <input 
                        type="text" 
                        name="mapName" 
                        value={businessInfo.mapName} 
                        onChange={handleBusinessInfoChange}
                    />
                </div>
                <div>
                    <label>Business Name:</label>
                    <input 
                        type="text" 
                        name="businessName" 
                        value={businessInfo.businessName} 
                        onChange={handleBusinessInfoChange}
                    />
                </div>
                <div>
                    <label>Industry:</label>
                    <input 
                        type="text" 
                        name="industry" 
                        value={businessInfo.industry} 
                        onChange={handleBusinessInfoChange}
                    />
                </div>
                <button type="button" onClick={nextStep}>Next</button>
            </form>
        </div>
    );
};

export default BusinessInfo;





