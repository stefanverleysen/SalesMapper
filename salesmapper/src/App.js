import React, { Component } from 'react';
import BusinessInfo from './BusinessInfo';
import Stages from './Stages';
import KeyActivitiesMilestones from './KeyActivitiesMilestones';
import Summary from './Summary';
import KanbanBoard from './KanbanBoard';

class App extends Component {
    constructor() {
        super();
        this.state = {
            step: 0, // Initialize the step to 0 (Welcome Screen)
            businessInfo: { mapName: '', businessName: '', industry: '' },
            stages: [],
            activities: [],
            milestones: [],
        };
    }

    // Method to proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    // Method to go back to the previous step
    prevStep = () => {
        const { step } = this.state;
        if (step > 0) {
            this.setState({ step: step - 1 });
        }
    };

    // Method to handle changes in business information
    handleBusinessInfoChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            businessInfo: {
                ...this.state.businessInfo,
                [name]: value
            }
        });
    };

    // Method to handle changes in stages
    handleStageChange = (newStages) => {
        this.setState({ stages: newStages });
    };

    // Method to update a stage
    handleStageUpdate = (id, updatedStageData) => {
        const updatedStages = this.state.stages.map(stage => {
            if (stage.id === id) {
                return { ...stage, ...updatedStageData };
            }
            return stage;
        });
        this.setState({ stages: updatedStages });
    };

    // Method to handle changes in activities
    handleActivitiesChange = (newActivities) => {
        this.setState({ activities: newActivities });
    };

    // Method to handle changes in milestones
    handleMilestonesChange = (newMilestones) => {
        this.setState({ milestones: newMilestones });
    };

    // Method to handle drag and drop
    onDragEnd = (result) => {
        // Handle drag and drop logic here
    };

    render() {
        const { step, businessInfo, stages, activities, milestones } = this.state;

        return (
            <div>
                {step === 0 && (
                    <div>
                        <h1>Welcome to Automated Sales Mapper</h1>
                        <p>
                            This tool helps you map your sales process, making it more efficient and organized.
                            Follow these steps to get started:
                        </p>
                        <ol>
                            <li>Enter your business information.</li>
                            <li>Create sales process stages.</li>
                            <li>Add key activities and milestones.</li>
                            <li>Review your sales map.</li>
                            <li>Organize your tasks on the Kanban board.</li>
                        </ol>
                        <button onClick={this.nextStep}>Get Started</button>
                    </div>
                )}

                {step === 1 && (
                    <BusinessInfo
                        businessInfo={businessInfo}
                        handleBusinessInfoChange={this.handleBusinessInfoChange}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                )}

                {step === 2 && (
                    <Stages
                        stages={stages}
                        handleStageChange={this.handleStageChange}
                        handleStageUpdate={this.handleStageUpdate}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                )}

                {step === 3 && (
                    <KeyActivitiesMilestones
                        activities={activities}
                        milestones={milestones}
                        handleActivitiesChange={this.handleActivitiesChange}
                        handleMilestonesChange={this.handleMilestonesChange}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                )}

                {step === 4 && (
                    <Summary
                        businessInfo={businessInfo}
                        stages={stages}
                        activities={activities}
                        milestones={milestones}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                )}

                {step === 5 && (
                    <KanbanBoard
                        stages={stages}
                        activities={activities}
                        milestones={milestones}
                        onDragEnd={this.onDragEnd}
                        prevStep={this.prevStep}
                    />
                )}
            </div>
        );
    }
}

export default App;
