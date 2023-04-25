import {createClient} from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.REACT_APP_SUPABASEURL;
const supabaseKey = import.meta.env.REACT_APP_SUPABASEKEY;

export const supabase = createClient(supabaseUrl, supabaseKey)