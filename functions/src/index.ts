import * as functions from 'firebase-functions';
import { jsondata } from './jsondata';

exports.api = functions.https.onRequest(jsondata);
