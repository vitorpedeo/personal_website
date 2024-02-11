/* eslint-disable */
type EnMessages = typeof import('./src/messages/en.json');
type PtMessages = typeof import('./src/messages/pt.json');

declare interface IntlMessages extends EnMessages, PtMessages {}
