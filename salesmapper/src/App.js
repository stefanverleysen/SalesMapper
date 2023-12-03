import React, { Component } from 'react';
import './App.css';
import bannerImage from './banner.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer'; // Import the Footer component

import BusinessInfo from './BusinessInfo'; // Ensure this is correctly imported
import Stages from './Stages';
import KeyActivitiesMilestones from './KeyActivitiesMilestones';
import Summary from './Summary';
import KanbanBoard from './KanbanBoard';

class App extends Component {
    constructor() {
        super();
        this.state = {
            step: 0,
            businessInfo: { mapType: 'Sales Process', mapName: '' },
            stages: [],
            activities: [],
            milestones: [],
        };
    }

    nextStep = () => {
        this.setState(prevState => ({ step: prevState.step + 1 }));
    };

    prevStep = () => {
        this.setState(prevState => ({ step: prevState.step - 1 }));
    };

    handleBusinessInfoChange = (e) => {
        this.setState({
            businessInfo: {
                ...this.state.businessInfo,
                [e.target.name]: e.target.value
            }
        });
    };

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

    handleActivitiesChange = (newActivities) => {
        this.setState({ activities: newActivities });
    };

    handleMilestonesChange = (newMilestones) => {
        this.setState({ milestones: newMilestones });
    };

    onDragEnd = (result) => {
        const { destination, source, draggableId, type } = result;

        if (!destination) return;

        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        if (type === 'stage') {
            const newStages = Array.from(this.state.stages);
            const draggedStage = newStages.find(stage => `stage-${stage.id}` === draggableId);

            newStages.splice(source.index, 1);
            newStages.splice(destination.index, 0, draggedStage);

            this.setState({ stages: newStages });
        }
        // Add logic for 'activity' and 'milestone' if needed
    };

    renderWelcomeScreen = () => {
        return (
            <div className="container text-center mt-5">
                <img src={bannerImage} alt="Banner" className="mb-3" style={{ maxWidth: '200px' }} />
                <h1 className="mb-3">Welcome to Automated Sales Mapper</h1>
                <p className="lead">Follow these steps to map your sales process:</p>
                <ul className="list-unstyled">
                    <li>Step 1: Provide business information.</li>
                    <li>Step 2: Define sales process stages.</li>
                    <li>Step 3: Add key activities and milestones.</li>
                    <li>Step 4: Review your sales process.</li>
                    <li>Step 5: Organize your sales process on the Kanban board.</li>
                </ul>
                <button className="btn btn-primary btn-lg" onClick={this.nextStep}>START MAPPING</button>
            </div>
        );
    }

    render() {
        const { step, businessInfo, stages, activities, milestones } = this.state;

        return (
            <div className="app-container">
                {(() => {
                    switch (step) {
                        case 0:
                            return this.renderWelcomeScreen();
                        case 1:
                            return (
                                <BusinessInfo
                                    businessInfo={businessInfo}
                                    handleBusinessInfoChange={this.handleBusinessInfoChange}
                                    nextStep={this.nextStep}
                                />
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
                })()}
                
                {/* Footer component */}
                <Footer />
            </div>
        );
    }
}

export default App;
