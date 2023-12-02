import React, { useState } from 'react';

const KeyActivitiesMilestones = ({ activities, milestones, handleActivitiesChange, handleMilestonesChange, nextStep, prevStep }) => {
    const [newActivity, setNewActivity] = useState('');
    const [newMilestone, setNewMilestone] = useState('');

    const addActivity = () => {
        const updatedActivities = [...activities, { id: activities.length + 1, name: newActivity }];
        handleActivitiesChange(updatedActivities);
        setNewActivity('');
    };

    const addMilestone = () => {
        const updatedMilestones = [...milestones, { id: milestones.length + 1, name: newMilestone }];
        handleMilestonesChange(updatedMilestones);
        setNewMilestone('');
    };

    return (
        <div>
            <h2>Key Activities and Milestones</h2>
            <div>
                <input
                    type="text"
                    value={newActivity}
                    onChange={(e) => setNewActivity(e.target.value)}
                    placeholder="Add a new activity"
                />
                <button onClick={addActivity}>Add Activity</button>
            </div>
            <div>
                <input
                    type="text"
                    value={newMilestone}
                    onChange={(e) => setNewMilestone(e.target.value)}
                    placeholder="Add a new milestone"
                />
                <button onClick={addMilestone}>Add Milestone</button>
            </div>
            <div>
                <h3>Current Activities</h3>
                {activities.map(activity => <p key={activity.id}>{activity.name}</p>)}
            </div>
            <div>
                <h3>Current Milestones</h3>
                {milestones.map(milestone => <p key={milestone.id}>{milestone.name}</p>)}
            </div>
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default KeyActivitiesMilestones;


