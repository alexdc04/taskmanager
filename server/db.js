// imports
const dotenv = require('dotenv');
const env = require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// supabase credentials
const dataURL = process.env.SUPABASE_LINK;
const dataPASS = process.env.SUPABASE_PASSWORD;

// create client
const supabaseClient = createClient(dataURL, dataPASS);

// database functions

// submit new task
export async function taskSubmit(name, due) {
    const {data, error} = await supabaseClient
        .from('tasks')
        .insert({ task_name: name, start_time: Date.now().toString(), due_date: due})
        .select();
    
    if (error) throw new Error(error.message);
    return data[0];
}