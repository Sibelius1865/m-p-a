import '../App.scss';
import './pages.scss';
import PageContainer from '../layout/PageContainer';

import { loadGapiInsideDOM, loadAuth2 } from 'gapi-script';
const gapi = await loadGapiInsideDOM();
import { initAuth, getFiles, signIn } from '../google/api';
import { useEffect } from 'react';


const GOOGLE_CLIENT_ID = "491526601167-ndq3lluk91vgn1hbfkcq3vdiouvr3irv.apps.googleusercontent.com";
const GOOGLE_API_KEY = "AIzaSyCHqfRYBH6X-lWGg6KtcQd41gMoo9YhTJU";

const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
];
const SCOPES = 'https://www.googleapis.com/auth/drive.file';

const UPLOAD_URL = 'https://www.googleapis.com/upload/drive/v3/files';
const UPLOAD_PARAMS = '?uploadType=multipart&fields=id';
const APP_FOLDER = 'm-p-a';


// const initConfig = {
//   apiKey: GOOGLE_API_KEY,
//   clientId: GOOGLE_CLIENT_ID,
//   discoveryDocs: DISCOVERY_DOCS,
//   scope: SCOPES,
// };

// const gapiLoaded = () => {
//   gapi.load('client', initConfig);
// }



// const getFiles = async () => {
//   let parentFolderId = await findOrCreateFolderId(APP_FOLDER);

//   const params = {
//     q: `mimeType != 'application/vnd.google-apps.folder' and trashed = false`,
//     pageSize: 100,
//     fields: 'nextPageToken, files(id, name)',
//   };

//   if (parentFolderId) {
//     params['q'] = params['q'] + ` and '${parentFolderId}' in parents`;
//   }

//   const response = await gapi.client.drive.files.list(params);
//   return response.result.files;
// }


const init = async () => {
  await gapi.load('auth2', initAuth);
}

const Papers = () => {
  // useEffect(() => {
    // gapiLoaded();
    // init();
    // signIn();
    // getFiles();
    // loadAuth2(gapi, clientId, scopes);

  // }, [])
  const list = ['hey', 'foo', 'jah', 'jah', 'jah', 'jah', 'jah']
  return (
    <PageContainer>
      <div className='papers'>
        {/* <div className='slide-area'>
          {list.map((l, i) => (<div key={i} className='items'>{l}</div>))}
        </div> */}
        <p>papers</p>
      </div>
    </PageContainer>
  )  
}

export default Papers;