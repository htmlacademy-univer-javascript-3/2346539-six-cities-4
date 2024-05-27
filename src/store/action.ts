import {createAction} from '@reduxjs/toolkit';

export const cityChange = createAction<string>('сityChange');

export const listFilling = createAction('listFilling');

export const sortTypeSelect = createAction<string>('sortTypeSelect');

export const highlightMarker = createAction<{ id: string } | null>('highlightMarker');
