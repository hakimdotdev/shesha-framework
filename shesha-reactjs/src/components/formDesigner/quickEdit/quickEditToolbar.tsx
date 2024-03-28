import { FormConfigurationDto } from '@/providers/form/api';
import { useFormDesigner } from '@/providers/formDesigner';
import { message } from 'antd';
import React, { FC } from 'react';
import { CreateNewVersionButton } from '../toolbar/createNewVersionButton';
import { DebugButton } from '../toolbar/debugButton';
import { FormSettingsButton } from '../toolbar/formSettingsButton';
import { OpenOnNewPageButton } from '../toolbar/openOnNewPageButton';
import { PreviewButton } from '../toolbar/previewButton';
import { PublishButton } from '../toolbar/publishButton';
import { SaveMenu } from '../toolbar/saveMenu';
import { UndoRedoButtons } from '../toolbar/undoRedoButtons';
import { CanvasConfig } from '../toolbar/canvasConfig';

export interface IQuickEditToolbarProps {
    onUpdated: () => void;
    onNewVersionCreated: (newVersion: FormConfigurationDto) => void;
}

export const QuickEditToolbar: FC<IQuickEditToolbarProps> = ({ onUpdated, onNewVersionCreated }) => {
    const { readOnly } = useFormDesigner();
    //const { loadForm } = useFormPersister();

    // todo: reload current dialog
    const onVersionCreated = (newVersion: FormConfigurationDto) => {
        message.info('New version created successfully', 3);
        //loadForm({ skipCache: true });
        if (onNewVersionCreated)
            onNewVersionCreated(newVersion);
    };

    const onSaved = () => {
        message.success('Form saved successfully');

        if (onUpdated)
            onUpdated();
    };

    const onPublished = () => {
        message.success('Form published successfully');
        if (onUpdated)
            onUpdated();
    };

    return (
        <div className="sha-designer-toolbar">
            <div className="sha-designer-toolbar-left">
                {!readOnly && (
                    <SaveMenu onSaved={onSaved}/>
                )}
                <CreateNewVersionButton onSuccess={onVersionCreated} />
                <PublishButton onPublished={onPublished}/>
            </div>
            <CanvasConfig/>
            <div className="sha-designer-toolbar-right">
                <FormSettingsButton />
                <OpenOnNewPageButton />
                <PreviewButton />
                <DebugButton />

                {!readOnly && (<UndoRedoButtons />)}
            </div>
        </div>
    );
};