export const IS_DEV_MODE = process.env.NODE_ENV === 'development';

export const SERVER_URL = IS_DEV_MODE
  ? 'http://14.32.136.156:7450'
  : 'http://14.32.136.156:7450';

export const PROJECT_NAME = 'hipay';

export const USER_DATA_STORAGE_NAME = `${PROJECT_NAME}_cli`;
