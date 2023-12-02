import React, { useState } from 'react';
import StageInput from './StageInput';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const Stages = ({ stages, handleStageChange, handleStageUpdate, nextStep, prevStep }) => {
    const [newStage, setNewStage] = useState('');

    const addStage = () => {
        if (newStage.trim() !== '') {
            const newStages = [
                ...stages, 
                { id: stages.length + 1, name: newStage }
            ];
            handleStageChange(newStages);
            setNewStage('');
        }
    };

    const onDragEnd = (result) => {
        const { destination, source } = result;

        if (!destination) return;

        const reorderedStages = Array.from(stages);
        const [reorderedItem] = reorderedStages.splice(source.index, 1);
        reorderedStages.splice(destination.index, 0, reorderedItem);

        handleStageChange(reorderedStages);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <h2>Sales Process Stages</h2>
                <div>
                    <input 
                        type="text"
                        value={newStage}
                        onChange={(e) => setNewStage(e.target.value)}
                        placeholder="New Stage Name"
                    />
                    <button onClick={addStage}>Add Stage</button>
                </div>
                <Droppable droppableId="stages">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {stages.map((stage, index) => (
                                <Draggable key={stage.id} draggableId={`stage-${stage.id}`} index={index}>
                                    {(provided) => (
                                        <div 
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}>
                                            <StageInput 
                                                stage={stage}
                                                updateStage={(id, newName) => handleStageUpdate(id, { name: newName })}
                                                removeStage={() => {}}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <div>
                    <button onClick={prevStep}>Previous</button>
                    <button onClick={nextStep}>Next</button>
                </div>
            </div>
        </DragDropContext>
    );
};

export default Stages;
