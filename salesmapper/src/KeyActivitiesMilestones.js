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
        <div className="container mt-4">
            <h2 className="mb-3">Key Activities and Milestones</h2>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={newActivity}
                    onChange={(e) => setNewActivity(e.target.value)}
                    placeholder="Add a new activity"
                />
                <button className="btn btn-outline-secondary" onClick={addActivity}>Add Activity</button>
            </div>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={newMilestone}
                    onChange={(e) => setNewMilestone(e.target.value)}
                    placeholder="Add a new milestone"
                />
                <button className="btn btn-outline-secondary" onClick={addMilestone}>Add Milestone</button>
            </div>
            <div className="mb-3">
                <h3>Current Activities</h3>
                {activities.map(activity => <p key={activity.id}>{activity.name}</p>)}
            </div>
            <div className="mb-3">
                <h3>Current Milestones</h3>
                {milestones.map(milestone => <p key={milestone.id}>{milestone.name}</p>)}
            </div>
            <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-secondary" onClick={prevStep}>Previous</button>
                <button className="btn btn-primary" onClick={nextStep}>Next</button>
            </div>
        </div>
    );
};

export default KeyActivitiesMilestones;
