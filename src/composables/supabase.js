
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tbkalamudirylmntevnm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRia2FsYW11ZGlyeWxtbnRldm5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3NDQ0MjcsImV4cCI6MjA0ODMyMDQyN30.AVyZ3tJyE2pXLtVMYsYUUrpPH3X29tLr__z6Vaif7rw"
const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        persistSession: true,
    },
});
export { supabase };