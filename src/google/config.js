const GOOGLE_CLIENT_ID = process.env.REACT_APP_CLIENTID;
const GOOGLE_API_KEY = process.env.REACT_APP_APIKEY;

const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
];
const SCOPES = 'https://www.googleapis.com/auth/drive.file';

const UPLOAD_URL = 'https://www.googleapis.com/upload/drive/v3/files';
const UPLOAD_PARAMS = '?uploadType=multipart&fields=id';
const APP_FOLDER = 'Notebook-dev2020';

const initConfig = {
  apiKey: GOOGLE_API_KEY,
  clientId: GOOGLE_CLIENT_ID,
  discoveryDocs: DISCOVERY_DOCS,
  scope: SCOPES,
}