import * as functions from 'firebase-functions';
import * as express from 'express';
import { addBookmark, getBookmarks } from "./bookmark.controller";

const app = express();

app.get('/', (req, res) => res.status(200).send('Hello, Welcome to Pin3!'));
app.post('/bookmark', addBookmark);
app.get('/bookmarks', getBookmarks);


exports.app = functions.https.onRequest(app);