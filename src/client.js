import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { resolve } from 'path';


// Load environment variables from token.env file
dotenv.config({ path: 'token.env' });

// Print environment variables to the console
console.log(`URL = ${process.env.URL}`);
console.log(`API_KEY = ${process.env.API_KEY}`);


const URL = process.env.URL;
const API_KEY = process.env.API_KEY;


export const supabase = createClient(URL, API_KEY);