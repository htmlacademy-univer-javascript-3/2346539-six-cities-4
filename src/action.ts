import { createAction } from '@reduxjs/toolkit';

export const cityChange = createAction<string>('сityChange');

export const listFilling = createAction('listFilling');
