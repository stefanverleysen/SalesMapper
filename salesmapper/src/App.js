import React, { Component } from 'react';
import './App.css'; // Make sure to adjust the path if needed
import bannerImage from './banner.png'; // Add the correct path to your banner image

import BusinessInfo from './BusinessInfo';
import Stages from './Stages';
import KeyActivitiesMilestones from './KeyActivitiesMilestones';
import Summary from './Summary';
import KanbanBoard from './KanbanBoard';

class App extends Component {
    constructor() {
        super();
        this.state = {
            step: 1,
            businessInfo: { mapName: '', businessName: '', industry: '' },
            stages: [],
            activities: [],
            milestones: [],
        };
    }

    // Navigation between steps
    nextStep = () => {
        this.setState(prevState => ({ step: prevState.step + 1 }));
    };

    prevStep = () => {
        this.setState(prevState => ({ step: prevState.step - 1 }));
    };

    // Handlers for business info
    handleBusinessInfoChange = (e) => {
        this.setState({
            businessInfo: {
                ...this.state.businessInfo,
                [e.target.name]: e.target.value
            }
        });
    };

    // Handlers for stages
    handleStageChange = (newStages) => {
        this.setState({ stages: newStages });
    };

    handleStageUpdate = (id, updatedStageData) => {
        const updatedStages = this.state.stages.map(stage => {
            if (stage.id === id) {
                return { ...stage, ...updatedStageData };
            }
            return stage;
        });
        this.setState({ stages: updatedStages });
    };

    // Handlers for activities and milestones
    handleActivitiesChange = (newActivities) => {
        this.setState({ activities: newActivities });
    };

    handleMilestonesChange = (newMilestones) => {
        this.setState({ milestones: newMilestones });
    };

    // Drag and drop handler for Kanban board and Stages
    onDragEnd = (result) => {
        const { destination, source, draggableId, type } = result;

        // If dropped outside the list
        if (!destination) return;

        // If dropped in the same place
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        if (type === 'stage') {
            const newStages = Array.from(this.state.stages);
            const draggedStage = newStages.find(stage => `stage-${stage.id}` === draggableId);

            newStages.splice(source.index, 1);
            newStages.splice(destination.index, 0, draggedStage);

            this.setState({ stages: newStages });
        }
        // Add similar logic for 'activity' and 'milestone' if needed
    };

    render() {
        const { step, businessInfo, stages, activities, milestones } = this.state;

        switch (step) {
            case 1:
                return (
                    <div className="App">
                        <img src={bannerImage} alt="Banner" className="App-logo" />
                        <div className="App-header">
                            <h1>Welcome to Automated Sales Mapper</h1>
                            <p>Follow these steps to map your sales process:</p>
                            <ul>
                                <li>Step 1: Provide business information.</li>
                                <li>Step 2: Define sales process stages.</li>
                                <li>Step 3: Add key activities and milestones.</li>
                                <li>Step 4: Review your sales process.</li>
                                <li>Step 5: Organize your sales process on the Kanban board.</li>
                            </ul>
                        </div>
                        <BusinessInfo
                            businessInfo={businessInfo}
                            handleBusinessInfoChange={this.handleBusinessInfoChange}
                            nextStep={this.nextStep}
                        />
                    </div>
                );
            case 2:
                return (
                    <Stages
                        stages={stages}
                        handleStageChange={this.handleStageChange}
                        handleStageUpdate={this.handleStageUpdate}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                );
            case 3:
                return (
                    <KeyActivitiesMilestones
                        activities={activities}
                        milestones={milestones}
                        handleActivitiesChange={this.handleActivitiesChange}
                        handleMilestonesChange={this.handleMilestonesChange}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                );
            case 4:
                return (
                    <Summary
                        businessInfo={businessInfo}
                        stages={stages}
                        activities={activities}
                        milestones={milestones}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                );
            case 5:
                return (
                    <KanbanBoard
                        stages={stages}
                        activities={activities}
                        milestones={milestones}
                        onDragEnd={this.onDragEnd}
                        prevStep={this.prevStep}
                    />
                );
            default:
                return null;
        }
    }
}

export default App;
