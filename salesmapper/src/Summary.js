import React from 'react';

const Summary = ({ businessInfo, stages, activities, milestones, prevStep, nextStep }) => {
    return (
        <div>
            <h2>Summary</h2>
            <h3>Business Information</h3>
            <p>Map Name: {businessInfo.mapName}</p>
            <p>Business Name: {businessInfo.businessName}</p>
            <p>Industry: {businessInfo.industry}</p>

            <h3>Stages</h3>
            <ul>
                {stages.map(stage => <li key={stage.id}>{stage.name}</li>)}
            </ul>

            <h3>Activities</h3>
            <ul>
                {activities.map(activity => <li key={activity.id}>{activity.name}</li>)}
            </ul>

            <h3>Milestones</h3>
            <ul>
                {milestones.map(milestone => <li key={milestone.id}>{milestone.name}</li>)}
            </ul>

            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default Summary;












