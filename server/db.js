// imports
const dotenv = require('dotenv');
const env = require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// supabase credentials
const dataURL = process.env.SUPABASE_LINK;
const dataPASS = process.env.SUPABASE_PASSWORD;

// create client
const supabaseClient = createClient(dataURL, dataPASS);