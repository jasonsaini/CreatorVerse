import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv'

dotenv.config()

const URL = process.env.URL;
const API_KEY = process.env.API_KEY;