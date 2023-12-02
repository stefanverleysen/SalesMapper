import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const KanbanBoard = ({ stages, activities, milestones, onDragEnd }) => {
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {stages.map((stage, stageIndex) => (
                <Droppable droppableId={`stage-${stage.id}`} key={stage.id}>
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <h3>{stage.name}</h3>
                            {activities.map((activity, index) => (
                                <Draggable key={activity.id} draggableId={`activity-${activity.id}`} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}>
                                            {activity.name}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            ))}
        </DragDropContext>
    );
};

export default KanbanBoard;
