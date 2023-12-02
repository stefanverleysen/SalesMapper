import React, { useState } from 'react';

const StageInput = ({ stage, updateStage, removeStage }) => {
    const [stageName, setStageName] = useState(stage.name);

    const handleNameChange = (e) => {
        setStageName(e.target.value);
    };

    const handleUpdate = () => {
        // Check if the stage name has changed before calling updateStage
        if (stageName !== stage.name) {
            updateStage(stage.id, stageName);
        }
    };

    const handleRemove = () => {
        removeStage(stage.id);
    };

    return (
        <div>
            <input 
                type="text" 
                value={stageName} 
                onChange={handleNameChange} 
                onBlur={handleUpdate} 
            />
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default StageInput;
