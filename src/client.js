import {createClient} from '@supabase/supabase-js'

const URL = import.meta.env.VITE_SUPABASEURL;
const API_KEY = import.meta.env.VITE_SUPABASEKEY;

export const supabase = createClient(URL, API_KEY)