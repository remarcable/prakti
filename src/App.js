/* eslint-disable no-alert */
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import PageWrapper from './PageWrapper';
import ButtonGroup from './components/ButtonGroup';
import LogTable from './components/LogTable';

import { praktiMachine } from './lib/stateMachine';
import {
    persistData,
    getInitialData,
    clearPersistedData,
    getPersistedDataAsString,
    defaultLog,
} from './lib/persistence';

const App = () => {
    const [currentId, setId] = useState(
        () => Math.max(0, ...getInitialData().map(obj => obj.id)) + 1,
    );
    const getNewId = () => {
        const id = currentId;
        setId(currentId + 1);
        return id;
    };

    const [log, setLog] = useState(() => getInitialData() || defaultLog);

    const [undoItems, setUndoItems] = useState([]);
    const undo = () => {
        const [lastItem] = log;
        setUndoItems([lastItem, ...undoItems]);
        setLog(log.slice(1));
    };
    const redo = () => {
        const [lastUndoItem] = undoItems;
        setLog([lastUndoItem, ...log]);
        setUndoItems(undoItems.slice(1));
    };

    const addToLog = ({ action, currentState, nextState, meta = null }) => {
        const newLog = [
            {
                id: getNewId(),
                time: Date.now(),
                action,
                currentState,
                nextState,
                meta,
            },
            ...log,
        ];
        setLog(newLog);
        setUndoItems([]);
        persistData(newLog);
    };

    const canRedo = undoItems.length > 0;
    const canUndo = log.length > 1;

    const [{ nextState: currentState }] = log;

    const onAction = actionId => {
        const { value: nextState } = praktiMachine.transition(currentState, actionId);
        addToLog({ action: actionId, currentState, nextState });
    };

    return (
        <PageWrapper
            undo={undo}
            redo={redo}
            canUndo={canUndo}
            canRedo={canRedo}
            refreshApp={() => window.location.reload(true)}
            resetData={() => {
                const shouldReset = window.confirm('Bist du dir sicher?');
                if (!shouldReset) {
                    return;
                }

                clearPersistedData();
                setLog(defaultLog);
                setId(1);
            }}
            exportData={async () => {
                if (!window.navigator.share) {
                    alert('Export wird nur von Mobilgeräten unterstützt');
                    return;
                }
                const text = getPersistedDataAsString();
                await window.navigator.share({
                    url: '',
                    text,
                    title: 'Prakti Export',
                });

                alert('Export abgeschlossen');
            }}
            setSubject={() => {
                const newSubject = window.prompt('Neues Fach:');
                if (!newSubject) {
                    return;
                }

                addToLog({
                    action: 'NEW_SUBJECT',
                    currentState,
                    nextState: currentState,
                    meta: { newSubject },
                });
            }}
        >
            <Box display="flex" flexDirection="column">
                <ButtonGroup currentState={currentState} onAction={onAction} />
                <LogTable log={log} />
            </Box>
        </PageWrapper>
    );
};

export default App;
